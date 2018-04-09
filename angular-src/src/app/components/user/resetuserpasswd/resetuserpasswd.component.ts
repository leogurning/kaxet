import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from '../../../common/toastr.service'
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { UserService } from '../../../services/user.service';
import { NotifService } from '../../../services/notif.service';

@Component({
  selector: 'app-resetuserpasswd',
  templateUrl: './resetuserpasswd.component.html',
  styleUrls: ['./resetuserpasswd.component.css']
})
export class ResetuserpasswdComponent implements OnInit {
  private sub: Subscription;
  passwordForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private notifService: NotifService,
    private msconfigService: MsconfigService,
    private toastr: ToastrService,
    private userService: UserService
  ) { }
    vhash: String;
    password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
    retypepass = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.loading = true;
    this.sub = this.route.queryParams.subscribe(
      params => {
        let hash = params['id'];
        this.notifService.pageverification(hash)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.router.navigate(['login']);
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.vhash = data.hash;
          }
        });    
      });
    this.passwordForm = this.fb.group({
      passwordGroup: this.fb.group({
        password: this.password,
        retypepass: this.retypepass,
      }, {validator: comparePassword})
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  resetPassword(formdata:any): void {
    if (this.passwordForm.dirty && this.passwordForm.valid) {
      let theForm = this.passwordForm.value;
      const thePass = this.passwordForm.value.passwordGroup.password;
      theForm.password = thePass;
      theForm.hash = this.vhash;
      delete theForm.passwordGroup;
      this.loading = true;
      this.userService.doResetPasswd(theForm)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
          }
          this.passwordForm.reset();
          this.router.navigate(['login']);
      });
    }
  }

}

function comparePassword(c: AbstractControl): {[key: string]: boolean} | null {
  let passwordControl = c.get('password');
  let confirmControl = c.get('retypepass');

  if (passwordControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (passwordControl.value === confirmControl.value) {
      return null;
  }
  return { 'mismatchedPassword': true };
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { NotifService } from '../../../services/notif.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private notifService: NotifService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  contactno = new FormControl('', [Validators.required]);
  bankaccno = new FormControl('', [Validators.required]);
  bankcode = new FormControl('', [Validators.nullValidator]);
  bankname = new FormControl('', [Validators.required]);
  username = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
  retypepass = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: this.name,
      email: this.email,
      contactno: this.contactno,
      bankaccno: this.bankaccno,
      bankcode: this.bankcode,
      bankname: this.bankname,
      username: this.username,
      passwordGroup: this.fb.group({
        password: this.password,
        retypepass: this.retypepass,
      }, {validator: comparePassword})
    });
  }
/*   registerUser(formdata:any): void {
    if (this.registerForm.dirty && this.registerForm.valid) {
      let theForm = this.registerForm.value;      
      const thePass = this.registerForm.value.passwordGroup.password;
      theForm.password = thePass;
      delete theForm.passwordGroup;
      this.loading = true;
      this.userService.register(theForm)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.registerForm.reset();
          this.toastr.error(data.message);
        } else {
          //this.toastr.success(data.message);
          //this.loading = false;
          const nm = data.name;
          let payload: any = {};
          payload.emailto = theForm.email;
          payload.vlink = data.vlink;
          this.notifService.sendemailverification(payload)
          .subscribe(data => {
            if (data.success === false) {
              this.loading = false;
              this.router.navigate([`postregistered/err?${theForm.email}`]);
            } else {
              this.loading = false;
              this.router.navigate([`postregistered/${nm}?${theForm.email}`]);
            }
          },
          err => {
            this.loading = false;
            this.toastr.error(err);
            //console.log(err);
          });   
          this.registerForm.reset();
        }
        //this.registerForm.reset();
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });

    }
  } */
  registerUser(formdata:any): void {
    if (this.registerForm.dirty && this.registerForm.valid) {
      let theForm = this.registerForm.value;      
      const thePass = this.registerForm.value.passwordGroup.password;
      theForm.password = thePass;
      delete theForm.passwordGroup;
      this.loading = true;
      this.userService.registerlabel(theForm)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.toastr.error(data.message);
          this.router.navigate([`postregistered/err?${theForm.email}`]);
        } else {
          //this.toastr.success(data.message);
          //this.loading = false;
          const nm = data.name;
          this.loading = false;
          this.router.navigate([`postregistered/${nm}?${theForm.email}`]);
        }
        this.registerForm.reset();
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
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
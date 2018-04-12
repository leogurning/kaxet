import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../interface/user';

@Component({
  selector: 'app-viewlabelstats',
  templateUrl: './viewlabelstats.component.html',
  styleUrls: ['./viewlabelstats.component.css']
})
export class ViewlabelstatsComponent implements OnInit {
  profileForm: FormGroup
  user: IUser;
  loading = false;
  private sub: Subscription;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.email]);
  contactno = new FormControl('', [Validators.required]);
  bankaccno = new FormControl('', [Validators.required]);
  bankname = new FormControl('', [Validators.required]);
  lastlogin = new FormControl('', [Validators.required]);
  balance = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let labelid = params['id'];
        this.getLabel(labelid);
      });
    this.profileForm = this.fb.group({
      name: this.name,
      email: this.email,
      contactno: this.contactno,
      bankaccno: this.bankaccno,
      bankname: this.bankname,
      lastlogin: this.lastlogin,
      balance: this.balance
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getLabel(id){
    this.userService.getUser(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.user = data.data[0];
        this.populateForm(this.user);
      }
    });   
  }
  populateForm(data): void {
    this.profileForm.patchValue({
      name: data.name,
      email: data.email,
      contactno: data.contactno,
      bankaccno: data.bankaccno,
      bankname: data.bankname,
      lastlogin: this.lastlogin,
      balance: this.balance
    });
  }
  onBack(): void {
    this.router.navigate(['../labelstats'], { preserveQueryParams: true });
  }
}

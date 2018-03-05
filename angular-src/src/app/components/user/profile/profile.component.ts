import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../interface/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  userObj: any;
  user: IUser;
  loading = false;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  name = new FormControl('', [Validators.required]);
  //email = new FormControl('', [Validators.email]);
  contactno = new FormControl('', [Validators.required]);
  bankaccno = new FormControl('', [Validators.required]);
  bankcode = new FormControl('', [Validators.nullValidator]);
  bankname = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.profileForm = this.fb.group({
      name: this.name,
      contactno: this.contactno,
      bankaccno: this.bankaccno,
      bankcode: this.bankcode,
      bankname: this.bankname
    });

    this.userService.getUser(this.userObj.userid).subscribe(data => {
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
      //email: data.email,
      contactno: data.contactno,
      bankaccno: data.bankaccno,
      bankcode: data.bankcode,
      bankname: data.bankname
    });
  }

  updateUser(formdata:any): void {
    if (this.profileForm.dirty && this.profileForm.valid) {
        this.loading = true;
        this.userService.updateUser(this.userObj.userid, this.profileForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
            let theUser:any = JSON.parse(localStorage.getItem('currentUser'));
            theUser.user.name = this.profileForm.value.name;
            localStorage.setItem('currentUser', JSON.stringify(theUser));
          }
        });
      }
    }

    onBack(): void {
      this.router.navigate(['/report']);
    }
}
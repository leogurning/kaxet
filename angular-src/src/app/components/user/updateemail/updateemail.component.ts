import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../interface/user';

@Component({
  selector: 'app-updateemail',
  templateUrl: './updateemail.component.html',
  styleUrls: ['./updateemail.component.css']
})
export class UpdateemailComponent implements OnInit {
  profileForm: FormGroup
  userObj: any;
  user: IUser;
  loading = false;
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  email = new FormControl('', [Validators.email]);
  
  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.profileForm = this.fb.group({
      email: this.email
    });
  }

  updateEmail(formdata:any): void {
    if (this.profileForm.dirty && this.profileForm.valid) {
        this.profileForm.value.usertype = this.userObj.usertype;
        this.loading = true;
        this.userService.updateEmail(this.userObj.userid, this.profileForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['../errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
            let theUser:any = JSON.parse(localStorage.getItem('currentUser'));
            theUser.user.email = this.profileForm.value.email;
            theUser.user.verified_email = "N";
            localStorage.setItem('currentUser', JSON.stringify(theUser));
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/report']);
  }
}

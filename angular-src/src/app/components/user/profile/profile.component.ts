import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../interface/user';
import { MatDialog } from '@angular/material';
import { KxInfoDialogComponent } from '../../kx-info-dialog/kx-info-dialog.component';
import { NotifService } from '../../../services/notif.service';

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
//  dialogResult = "";

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private userService: UserService,
    private notifService: NotifService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

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
          this.router.navigate(['../errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.user = data.data[0];
        this.populateForm(this.user);
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
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
              this.router.navigate(['../errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
            let theUser:any = JSON.parse(localStorage.getItem('currentUser'));
            theUser.user.name = this.profileForm.value.name;
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
    
    verifyEmail(username, name, email) {
      let payload: any = {};
      payload.userid = this.userObj.userid;
      payload.email = email;
      payload.name = name;
      payload.username = username;
      this.loading = true;
      this.userService.pubemailVerify(payload)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          let dialogRef = this.dialog.open(KxInfoDialogComponent, {
            disableClose: true,
            width: '400px',
            data: 'Hi ' + name + ', We are sorry to inform that the email verification failed to be sent to ' + email + '. Please try again in few minutes.'
          });
          //this.toastr.error(data.message);
        } else {
          this.loading = false;
          let dialogRef = this.dialog.open(KxInfoDialogComponent, {
            disableClose: true,
            width: '400px',
            data: 'Hi ' + name + ', email verification has been sent to ' + email + '. Please follow the instruction in the email.'
          });   
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
/*  verifyEmail(username, name, email) {
      let payload: any = {};
      payload.email = email;
      payload.name = name;
      payload.username = username;
      this.loading = true;
      this.userService.emailVerify(payload)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.toastr.error(data.message);
        } else {
          const nm = data.name;
          let payload1: any = {};
          payload1.emailto = email;
          payload1.vlink = data.vlink;
          this.notifService.sendemailverification(payload1)
          .subscribe(data => {
            if (data.success === false) {
              this.loading = false;
              let dialogRef = this.dialog.open(KxInfoDialogComponent, {
                disableClose: true,
                width: '400px',
                data: 'Hi ' + name + ', We are sorry to inform that the email verification failed to be sent to ' + email + '. Please try again in few minutes.'
              });
              //below code is to get result from modal dialog
              // dialogRef.afterClosed().subscribe(result => {
              //  console.log(`Dialog closed: ${result}`);
              //  this.dialogResult = result;
              //}); 
            } else {
              this.loading = false;
              let dialogRef = this.dialog.open(KxInfoDialogComponent, {
                disableClose: true,
                width: '400px',
                data: 'Hi ' + name + ', email verification has been sent to ' + email + '. Please follow the instruction in the email.'
              });
            }
          },
          err => {
            this.loading = false;
            let dialogRef = this.dialog.open(KxInfoDialogComponent, {
              disableClose: true,
              width: '400px',
              data: err
            });
            //console.log(err);
          });   
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    } */

    onBack(): void {
      this.router.navigate(['/report']);
    }
}
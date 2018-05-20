import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interface/user';
import { MatDialog } from '@angular/material';
import { KxInfoDialogComponent } from '../../kx-info-dialog/kx-info-dialog.component';
import { NotifService } from '../../../services/notif.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  profileForm: FormGroup
  user: IUser;
  loading = false;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private notifService: NotifService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) { }
  email = new FormControl('', [Validators.email]);

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: this.email,
    });
  }

  sendEmail(formdata:any): void {
    let payload: any = {};
    payload.email = this.profileForm.value.email;
    this.loading = true;
    this.userService.resetPasswd(payload)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        let dialogRef = this.dialog.open(KxInfoDialogComponent, {
          disableClose: true,
          width: '400px',
          data: 'Email to reset password has been sent to ' + this.profileForm.value.email + '. Please follow the instruction in the email.'
        });    
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }

  sendEmail_OLD(formdata:any): void {
    let payload: any = {};
    payload.email = this.profileForm.value.email;
    this.loading = true;
    this.userService.resetPasswd(payload)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.toastr.error(data.message);
      } else {
        let payload1: any = {};
        payload1.emailto = this.profileForm.value.email;
        payload1.vlink = data.vlink;
        this.notifService.sendresetpasswd(payload1)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            let dialogRef = this.dialog.open(KxInfoDialogComponent, {
              disableClose: true,
              width: '400px',
              data: 'Hi, We are sorry to inform that the email to reset password failed to be sent to ' + this.profileForm.value.email + '. Please try again in few minutes.'
            });
            //below code is to get result from modal dialog
      /*       dialogRef.afterClosed().subscribe(result => {
              console.log(`Dialog closed: ${result}`);
              this.dialogResult = result;
            }); */
          } else {
            this.loading = false;
            let dialogRef = this.dialog.open(KxInfoDialogComponent, {
              disableClose: true,
              width: '400px',
              data: 'Email to reset password has been sent to ' + this.profileForm.value.email + '. Please follow the instruction in the email.'
            });
          }
        },
        err => {
          this.loading = false;
          //console.log(err);
          let dialogRef = this.dialog.open(KxInfoDialogComponent, {
            disableClose: true,
            width: '400px',
            data: err
          });
        });  
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }
}

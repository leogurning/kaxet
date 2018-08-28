import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../../interface/user';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { LabelbalancedialogComponent } from '../../labelbalancedialog/labelbalancedialog.component';
import { TrfbalanceService } from '../../../services/trfbalance.service';

@Component({
  selector: 'app-addtrfbalancereq',
  templateUrl: './addtrfbalancereq.component.html',
  styleUrls: ['./addtrfbalancereq.component.css']
})
export class AddtrfbalancereqComponent implements OnInit {
  addTrfRequestForm: FormGroup;
  user: IUser;
  private sub: Subscription;
  userObj: any;
  loading = false;
  progressvalue = 0;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private trfbalanceService: TrfbalanceService,
  ) { }
  name: String;
  bankaccno: String;
  bankaccname: String;
  bankname: String;
  amount = new FormControl('', [Validators.required]);
  insref = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.name = this.userObj.name;
    this.progressvalue = 0;
    this.addTrfRequestForm = this.fb.group({
      amount: this.amount,
      insref: this.insref
    });
    this.userService.getUser(this.userObj.userid).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.user = data.data[0];
        this.bankaccno = this.user.bankaccno;
        this.bankaccname = this.user.bankaccname;
        this.bankname = this.user.bankname;
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }

  addTrfRequest(formdata:any): void {
    this.progressvalue = 0;
  
    if (this.addTrfRequestForm.dirty && this.addTrfRequestForm.valid) {
      this.progressvalue = 10;
      let theForm = this.addTrfRequestForm.value;
      //alert('Amount to be transfered: '+ theForm.amount);  
      theForm.bankaccno = this.bankaccno;
      theForm.bankaccname = this.bankaccname;
      theForm.bankname = this.bankname;
      theForm.status = 'STSPEND';
      this.trfbalanceService.saveTrfbalancereq(this.userObj.userid, theForm)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.progressvalue = 0;
          this.toastr.error(data.message);
        } else {
          this.loading = false;
          this.progressvalue = 100;
          this.toastr.success(data.message);
        }
        this.addTrfRequestForm.reset();
        this.progressvalue = 0;
      },
      err => {
        this.loading = false;
        this.progressvalue = 0;
        //console.log(err);
        this.toastr.error(err);
      });
    } else {
        this.toastr.error('Please provide correct input...');
    }
  }

  viewlabelbalance(labelname):void {
    let dialogRef = this.dialog.open(LabelbalancedialogComponent, {
      disableClose: true,
      width: '400px',
      data: 'Hi ' + labelname + ', Please find below your balance.'
    });
  }
}

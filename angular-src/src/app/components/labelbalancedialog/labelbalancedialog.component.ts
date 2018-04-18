import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-labelbalancedialog',
  templateUrl: './labelbalancedialog.component.html',
  styleUrls: ['./labelbalancedialog.component.css']
})
export class LabelbalancedialogComponent implements OnInit {
  userObj: any;
  total: Number;
  totalstr: string;
  balances: any[];
  loading = false;
  reportTitle: string;
  success: boolean;

  constructor(
    private dialogRef: MatDialogRef<LabelbalancedialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: string,
    private transactionService: TransactionService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.fetchReport(this.userObj.userid);
  }
  fetchReport(userid) {
    this.loading = true;
    this.transactionService.getLabelbalance(userid)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.success = false; 
      } else {
        this.success = true;
        this.loading = false;
        this.reportTitle = this.data;
        this.balances = data.data;
        if (this.balances[0]) {
          let amt = this.getbalanceamt(this.balances[0]._id,this.balances[0].balance);
          let amt1 = this.getbalanceamt(this.balances[1]._id,this.balances[1].balance);
          this.total = amt + amt1;
          this.totalstr = this.total.toLocaleString();
        } else {
          this.total = 0;
          this.totalstr = "0";
        } 

      }
    });
  }
  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  }
  getbalanceamt(sign,balance): number {
    var result = balance;
    if (sign === "-") {
      result = -1 * balance;
    }
    return result;
  }
}

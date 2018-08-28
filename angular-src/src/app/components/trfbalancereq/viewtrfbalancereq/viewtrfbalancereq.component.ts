import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TrfbalanceService } from '../../../services/trfbalance.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-viewtrfbalancereq',
  templateUrl: './viewtrfbalancereq.component.html',
  styleUrls: ['./viewtrfbalancereq.component.css']
})
export class ViewtrfbalancereqComponent implements OnInit {
  trfbalancereq: any;
  trfreqid: String;
  userObj: any;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private trfbalanceService: TrfbalanceService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  trfslip:boolean;
  qsrcpg: string;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let trfreqid = params['id'];
        this.trfreqid = trfreqid;
        this.getTrfrequest(trfreqid);
      });
      this.route.queryParams.forEach((params: Params) => {
        this.qsrcpg = params['src'] || '';
      });  
  }
  getTrfrequest(id){
    this.trfbalanceService.getTrfbalancereqAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.trfbalancereq = data.data[0];
          if (this.trfbalancereq.transferslippath) {
            this.trfslip = true;
          } else {
            this.trfslip = false;
          }
        } else {
          this.toastr.error('TRF REQUEST id is incorrect in the URL');
        }
        
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  onBack(): void {
    if (this.qsrcpg === 'list') {
      this.router.navigate(['/listtrfbalancereq'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'pend') {
      this.router.navigate(['/pendingtrfbalancereq'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'cmpl') {
      this.router.navigate(['/admlisttrfbalancereq'], { preserveQueryParams: true });
    }
    
  }
}

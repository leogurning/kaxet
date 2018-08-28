import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdjustmentService } from '../../../services/admin/adjustment.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-viewadjustment',
  templateUrl: './viewadjustment.component.html',
  styleUrls: ['./viewadjustment.component.css']
})
export class ViewadjustmentComponent implements OnInit {
  adjustment: any;
  adjid: String;
  userObj: any;
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private adjustmentService: AdjustmentService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  qsrcpg: string;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let adjid = params['id'];
        this.adjid = adjid;
        this.getAdjustment(adjid);
      });
      this.route.queryParams.forEach((params: Params) => {
        this.qsrcpg = params['src'] || '';
      });  
  }
  getAdjustment(id){
    this.adjustmentService.getAdjustmentAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.adjustment = data.data[0];
        } else {
          this.toastr.error('Adjustment id is incorrect in the URL');
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
      this.router.navigate(['/listadjustment'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'pend') {
      this.router.navigate(['/pendingadjustment'], { preserveQueryParams: true });
    } /*else if (this.qsrcpg === 'cmpl') {
      this.router.navigate(['/admlisttrfbalancereq'], { preserveQueryParams: true });
    } */
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { TrfbalanceService } from '../../../services/trfbalance.service';

@Component({
  selector: 'app-listtrfbalancereq',
  templateUrl: './listtrfbalancereq.component.html',
  styleUrls: ['./listtrfbalancereq.component.css']
})
export class ListtrfbalancereqComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  totalrows: number;
  pgCounter: number;
  qinsref: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  loading = false;
  trfbalancereqs: any[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private trfbalanceService: TrfbalanceService,
    private msconfigService: MsconfigService,
  ) { }
  insref = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      insref: this.insref,
      status: this.status
    });
    this.getMsconfigGroupList('TRFBLSTATUS');
    
    this.route.queryParams.forEach((params: Params) => {
      this.qinsref = params['insref'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.insref = this.qinsref;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);

      this.reportForm.patchValue({
        insref: this.qinsref,
        status: this.qstatus
      });
    })
  }

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'TRFBLSTATUS') {
            this.sts = data.data;
          }
        } else {
          this.sts = [{code:'', value:'Empty list...'}];
        }
      } else {
        this.sts = [{code:'', value:'Error ms config list'}];
      }
    },
    err => {
      this.loading = false;
      this.sts = [{code:'', value:'Error ms config list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['listtrfbalancereq'],
        {
          queryParams: {
            insref: this.reportForm.value.insref,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      );

    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.trfbalanceService.getTrfbalancereqAggs(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        this.trfbalancereqs = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);

        this.qinsref = formval.insref;
        this.qstatus = formval.status;
        this.reportTitle = 'Transfer Request Result';
        
        this.reportForm.patchValue({
          insref: this.qinsref,
          status: this.qstatus
        });
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }

  setPage(page): void {
    this.router.navigate(['listtrfbalancereq'],
      {
        queryParams: {
          insref: this.qinsref,
          status: this.qstatus,
          page: page, 
          sortby: this.qsort }
      }
    );
  }

  createPager(number) {
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  sortTrfbalancereq(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['listtrfbalancereq'],
      {
        queryParams: { 
          insref: this.qinsref,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  showTrfbalancereq(trfbalancereqid): void {
    this.router.navigate([`viewtrfbalancereq/${trfbalancereqid}`],
      {
        queryParams: {
          src:'list', 
          insref: this.qinsref,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
}

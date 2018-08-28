import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { AdjustmentService } from '../../../services/admin/adjustment.service';
//import { SongService } from '../../services/song.service';
import { IUserList } from '../../../interface/user';
import { UsermgtService } from '../../../services/admin/usermgt.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-pendingadjustment',
  templateUrl: './pendingadjustment.component.html',
  styleUrls: ['./pendingadjustment.component.css']
})
export class PendingadjustmentComponent implements OnInit {
  navigationSubscription;
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  userlist: IUserList[];
  adjustments: any[];
  
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qfromamt: String;
  qtoamt: String;
  qrptype: string;
  qstartdt: string;
  qenddt: string;
  qpage: number;
  qsort: String;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private adjustmentService: AdjustmentService,
    private labelmgtService: UsermgtService,
    private msconfigService: MsconfigService,   
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  labelid = new FormControl('',[Validators.nullValidator]);
  fromamt = new FormControl('',[Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  toamt = new FormControl('',[Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  rptype = new FormControl('opt3');
  startdt = new FormControl({value: '', disabled: true});
  enddt = new FormControl({value: '', disabled: true});

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      labelid : this.labelid,
      fromamt: this.fromamt,
      toamt: this.toamt,
      rptype: this.rptype,
      startdt: this.startdt,
      enddt: this.enddt
    });
    this.getLabels();
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['labelid'] || '';
      this.qfromamt = params['fromamt'] || '';
      this.qtoamt = params['toamt'] || '';
      this.qrptype = params['rptype'] || '';
      this.qstartdt = params['startdt'] || '';
      this.qenddt = params['enddt'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';
      
      if(this.qrptype !== '') {
        let payload: any = {};
        payload.labelid = this.qlabelid;
        payload.status = 'STSPEND';
        payload.fromamt = this.qfromamt;
        payload.toamt = this.qtoamt;
        payload.rptype = this.qrptype;
        if( (this.qstartdt !== '' && this.qenddt !== '')){
          payload.startdt = this.qstartdt;
          payload.enddt = this.qenddt;
  
          this.reportForm.get('startdt').enable();
          this.reportForm.get('enddt').enable();
        }
        payload.page = this.qpage;
        payload.sortby = this.qsort;
        this.fetchReport(this.userObj.userid, payload);
        
        this.reportForm.patchValue({
          labelid : this.qlabelid,
          fromamt: this.qfromamt,
          toamt: this.qtoamt,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt
        });
      } else {
        this.reportForm.value.status = 'STSPEND';
        this.fetchReport(this.userObj.userid, this.reportForm.value);
      }       
    })
    this.reportForm.get('rptype').valueChanges
    .subscribe(value => this.toggleDates(value));
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  toggleDates(opt: string): void {
    const dt1Control = this.reportForm.get('startdt');
    const dt2Control = this.reportForm.get('enddt');
    if (opt === 'opt2') {
      dt1Control.setValidators(Validators.required);
      dt2Control.setValidators(Validators.required);
      dt1Control.enable();
      dt2Control.enable();
    } else {
      dt1Control.clearValidators();
      dt2Control.clearValidators();
      dt1Control.disable();
      dt2Control.disable();
      dt1Control.setValue('');
      dt2Control.setValue('');
    }
    dt1Control.updateValueAndValidity();
    dt2Control.updateValueAndValidity();
  }
  getLabels(){
    this.labelmgtService.getLabelList().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.userlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.userlist = [{_id:'', name:'Empty list...'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.userlist = [{_id:'', name:'Error label list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }
  
  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.reportForm.value);
        if (this.reportForm.value.rptype === 'opt2'){
          var pstartdt, penddt;
            try {
              pstartdt = this.datePipe.transform(this.reportForm.value.startdt, 'yyyy-MM-dd');  
            } catch (error) {
              pstartdt = this.qstartdt;
            }
            
            try {
              penddt = this.datePipe.transform(this.reportForm.value.enddt, 'yyyy-MM-dd');  
            } catch (error) {
              penddt = this.qenddt;  
            }          

          if (!pstartdt || !penddt) {
            this.toastr.error('Date format is invalid.');
          } else {
            if (pstartdt > penddt) {    
              this.toastr.error('Start date cannot be greater than end date.');
            } else {
              this.router.navigate(['pendingadjustment'],
                  {
                    queryParams: {
                      labelid : this.reportForm.value.labelid,
                      fromamt: this.reportForm.value.fromamt,
                      toamt: this.reportForm.value.toamt,
                      rptype: this.reportForm.value.rptype,
                      startdt: pstartdt,
                      enddt: penddt,
                      page: 1, 
                      sortby: null }
                  }
              );                  
            }
          }
        } else {
            this.router.navigate(['pendingadjustment'],
                {
                  queryParams: {
                    labelid : this.reportForm.value.labelid,
                    fromamt: this.reportForm.value.fromamt,
                    toamt: this.reportForm.value.toamt,
                    rptype: this.reportForm.value.rptype,
                    startdt: null,
                    enddt: null,
                    page: 1, 
                    sortby: null }
                }
            );
        }    
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.adjustmentService.getSumAdjustmentAggs(userid, formval)
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
        this.adjustments = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qlabelid = formval.labelid;
        this.qfromamt = formval.fromamt;
        this.qtoamt = formval.toamt;
        this.qrptype = formval.rptype;
        if (formval.startdt){
          this.qstartdt = formval.startdt;
          this.qenddt = formval.enddt;
        }

        this.reportTitle = 'Search Result - ';
        this.reportForm.patchValue({
          labelid : this.qlabelid,
          fromamt: this.qfromamt,
          toamt: this.qtoamt,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
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
    this.router.navigate(['pendingadjustment'],
      {
        queryParams: {
          labelid : this.qlabelid,
          fromamt: this.qfromamt,
          toamt: this.qtoamt,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
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

  sortAdjustment(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['pendingadjustment'],
      {
        queryParams: { 
          labelid : this.qlabelid,
          fromamt: this.qfromamt,
          toamt: this.qtoamt,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  showAdjustment(adjustmentid): void {
    this.router.navigate([`viewadjustment/${adjustmentid}`],
      {
        queryParams: { 
          src:'pend', 
          labelid : this.qlabelid,
          fromamt: this.qfromamt,
          toamt: this.qtoamt,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  rejectAdjustment(idx, adjid, label): void {
    
    if(confirm('Do you really want to reject this adjustment of: ' + label + ' record?')){
        
        this.loading = true;
        let payloadData: any = {};
        payloadData.status = 'STSRJCT';
        payloadData.adminuser = this.userObj.username;
        payloadData.adminuserid = this.userObj.userid;
        this.adjustmentService.updateStatusadjustment(adjid, payloadData)
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
            this.adjustments.splice(idx, 1);
            this.totalrows = this.totalrows - 1;
            this.toastr.success(data.message);
          }
        },
        err => {
          this.loading = false;
          this.toastr.error(err);
        });
      }
  }

  approveAdjustment(idx, adjid): void {
        
      this.loading = true;
      let payloadData: any = {};
      payloadData.status = 'STSCMPL';
      payloadData.adminuser = this.userObj.username;
      payloadData.adminuserid = this.userObj.userid;
      this.adjustmentService.updateStatusadjustment(adjid, payloadData)
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
          this.adjustments.splice(idx, 1);
          this.totalrows = this.totalrows - 1;
          this.toastr.success(data.message);
        }
      },
      err => {
        this.loading = false;
        this.toastr.error(err);
      });
    }
  
}

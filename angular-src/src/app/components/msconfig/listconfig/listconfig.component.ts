import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { IAggMsconfig } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-listconfig',
  templateUrl: './listconfig.component.html',
  styleUrls: ['./listconfig.component.css']
})
export class ListconfigComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  totalrows: number;
  pgCounter: number;
  qcode: String;
  qvalue: String;
  qgroup: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  msconfigs: IAggMsconfig[];
  sts: IMsconfigGroupList[] = [{code:'', value:'Error ms config list'}];
  grouplist: IMsconfigGroupList[] = [{code:'', value:'Error ms config list'}];
  loading = false;
  configuploadpath:string;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private ftService:FiletransferService,
    private globals: Globals
  ) { }

  code = new FormControl('',[Validators.nullValidator]);
  value = new FormControl('',[Validators.nullValidator]);
  group = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('',[Validators.nullValidator]);  
  
  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.configuploadpath = this.globals.configuploadpath;
    this.reportForm = this.fb.group({
      code: this.code,
      value: this.value,
      group: this.group,
      status: this.status
    });

    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GROUP');

    this.route.queryParams.forEach((params: Params) => {
      this.qcode = params['code'] || '';
      this.qvalue = params['value'] || '';
      this.qgroup = params['group'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.code = this.qcode;
      payload.value = this.qvalue;
      payload.group = this.qgroup;
      payload.status = this.qstatus;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(payload);

      this.reportForm.patchValue({
        code: this.qcode,
        value: this.qvalue,
        group: this.qgroup,
        status: this.qstatus
      });
    })
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'CSTATUS') {
            this.sts = data.data;
          }
          if (groupid == 'GROUP') {
            this.grouplist = data.data;
          }
        }
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getReport(formdata:any): void {
    if (this.reportForm.valid) {
       this.router.navigate(['listconfig'],
        {
          queryParams: {
            code: this.reportForm.value.code,
            value: this.reportForm.value.value,
            group: this.reportForm.value.group,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      ); 
      //this.fetchReport(this.reportForm.value);
    }
  }

  fetchReport(formval) {
    this.loading = true;
    this.msconfigService.getAggMsconfig(formval)
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
        this.msconfigs = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qcode = formval.code;
        this.qvalue = formval.value;
        this.qgroup = formval.group;
        this.qstatus = formval.status;
        this.reportTitle = 'Ms Config Result';
        
        this.reportForm.patchValue({
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
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
    this.router.navigate(['listconfig'],
      {
        queryParams: {
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
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

  sortConfig(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['listconfig'],
      {
        queryParams: { 
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  showConfig(msconfigid): void {
    this.router.navigate([`viewconfig/${msconfigid}`],
      { 
        queryParams: { 
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }        
      }
    );
  }

  editConfigFiles(msconfigid): void {
    this.router.navigate([`editconfigfile/${msconfigid}`],
      {
        queryParams: { 
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  editConfig(msconfigid): void {
    this.router.navigate([`editconfig/${msconfigid}`],
      {
        queryParams: { 
          code: this.qcode,
          value: this.qvalue,
          group: this.qgroup,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  confirmDel(idx: number, msconfigid: string, code:string, filename:string) {

    this.loading = true;

    if(confirm('Do you really want to delete this config: ' + code + ' record?')){
      if (filename) {
        let payloadData: any = {};
        payloadData.uploadpath = this.configuploadpath;
        payloadData.filename = filename;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
            if (data.success === false) {
              //this.toastr.error(data.message);
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.filename);
            }   
          },
          err => {
            console.log('Error deleted ' + err);
          });
      }
      this.msconfigService.deleteMsconfig(msconfigid)
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
          this.msconfigs.splice(idx, 1);
          this.totalrows = this.totalrows - 1;
          this.toastr.success(data.message);
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });  
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service';
import { AuthService } from '../../services/auth.service';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { IUser } from '../../interface/user';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';

@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  labellist: IUser[];
  totalrows: number;
  pgCounter: number;
  qlabelname: String;
  qusername: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];

  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  name = new FormControl('',[Validators.nullValidator]);
  username = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('STSPEND', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      name: this.name,
      username: this.username,
      status: this.status
    });
    this.getMsconfigGroupList('STATUS');
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelname = params['name'] || '';
      this.qusername = params['username'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.name = this.qlabelname;
      payload.username = this.qusername;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);

      this.reportForm.patchValue({
        name: this.qlabelname,
        username: this.qusername,
        status: 'STSPEND'
      });
    })
  }

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.sts = data.data;
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
        }
      }
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        this.fetchReport(this.userObj.userid, this.reportForm.value);

    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.labelmgtService.getUserLabels(formval)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        this.labellist = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);

        this.qlabelname = formval.name;
        this.qusername = formval.username;
        this.qstatus = formval.status;
        this.reportTitle = 'Labels Result';
        
        this.reportForm.patchValue({
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus
        });
      }
    });
  }

  setPage(page): void {
    this.router.navigate(['usermanagement'],
      {
        queryParams: {
          name: this.qlabelname,
          username: this.qusername,
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

  sortLabel(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['usermanagement'],
      {
        queryParams: { 
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  activateLabel(userid: string, labelname: string, status: string) {

    this.loading = true;
    if (status == 'STSACT') {
      this.loading = false;
      this.toastr.warning('The label is already active.');
    } else {
      if(confirm('Do you really want to activate this label: ' + labelname + ' record?')){
        let payloadData: any = {};
        payloadData.status = 'STSACT';
        this.labelmgtService.updateLabelStatus(userid, payloadData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.toastr.success(data.message);
          }
        });
      } else {
        this.loading = false;
      }
    }
  }

  deactivateLabel(userid: string, labelname: string, status: string) {
    
    this.loading = true;
    if (status != 'STSACT') {
      this.loading = false;
      this.toastr.warning('The label is already NOT active.');
    } else {
      if(confirm('Do you really want to deactivate this label: ' + labelname + ' record?')){
        let payloadData: any = {};
        payloadData.status = 'STSINACT';
        this.labelmgtService.updateLabelStatus(userid, payloadData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.toastr.success(data.message);
          }
        });
      } else {
        this.loading = false;
      }
    }
  }
  
  showLabel(userid): void {
    this.router.navigate([`viewlabel/${userid}`],
      {
        queryParams: { 
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      });
  }

}

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
import { NotifService } from '../../services/notif.service';
import { Globals } from '../../app.global';

@Component({
  selector: 'app-labelstats',
  templateUrl: './labelstats.component.html',
  styleUrls: ['./labelstats.component.css']
})
export class LabelstatsComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  labellist: IUser[];
  totalrows: number;
  pgCounter: number;
  qlabelname: String;
  qusername: String;
  qstatus: String;
  qveremail: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  yn:IMsconfigGroupList[];
  loading = false;
  urlkaxet: String;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private notifService: NotifService,
    private globals: Globals,
  ) { }
  name = new FormControl('',[Validators.nullValidator]);
  username = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);
  veremail = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      name: this.name,
      username: this.username,
      status: this.status,
      veremail: this.veremail
    });
    this.urlkaxet = this.globals.kaxeturl;
    this.getMsconfigGroupList('STATUS');
    this.getMsconfigGroupList('YRN');
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelname = params['name'] || '';
      this.qusername = params['username'] || '';
      this.qstatus = params['status'] || '';
      this.qveremail = params['veremail'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.name = this.qlabelname;
      payload.username = this.qusername;
      payload.veremail = this.qveremail;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);

      this.reportForm.patchValue({
        name: this.qlabelname,
        username: this.qusername,
        status: this.qstatus,
        veremail: this.qveremail
      });
    })
  }

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'STATUS') {
            this.sts = data.data;
          }
          if (groupid == 'YRN') {
            this.yn = data.data;
          } 
          
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
          this.yn = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
      this.yn = [{code:'', value:'Error ms config list'}];
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['labelstats'],
        {
          queryParams: {
            name: this.reportForm.value.name,
            username: this.reportForm.value.username,
            status: this.reportForm.value.status,
            veremail: this.reportForm.value.veremail,
            page: 1, 
            sortby: null }
        }
      );
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
          this.router.navigate(['errorpage']);
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
        this.qveremail = formval.veremail;
        this.reportTitle = 'Labels Result';
        
        this.reportForm.patchValue({
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          veremail: this.qveremail
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
    this.router.navigate(['labelstats'],
      {
        queryParams: {
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          veremail: this.qveremail,
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
  
    this.router.navigate(['labelstats'],
      {
        queryParams: { 
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          veremail: this.qveremail,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  
  activateLabel(userid: string, labelname: string, status: string, email: string, username: string) {
    
    this.loading = true;
    if (status == 'STSACT') {
      this.loading = false;
      this.toastr.warning('The label is already active.');
    } else {
      if (status === 'STSRJCT') {
        this.loading = false;
        this.toastr.warning('The label is already rejected.');
      } else {
        if(confirm('Do you really want to activate this label: ' + labelname + ' record?')){
          let payloadData: any = {};
          payloadData.labelid = userid;
          payloadData.emailto = email;
          payloadData.vlink = this.urlkaxet;
          payloadData.username = username;
          payloadData.status = 'STSACT';
          this.labelmgtService.pubupdateLabelstatus(this.userObj.userid, payloadData)
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
              this.fetchReport(this.userObj.userid, this.reportForm.value);
              this.toastr.success(data.message);
            }
          },
          err => {
            this.loading = false;
            //console.log(err);
            this.toastr.error(err);
          });
        } else {
          this.loading = false;
        }
      }
    }
  }
/*   activateLabel(userid: string, labelname: string, status: string, email: string, username: string) {

    this.loading = true;
    if (status == 'STSACT') {
      this.loading = false;
      this.toastr.warning('The label is already active.');
    } else {
      if (status === 'STSRJCT') {
        this.loading = false;
        this.toastr.warning('The label is already rejected.');
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
                this.router.navigate(['errorpage']);
              }
              this.toastr.error(data.message);
            } else {
              let payload: any = {};
              payload.emailto = email;
              payload.vlink = this.urlkaxet;
              payload.username = username;
              let successmsg = data.message;
              this.notifService.sendemailwelcome(payload)
              .subscribe(data => {
                this.loading = false;
                if (data.success === true) {
                  this.toastr.success(successmsg);
                } else {
                  this.toastr.warning(successmsg + '. However welcome email not send. ' + data.message);
                }
                this.fetchReport(this.userObj.userid, this.reportForm.value);
              },
              err => {
                this.loading = false;
                //console.log(err);
                this.toastr.error(err);
                this.fetchReport(this.userObj.userid, this.reportForm.value);
              });
            }
          },
          err => {
            this.loading = false;
            //console.log(err);
            this.toastr.error(err);
          });
        } else {
          this.loading = false;
        }
      }
    }
  } */
  
  deactivateLabel(userid: string, labelname: string, status: string, email: string, username: string) {
    
    this.loading = true;
    if (status === 'STSPEND') {
      if(confirm('Do you really want to reject this label: ' + labelname + ' record?')){
        let payloadData: any = {};
        payloadData.labelid = userid;
        payloadData.username = username;
        payloadData.status = 'STSRJCT';
        this.labelmgtService.pubupdateLabelstatus(this.userObj.userid, payloadData)
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
            this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.toastr.success(data.message);
          }
        },
        err => {
          this.loading = false;
          //console.log(err);
          this.toastr.error(err);
        });
      } else {
        this.loading = false;
      }
    } else {
      if (status != 'STSACT') {
        this.loading = false;
        this.toastr.warning('The label is already NOT active.');
      } else {
        if(confirm('Do you really want to deactivate this label: ' + labelname + ' record?')){
          let payloadData: any = {};
          payloadData.labelid = userid;
          payloadData.emailto = email;
          payloadData.username = username;
          payloadData.status = 'STSINACT';
          this.labelmgtService.pubupdateLabelstatus(this.userObj.userid, payloadData)
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
              this.fetchReport(this.userObj.userid, this.reportForm.value);
              this.toastr.success(data.message);              
            }
          },
          err => {
            this.loading = false;
            //console.log(err);
            this.toastr.error(err);
          });
        } else {
          this.loading = false;
        }
      }
    }
  }
/*   deactivateLabel(userid: string, labelname: string, status: string, email: string, username: string) {
    
    this.loading = true;
    if (status === 'STSPEND') {
      if(confirm('Do you really want to reject this label: ' + labelname + ' record?')){
        let payloadData: any = {};
        payloadData.status = 'STSRJCT';
        this.labelmgtService.updateLabelStatus(userid, payloadData)
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
            this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.toastr.success(data.message);
          }
        },
        err => {
          this.loading = false;
          //console.log(err);
          this.toastr.error(err);
        });
      } else {
        this.loading = false;
      }
    } else {
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
                this.router.navigate(['errorpage']);
              }
              this.toastr.error(data.message);
            } else {
              let payload: any = {};
              payload.emailto = email;
              payload.username = username;
              let successmsg = data.message;
              this.notifService.senddeactivation(payload)
              .subscribe(data => {
                this.loading = false;
                if (data.success === true) {
                  this.toastr.success(successmsg);
                } else {
                  this.toastr.warning(successmsg + '. However welcome email not send. ' + data.message);
                }
                this.fetchReport(this.userObj.userid, this.reportForm.value);
              },
              err => {
                this.loading = false;
                //console.log(err);
                this.toastr.error(err);
              });
            }
          },
          err => {
            this.loading = false;
            //console.log(err);
            this.toastr.error(err);
          });
        } else {
          this.loading = false;
        }
      }
    }
  } */
  
  showLabel(userid): void {
    this.router.navigate([`viewlabelstats/${userid}`],
      {
        queryParams: { 
          name: this.qlabelname,
          username: this.qusername,
          status: this.qstatus,
          veremail: this.qveremail,
          page: this.qpage || 1, 
          sortby: this.qsort }
      });
  }
}

import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
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
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})
export class UsermgtComponent implements OnInit {
  navigationSubscription;
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  labellist: IUser[];
  totalrows: number;
  pgCounter: number;
  qlabelname: String;
  qusername: String;
  qpage: number;
  qsort: String;
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
  ) { 
    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  name = new FormControl('',[Validators.nullValidator]);
  username = new FormControl('',[Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      name: this.name,
      username: this.username,
    });
    this.urlkaxet = this.globals.kaxeturl;
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelname = params['name'] || '';
      this.qusername = params['username'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.name = this.qlabelname;
      payload.username = this.qusername;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);
      this.reportForm.patchValue({
        name: this.qlabelname,
        username: this.qusername
      });
    })
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['usermanagement'],
        {
          queryParams: {
            name: this.reportForm.value.name,
            username: this.reportForm.value.username,
            page: 1, 
            sortby: null }
        }
      );
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.labelmgtService.getPendingUserLabels(formval)
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
        this.reportTitle = 'Pending Approval List ';
        this.reportForm.patchValue({
          name: this.qlabelname,
          username: this.qusername
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
                this.router.navigate(['usermanagement'],
                  {
                    queryParams: { 
                      name: this.qlabelname,
                      username: this.qusername,
                      page: this.qpage || 1, 
                      sortby: this.qsort }
                  }
                );
              });
            }
          });
        } else {
          this.loading = false;
        }
      }
    }
  }

  deactivateLabel(userid: string, labelname: string, status: string, email: string, username: string) {
    
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
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
            this.router.navigate(['usermanagement'],
                {
                  queryParams: { 
                    name: this.qlabelname,
                    username: this.qusername,
                    page: this.qpage || 1, 
                    sortby: this.qsort }
                }
            );
          }
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
                this.router.navigate(['login']);
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
                this.router.navigate(['usermanagement'],
                    {
                      queryParams: { 
                        name: this.qlabelname,
                        username: this.qusername,
                        page: this.qpage || 1, 
                        sortby: this.qsort }
                    }
                );
              });
            }
          });
        } else {
          this.loading = false;
        }
      }
    }
  }
  
  showLabel(userid): void {
    this.router.navigate([`viewlabel/${userid}`],
      {
        queryParams: { 
          name: this.qlabelname,
          username: this.qusername,
          page: this.qpage || 1, 
          sortby: this.qsort }
      });
  }

}

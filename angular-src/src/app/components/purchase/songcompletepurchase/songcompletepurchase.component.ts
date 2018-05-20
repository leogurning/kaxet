import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { SongpurchaseService } from '../../../services/songpurchase.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-songcompletepurchase',
  templateUrl: './songcompletepurchase.component.html',
  styleUrls: ['./songcompletepurchase.component.css']
})
export class SongcompletepurchaseComponent implements OnInit {
  navigationSubscription;
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  songpurchase: any[];
  totalrows: number;
  pgCounter: number;
  qartistname: String;
  //qalbumname: String;
  qbuyername: String;
  qsongname: String;
  qstatus: String;
  qpaymentmtd: String;
  qrptype: string;
  qstartdt: string;
  qenddt: string;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  pmtd: IMsconfigGroupList[];
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private songpurchaseService: SongpurchaseService,
    private msconfigService: MsconfigService,    
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  artistname = new FormControl('',[Validators.nullValidator]);
  //albumname = new FormControl('',[Validators.nullValidator]);  
  buyername = new FormControl('',[Validators.nullValidator]);  
  songname = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('',[Validators.nullValidator]);
  rptype = new FormControl('opt3');
  startdt = new FormControl({value: '', disabled: true});
  enddt = new FormControl({value: '', disabled: true});
  paymentmtd = new FormControl('',[Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      artistname: this.artistname,
      //albumname: this.albumname,
      buyername: this.buyername,
      songname: this.songname,
      status: this.status,
      rptype: this.rptype,
      startdt: this.startdt,
      enddt: this.enddt,
      paymentmtd: this.paymentmtd
    });
    this.getMsconfigGroupList('PMTSTATUS');
    this.getMsconfigGroupList('PMTMETHOD');
    this.route.queryParams.forEach((params: Params) => {
      this.qartistname = params['artistname'] || '';
      //this.qalbumname = params['albumname'] || '';
      this.qbuyername = params['buyername'] || '';
      this.qsongname = params['songname'] || '';
      this.qstatus = params['status'] || '';
      this.qpaymentmtd = params['paymentmtd'] || '';
      this.qrptype = params['rptype'] || '';
      this.qstartdt = params['startdt'] || '';
      this.qenddt = params['enddt'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';
      
      if(this.qrptype !== '') {
        let payload: any = {};
        payload.artistname = this.qartistname;
        //payload.albumname = this.qalbumname;
        payload.buyername = this.qbuyername;
        payload.songname = this.qsongname;
        payload.status = this.qstatus;
        payload.paymentmtd = this.qpaymentmtd;
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
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt
        });
      } else {
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
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'PMTSTATUS') {
            this.sts = data.data;
          }
          if (groupid == 'PMTMETHOD') {
            this.pmtd = data.data;
          }
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
          this.pmtd = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.sts = [{code:'', value:'Error ms config list'}];
      this.pmtd = [{code:'', value:'Error ms config list'}];
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
              this.router.navigate(['songcompletepurchase'],
                  {
                    queryParams: {
                      artistname: this.reportForm.value.artistname,
                      //albumname: this.reportForm.value.albumname,
                      buyername: this.reportForm.value.buyername,
                      songname: this.reportForm.value.songname,
                      status: this.reportForm.value.status,
                      paymentmtd: this.reportForm.value.paymentmtd,
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
            this.router.navigate(['songcompletepurchase'],
                {
                  queryParams: {
                    artistname: this.reportForm.value.artistname,
                    //albumname: this.reportForm.value.albumname,
                    buyername: this.reportForm.value.buyername,
                    songname: this.reportForm.value.songname,
                    status: this.reportForm.value.status,
                    paymentmtd: this.reportForm.value.paymentmtd,
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
    this.songpurchaseService.getSongpurchaseAggs(userid, formval)
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
        this.songpurchase = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qartistname = formval.artistname;
        //this.qalbumname = formval.albumname;
        this.qbuyername = formval.buyername;
        this.qsongname = formval.songname;
        this.qstatus = formval.status;
        this.qpaymentmtd = formval.paymentmtd;
        this.qrptype = formval.rptype;
        if (formval.startdt){
          this.qstartdt = formval.startdt;
          this.qenddt = formval.enddt;
        }

        /* if (formval.rptype === 'opt1') {
          this.reportTitle = 'Song purchase for ' + this.datePipe.transform(new Date(), 'MMM y');
        } else if (formval.rptype === 'opt2') {
            this.reportTitle = 'Song purchase between ' + this.datePipe.transform(new Date(formval.startdt), 'd MMM y') + ' and ' + this.datePipe.transform(new Date(formval.enddt), 'd MMM y');
            //this.reportTitle = 'Song purchase between ' + formval.startdt + ' and ' + formval.enddt;
        } else if (formval.rptype === 'opt3') {
          this.reportTitle = 'Song purchase for today'
        } */
        this.reportTitle = 'Search Result - ';
        this.reportForm.patchValue({
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
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
    this.router.navigate(['songcompletepurchase'],
      {
        queryParams: {
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
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

  sortSongpurchase(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['songcompletepurchase'],
      {
        queryParams: { 
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  showSong(songid): void {
    this.router.navigate([`viewsongpurchase/${songid}`],
      {
        queryParams: { 
          srcpg:'comp',
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  showPurchase(songpurchaseid): void {
    this.router.navigate([`viewpurchase/${songpurchaseid}`],
      {
        queryParams: { 
          srcpg:'comp',
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          status: this.qstatus,
          paymentmtd: this.qpaymentmtd,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { SongpurchaseService } from '../../../services/songpurchase.service';
import { TransactionService } from '../../../services/transaction.service';
import { SongService } from '../../../services/song.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-songpendingpurchase',
  templateUrl: './songpendingpurchase.component.html',
  styleUrls: ['./songpendingpurchase.component.css']
})
export class SongpendingpurchaseComponent implements OnInit {
  navigationSubscription;
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  songpendings: any[];
  totalrows: number;
  pgCounter: number;
  qartistname: String;
  //qalbumname: String;
  qbuyername: String;
  qsongname: String;
  qrptype: string;
  qstartdt: string;
  qenddt: string;
  qpage: number;
  qsort: String;
  pfee: IMsconfigGroupList;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private songpurchaseService: SongpurchaseService,
    private transactionService: TransactionService,
    private songService: SongService,
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
  rptype = new FormControl('opt3');
  startdt = new FormControl({value: '', disabled: true});
  enddt = new FormControl({value: '', disabled: true});  

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      artistname: this.artistname,
      //albumname: this.albumname,
      buyername: this.buyername,
      songname: this.songname,
      rptype: this.rptype,
      startdt: this.startdt,
      enddt: this.enddt
    });
    this.getMsconfigVal('PFEE','FEE');
    this.route.queryParams.forEach((params: Params) => {
      this.qartistname = params['artistname'] || '';
      //this.qalbumname = params['albumname'] || '';
      this.qbuyername = params['buyername'] || '';
      this.qsongname = params['songname'] || '';
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
  getMsconfigVal(code, groupid){
    this.msconfigService.getMsconfigvalue(code, groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.pfee = data.data[0];
        } else {
          this.pfee = {code:'', value:'Error ms config list'};
        }
      }
    },
    err => {
      this.loading = false;
      this.pfee = {code:'', value:'Error ms config list'};
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
              this.router.navigate(['songpendingpurchase'],
                  {
                    queryParams: {
                      artistname: this.reportForm.value.artistname,
                      //albumname: this.reportForm.value.albumname,
                      buyername: this.reportForm.value.buyername,
                      songname: this.reportForm.value.songname,
                      rptype: this.reportForm.value.rptype,
                      startdt: pstartdt,
                      enddt: penddt,
                      page: 1, 
                      sortby: null }
                  }
              );                  
            }
             /* if (!this.isValidDate2(pstartdt) || !this.isValidDate2(penddt) ) {
                this.toastr.error('Input date is invalid.');
             } else { 
                var bits = pstartdt.split('-');
                var y = bits[2],
                  m = bits[1],
                  d = bits[0];
                let ipstartdt = new Date(y+ '-' +m+ '-' +d);
                bits = penddt.split('-');
                y = bits[2];
                m = bits[1];
                d = bits[0];
                let ipenddt = new Date(y+ '-' +m+ '-' +d); 
                if (ipstartdt > ipenddt) {    
                  this.toastr.error('Start date cannot be greater than end date.');
                } else {
                  this.router.navigate(['songpendingpurchase'],
                      {
                        queryParams: {
                          artistname: this.reportForm.value.artistname,
                          albumname: this.reportForm.value.albumname,
                          songname: this.reportForm.value.songname,
                          rptype: this.reportForm.value.rptype,
                          startdt: pstartdt,
                          enddt: penddt,
                          page: 1, 
                          sortby: null }
                      }
                  );                  
                }
            } */
          }
        } else {
            this.router.navigate(['songpendingpurchase'],
                {
                  queryParams: {
                    artistname: this.reportForm.value.artistname,
                    //albumname: this.reportForm.value.albumname,
                    buyername: this.reportForm.value.buyername,
                    songname: this.reportForm.value.songname,
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
    this.songpurchaseService.getPendingsongpurchaseAggs(userid, formval)
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
        this.songpendings = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qartistname = formval.artistname;
        //this.qalbumname = formval.albumname;
        this.qbuyername = formval.buyername;
        this.qsongname = formval.songname;
        this.qrptype = formval.rptype;
        if (formval.startdt){
          this.qstartdt = formval.startdt;
          this.qenddt = formval.enddt;
        }

        /* if (formval.rptype === 'opt1') {
          this.reportTitle = 'Search Result for month:' + this.datePipe.transform(new Date(), 'MMM y');
        } else if (formval.rptype === 'opt2') {
            this.reportTitle = 'Result for date: ' + this.datePipe.transform(new Date(formval.startdt), 'd MMM y') + ' to ' + this.datePipe.transform(new Date(formval.enddt), 'd MMM y');
            //this.reportTitle = 'Pending Song purchase between ' + formval.startdt + ' and ' + formval.enddt;
        } else if (formval.rptype === 'opt3') {
          this.reportTitle = 'Result for date: today'
        } */
        this.reportTitle = 'Search Result - ';
        this.reportForm.patchValue({
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
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
    this.router.navigate(['songpendingpurchase'],
      {
        queryParams: {
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
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

  sortSongpending(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['songpendingpurchase'],
      {
        queryParams: { 
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
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
          srcpg:'pend',
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
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
          srcpg:'pend',
          artistname: this.qartistname,
          //albumname: this.qalbumname,
          buyername: this.qbuyername,
          songname: this.qsongname,
          rptype: this.qrptype,
          startdt: this.qstartdt,
          enddt: this.qenddt,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  
  approvePayment(idx, songpurchaseid, songname, songid, listenerid, songprice): void {
    if(confirm('Do you really want to approve this song payment: ' + songname + ' record?')){ 
      this.loading = true;
      let payload: any = {};
      payload.status = 'STSAPV';
      payload.listenerid = listenerid;
      payload.songpurchaseid = songpurchaseid;
      payload.paymentmtd = 'PMTCASH';
      payload.producttype = 'SONG';
      payload.songid = songid;
      payload.dbcr = '-'
      payload.amount = Number(this.pfee.value) * (parseInt(songprice) / 100);
      this.songpurchaseService.pubSaveSongpurchasePayment(this.userObj.userid, payload)
      .subscribe(data => {
        if (data.success === true) {
          this.songpendings.splice(idx, 1);
          this.totalrows = this.totalrows - 1;
          /* setTimeout(
            this.router.navigate(['songpendingpurchase'],
              {
                queryParams: { 
                  artistname: this.qartistname,
                  //albumname: this.qalbumname,
                  buyername: this.qbuyername,
                  songname: this.qsongname,
                  rptype: this.qrptype,
                  startdt: this.qstartdt,
                  enddt: this.qenddt,
                  page: this.qpage || 1, 
                  sortby: this.qsort }
              }
            ), 1000);  */
          this.loading = false;
          this.toastr.success('Approve payment success !');
        } else {
          this.loading = false;
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['login']);
          }
          this.toastr.error(data.message + '. Error updating the purchase payment...');
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
/*   approvePayment(songpurchaseid, songname, songid, listenerid, songprice): void {
    if(confirm('Do you really want to approve this song payment: ' + songname + ' record?')){
      this.loading = true;
      let payload: any = {};
      payload.status = 'STSAPV';
      this.songpurchaseService.updateStatuspurchase(songpurchaseid, payload)
      .subscribe(data => {
        if (data.success === true) {
          let payload1: any = {};
          payload1.listenerid = listenerid;
          payload1.purchaseid = songpurchaseid;
          payload1.paymentmtd = 'PMTCASH';
          payload1.producttype = 'SONG';
          payload1.productid = songid;
          payload1.dbcr = '-'
          payload1.amount = Number(this.pfee.value) * (parseInt(songprice) / 100);
          this.transactionService.saveTransaction(this.userObj.userid, payload1)
          .subscribe(data => {
            if (data.success === true) {
              let payload2: any = {};
              this.songService.songbuyincrement(songid, payload2)
              .subscribe(data => {
                if (data.success === true) {
                  this.loading = false;
                  this.toastr.success('Approve payment success !');
                } else {
                  this.toastr.warning('Error increment total purchase in song data...');
                }
                this.router.navigate(['songpendingpurchase'],
                  {
                      queryParams: { 
                        artistname: this.qartistname,
                        //albumname: this.qalbumname,
                        buyername: this.qbuyername,
                        songname: this.qsongname,
                        rptype: this.qrptype,
                        startdt: this.qstartdt,
                        enddt: this.qenddt,
                        page: this.qpage || 1, 
                        sortby: this.qsort }
                  }
                );                
              },
              err => {
                this.loading = false;
                //console.log(err);
                this.toastr.error(err);
                this.router.navigate(['songpendingpurchase'],
                  {
                      queryParams: { 
                        artistname: this.qartistname,
                        //albumname: this.qalbumname,
                        buyername: this.qbuyername,
                        songname: this.qsongname,
                        rptype: this.qrptype,
                        startdt: this.qstartdt,
                        enddt: this.qenddt,
                        page: this.qpage || 1, 
                        sortby: this.qsort }
                  }
                ); 
              });
            } else {
              this.loading = false;
              this.toastr.error('Error saving the payment transaction...');
            }
          },
          err => {
            this.loading = false;
            //console.log(err);
            this.toastr.error(err);
          });

        } else {
          this.loading = false;
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['login']);
          }
          this.toastr.error(data.message + '. Error updating the purchase status...');
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  } */

  rejectPayment(idx, songpurchaseid, songname): void {
    if(confirm('Do you really want to reject this song payment: ' + songname + ' record?')){
      this.loading = true;
      let payload: any = {};
      payload.status = 'STSRJCT';
      payload.songpurchaseid = songpurchaseid;
      this.songpurchaseService.pubSaveSongpurchasePayment(this.userObj.userid, payload)
      .subscribe(data => {
        if (data.success === true) {
          this.songpendings.splice(idx, 1);
          this.totalrows = this.totalrows - 1;
          /* setTimeout(
            this.router.navigate(['songpendingpurchase'],
              {
                queryParams: { 
                  artistname: this.qartistname,
                  //albumname: this.qalbumname,
                  buyername: this.qbuyername,
                  songname: this.qsongname,
                  rptype: this.qrptype,
                  startdt: this.qstartdt,
                  enddt: this.qenddt,
                  page: this.qpage || 1, 
                  sortby: this.qsort }
              }
            ), 1000); */
            this.loading = false;
            //this.toastr.success(data.message);
            this.toastr.success('Reject payment success !');
        } else {
          this.loading = false;
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['login']);
          }
          this.toastr.error(data.message);
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
/*   rejectPayment(songpurchaseid, songname): void {
    if(confirm('Do you really want to reject this song payment: ' + songname + ' record?')){
      this.loading = true;
      let payload: any = {};
      payload.status = 'STSRJCT';
      this.songpurchaseService.updateStatuspurchase(songpurchaseid, payload)
      .subscribe(data => {
        if (data.success === true) {
          this.loading = false;
          this.toastr.success(data.message);
          this.router.navigate(['songpendingpurchase'],
              {
                queryParams: { 
                  artistname: this.qartistname,
                  //albumname: this.qalbumname,
                  buyername: this.qbuyername,
                  songname: this.qsongname,
                  rptype: this.qrptype,
                  startdt: this.qstartdt,
                  enddt: this.qenddt,
                  page: this.qpage || 1, 
                  sortby: this.qsort }
              }
          );
        } else {
          this.loading = false;
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['login']);
          }
          this.toastr.error(data.message);
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  } */
/*   isValidDate2(s): boolean {
    let input = <String>s;
    var bits = input.split("-");
    var y = parseInt(bits[2]),
      m = parseInt(bits[1]),
      d = parseInt(bits[0]);
    // Assume not leap year by default (note zero index for Jan)
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // If evenly divisible by 4 and not evenly divisible by 100,
    // or is evenly divisible by 400, then a leap year
    if ((!(y % 4) && y % 100) || !(y % 400)) {
      daysInMonth[1] = 29;
    }
    return !(/\D/.test(String(d))) && d > 0 && d <= daysInMonth[--m]
  } */
}

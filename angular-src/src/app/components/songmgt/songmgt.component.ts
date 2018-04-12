import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { AuthService } from '../../services/auth.service';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { SongadminService } from '../../services/admin/songadmin.service';
import { IAggSong } from '../../interface/song';
import { IUserList } from '../../interface/user';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';


@Component({
  selector: 'app-songmgt',
  templateUrl: './songmgt.component.html',
  styleUrls: ['./songmgt.component.css']
})
export class SongmgtComponent implements OnInit {
  navigationSubscription;
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  userlist: IUserList[];
  songs: IAggSong[];
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qsongname: String;
  qartistname: String;
  qalbumname: String;
  qalbumyear: String;
  qsonggenre: String;
  //qsongbuy: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  ynlist: IMsconfigGroupList[];

  currsongpublish: String;
  //currsongbuy: Number;
  loading = false;

  constructor(    
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private songadminService: SongadminService,
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  songname = new FormControl('',[Validators.nullValidator]);
  labelid = new FormControl('',[Validators.nullValidator]);
  artistname = new FormControl('',[Validators.nullValidator]);
  albumname = new FormControl('',[Validators.nullValidator]);  
  albumyear = new FormControl('',[Validators.nullValidator]);
  songgenre = new FormControl('',[Validators.nullValidator]);
  //songbuy = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      labelid: this.labelid,
      songname: this.songname,
      artistname: this.artistname,
      albumname: this.albumname,
      albumyear: this.albumyear,
      songgenre: this.songgenre,
      //songbuy: this.songbuy,
      status: this.status
    });
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getMsconfigGroupList('YRN');
    this.getLabels();
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['labelid'] || '';
      this.qsongname = params['songname'] || '';
      this.qartistname = params['artistname'] || '';
      this.qalbumname = params['albumname'] || '';
      this.qalbumyear = params['albumyear'] || '';
      this.qsonggenre = params['songgenre'] || '';
      //this.qsongbuy = params['songbuy'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.labelid = this.qlabelid;
      payload.artistname = this.qartistname;
      payload.albumname = this.qalbumname;
      payload.songname = this.qsongname;
      payload.albumyear = this.qalbumyear;
      payload.songgenre = this.qsonggenre;
      //payload.songbuy = this.qsongbuy;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(payload);

      this.reportForm.patchValue({
        labelid: this.qlabelid,
        songname: this.qsongname,
        artistname: this.qartistname,
        albumname: this.qalbumname,
        albumyear: this.qalbumyear,
        songgenre: this.qsonggenre,
        //songbuy: this.qsongbuy,
        status: this.qstatus
      });
    })
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'CSTATUS') {
            this.sts = data.data;
          }
          if (groupid == 'GENRE') {
            this.genre = data.data;
          }
          if (groupid == 'YRN') {
            this.ynlist = data.data;
          }
        } else {
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
    });
  }

  getLabels(){
    this.labelmgtService.getLabelList().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.userlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.userlist = [{_id:'', name:'Error label list'}];
        }
      }
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.reportForm.value);
        this.router.navigate(['songmanagement'],
        {
          queryParams: {
            labelid: this.reportForm.value.labelid,
            songname: this.reportForm.value.songname,
            artistname: this.reportForm.value.artistname,
            albumname: this.reportForm.value.albumname,
            albumyear: this.reportForm.value.albumyear,
            songgenre: this.reportForm.value.songgenre,
            //songbuy: this.reportForm.value.songbuy,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      );
    }
  }

  fetchReport(formval) {
    this.loading = true;
    this.songadminService.getAggSongsnonpublish(formval)
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
        this.songs = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qlabelid = formval.labelid;
        this.qsongname = formval.songname;
        this.qartistname = formval.artistname;
        this.qalbumname = formval.albumname;
        this.qalbumyear = formval.albumyear;
        this.qsonggenre = formval.songgenre;
        //this.qsongbuy = formval.songbuy;
        this.qstatus = formval.status;
        this.reportTitle = 'Songs Result';
        
        this.reportForm.patchValue({
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumid: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
          status: this.qstatus
        });
      }
    });
  }

  setPage(page): void {
    this.router.navigate(['songmanagement'],
      {
        queryParams: {
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
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

  sortSong(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['songmanagement'],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  showSong(songid): void {
    this.router.navigate([`viewsong/${songid}`],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  publishSong(songid, songname, songpublish): void {
    
    this.loading = true;
    if (songpublish === 'Y') {
      this.loading = false;
      this.toastr.warning('This song has already been published.');
    } else {
      if(confirm('Do you really want to publish this song: ' + songname + ' record?')){
        let payload: any = {};
        payload.status = 'STSACT';
        this.songadminService.publishSong(songid, payload)
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
            this.fetchReport(this.reportForm.value);
            this.toastr.success(data.message);
          }
        });
      } else {
        this.loading = false;
      }
    }
  }

  unpublishSong(songid, songname, songpublish): void {
    
    this.loading = true;
    if (songpublish === 'N') {
      this.loading = false;
      this.toastr.warning('This song is already still unpublished.');
    } else {
      if(confirm('Do you really want to unpublish this song: ' + songname + ' record?')){
        let payload: any = {};
        payload.status = 'STSACT';
        this.songadminService.cancelpublishSong(songid, payload)
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
            this.fetchReport(this.reportForm.value);
            this.toastr.success(data.message);
          }
        });
      } else {
        this.loading = false;
      }
    }
  }

}

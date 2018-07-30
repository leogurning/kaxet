import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';
import { SongService } from '../../services/song.service';
import { AuthService } from '../../services/auth.service';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { IArtistList } from '../../interface/artist';
import { IAggAlbum } from '../../interface/album';
import { IUserList } from '../../interface/user';
import { ISong } from '../../interface/song';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';
import { FiletransferService } from '../../services/filetransfer.service';
import { Globals } from '../../app.global';

@Component({
  selector: 'app-albumstats',
  templateUrl: './albumstats.component.html',
  styleUrls: ['./albumstats.component.css']
})
export class AlbumstatsComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  artistlist: IArtistList[];
  userlist: IUserList[];
  albums: IAggAlbum[];
  song: ISong;
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qalbumname: String;
  qartistname: String;
  qalbumyear: String;
  qalbumgenre: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  //artistname: String;
  loading = false;
  albumuploadpath:string;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private ftService:FiletransferService,
    private globals: Globals
  ) { }

  labelid = new FormControl('',[Validators.nullValidator]);
  artistname = new FormControl('',[Validators.nullValidator]);
  albumname = new FormControl('',[Validators.nullValidator]);
  albumyear = new FormControl('',[Validators.nullValidator]);
  albumgenre = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.albumuploadpath = this.globals.albumuploadpath;
    this.reportForm = this.fb.group({
      labelid: this.labelid,
      artistname: this.artistname,
      albumname: this.albumname,
      albumyear: this.albumyear,
      albumgenre: this.albumgenre,
      status: this.status
    });
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getLabels();
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['labelid'] || '';
      this.qartistname = params['artistname'] || '';
      this.qalbumname = params['albumname'] || '';
      this.qalbumyear = params['albumyear'] || '';
      this.qalbumgenre = params['albumgenre'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

       let payload: any = {};
      payload.status = this.qstatus;
      payload.labelid = this.qlabelid;
      payload.artistname = this.qartistname;
      payload.albumname = this.qalbumname;
      payload.albumyear = this.qalbumyear;
      payload.albumgenre = this.qalbumgenre;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload); 
    })
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
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
      this.genre = [{code:'', value:'Error ms config list'}];
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
    },
    err => {
      this.userlist = [{_id:'', name:'Error label list'}];
    });
  }
  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['albumstats'],
        {
          queryParams: { labelid: this.reportForm.value.labelid,
            artistname: this.reportForm.value.artistname,
            albumname: this.reportForm.value.albumname,
            albumyear: this.reportForm.value.albumyear,
            albumgenre: this.reportForm.value.albumgenre, 
            status: this.reportForm.value.status, 
            page: 1, 
            sortby: null }
        }
      );
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.albumService.getAggAlbumstats(userid, formval)
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
        this.albums = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);

        this.qlabelid = formval.labelid;
        this.qartistname = formval.artistname;
        this.qalbumname = formval.albumname;
        this.qalbumyear = formval.albumyear;
        this.qalbumgenre = formval.albumgenre;
        this.qstatus = formval.status;
        this.reportTitle = 'Albums Result';
        
        this.reportForm.patchValue({
          labelid: this.qlabelid,
          artistid: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre,
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
    this.router.navigate(['albumstats'],
      {
        queryParams: { labelid: this.qlabelid, 
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
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

  sortAlbum(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['albumstats'],
      {
        queryParams: { labelid: this.qlabelid,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  showAlbum(albumid, labelid): void {
      this.router.navigate([`viewalbumstats/${albumid}`],
        {
          queryParams: { label:labelid, 
            labelid: this.qlabelid,
            artistname: this.qartistname,
            albumname: this.qalbumname,
            albumyear: this.qalbumyear,
            albumgenre: this.qalbumgenre, 
            status: this.qstatus, 
            page: this.qpage || 1, 
            sortby: this.qsort }
        }
      );
    }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';
import { IAggAlbum } from '../../../interface/album';
import { ISong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-listalbum',
  templateUrl: './listalbum.component.html',
  styleUrls: ['./listalbum.component.css']
})
export class ListalbumComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  artistlist: IArtistList[];
  albums: IAggAlbum[];
  song: ISong;
  totalrows: number;
  pgCounter: number;
  qalbumname: String;
  qartistid: String;
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

  artistid = new FormControl('',[Validators.nullValidator]);
  albumname = new FormControl('',[Validators.nullValidator]);
  albumyear = new FormControl('',[Validators.nullValidator]);
  albumgenre = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.albumuploadpath = this.globals.albumuploadpath;
    this.reportForm = this.fb.group({
      artistid: this.artistid,
      albumname: this.albumname,
      albumyear: this.albumyear,
      albumgenre: this.albumgenre,
      status: this.status
    });
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getArtistList(this.userObj.userid);
    this.route.queryParams.forEach((params: Params) => {
      this.qartistid = params['artistid'] || '';
      this.qalbumname = params['albumname'] || '';
      this.qalbumyear = params['albumyear'] || '';
      this.qalbumgenre = params['albumgenre'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

       let payload: any = {};
      payload.status = this.qstatus;
      payload.artistid = this.qartistid;
      payload.albumname = this.qalbumyear;
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
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
    });
  }

  getArtistList(id){
    this.artistService.getArtistList(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artistlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.artistlist = [{_id:'', artistname:'Error artist list'}];
        }
      }
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['listalbum'],
        {
          queryParams: { artistid: this.reportForm.value.artistid,
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
    this.albumService.getAggAlbums(userid, formval)
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
        //this.albums = data.data.docs;
        this.albums = data.data;
        //console.log(this.albums);
        //this.totalrows = +data.data.totalcount;
        this.totalrows = +data.totalcount;
        //console.log(this.totalrows);
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qartistid = formval.artistid;
        this.qalbumname = formval.albumname;
        this.qalbumyear = formval.albumyear;
        this.qalbumgenre = formval.albumgenre;
        this.qstatus = formval.status;
        this.reportTitle = 'Albums Result';
        
        this.reportForm.patchValue({
          artistid: this.qartistid,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre,
          status: this.qstatus
        });
      }
    });
  }

  setPage(page): void {
    this.router.navigate(['listalbum'],
      {
        queryParams: { artistid: this.qartistid,
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
  
    this.router.navigate(['listalbum'],
      {
        queryParams: { artistid: this.qartistid,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

/*   getArtistName(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          return data.data[0].artistname;
        } else {
          return 'Artist id is incorrect in the URL';
        }
      }
    });
  } */
  showAlbum(albumid): void {
    this.router.navigate([`viewalbum/${albumid}`],
      {
        queryParams: { artistid: this.qartistid,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  confirmDel(idx: number, albumid: string, albumname:string, albumphotoname:string) {
    var totalsong: number;

    let payload: any = {};
    payload.albumid = albumid;
    this.loading = true;
    this.songService.getSongCount(this.userObj.userid, payload)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        totalsong = +data.totalcount;
        if (totalsong > 0) {
          this.toastr.warning('Can not delete album. It already has songs.');
        } else {
          if(confirm('Do you really want to delete this album: ' + albumname + ' record?')){
            let payloadData: any = {};
            payloadData.uploadpath = this.albumuploadpath;
            payloadData.filename = albumphotoname;
            this.loading = true;
            this.ftService.deleteInputFile(payloadData)
            .subscribe(data => {
               if (data.success === false) {
                this.loading = false;
                  if (data.errcode){
                    this.authService.logout();
                    this.router.navigate(['login']);
                  }
                  this.toastr.error(data.message);
                } else {
                  this.albumService.deleteAlbum(albumid)
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
                      this.albums.splice(idx, 1);
                      this.totalrows = this.totalrows - 1;
                      this.toastr.success(data.message);  
                    }
                  });
                }
              });
          }
        }
      }
    });
  }
  
  editAlbum(albumid): void {
    this.router.navigate([`editalbum/${albumid}`],
      {
        queryParams: { artistid: this.qartistid,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  editAlbumPhoto(albumid): void {
    this.router.navigate([`editalbumphoto/${albumid}`],
      {
        queryParams: { artistid: this.qartistid,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          albumgenre: this.qalbumgenre, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  toaddAlbums(): void {
    this.router.navigate(['/addalbum']);
  }
}

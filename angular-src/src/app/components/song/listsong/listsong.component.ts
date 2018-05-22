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
import { IAlbumList } from '../../../interface/album';
import { IAggSong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-listsong',
  templateUrl: './listsong.component.html',
  styleUrls: ['./listsong.component.css']
})
export class ListsongComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  artistlist: IArtistList[];
  albumlist: IAlbumList[];
  songs: IAggSong[];
  totalrows: number;
  pgCounter: number;
  qsongname: String;
  qartistid: String;
  qalbumid: String;
  qalbumyear: String;
  qsonggenre: String;
  qsongpublish: String;
  qsongbuy: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  ynlist: IMsconfigGroupList[];

  currsongpublish: String;
  currsongbuy: Number;
  loading = false;
  prvwuploadpath: string;
  songuploadpath: string;

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

  songname = new FormControl('',[Validators.nullValidator]);
  artistid = new FormControl('',[Validators.nullValidator]);
  albumid = new FormControl('',[Validators.nullValidator]);  
  albumyear = new FormControl('',[Validators.nullValidator]);
  songgenre = new FormControl('',[Validators.nullValidator]);
  songpublish = new FormControl('',[Validators.nullValidator]);
  songbuy = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.prvwuploadpath = this.globals.prvwuploadpath;
    this.songuploadpath = this.globals.songuploadpath;
    this.reportForm = this.fb.group({
      songname: this.songname,
      artistid: this.artistid,
      albumid: this.albumid,
      albumyear: this.albumyear,
      songgenre: this.songgenre,
      songpublish: this.songpublish,
      songbuy: this.songbuy,
      status: this.status
    });
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getMsconfigGroupList('YRN');
    this.getArtistList(this.userObj.userid);
    this.getAlbumList(this.userObj.userid);
    this.route.queryParams.forEach((params: Params) => {
      this.qsongname = params['songname'] || '';
      this.qartistid = params['artistid'] || '';
      this.qalbumid = params['albumid'] || '';
      this.qalbumyear = params['albumyear'] || '';
      this.qsonggenre = params['songgenre'] || '';
      this.qsongpublish = params['songpublish'] || '';
      this.qsongbuy = params['songbuy'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.artistid = this.qartistid;
      payload.albumid = this.qalbumid;
      payload.songname = this.qsongname;
      payload.albumyear = this.qalbumyear;
      payload.songgenre = this.qsonggenre;
      payload.songpublish = this.qsongpublish;
      payload.songbuy = this.qsongbuy;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);

      this.reportForm.patchValue({
        songname: this.qsongname,
        artistid: this.qartistid,
        albumid: this.qalbumid,
        albumyear: this.qalbumyear,
        songgenre: this.qsonggenre,
        songpublish: this.qsongpublish,
        songbuy: this.qsongbuy,
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
          if (groupid == 'GENRE') {
            this.genre = data.data;
          }
          if (groupid == 'YRN') {
            this.ynlist = data.data;
          }
        } else {
          this.sts = [{code:'', value:'Empty list...'}];
          this.genre = [{code:'', value:'Empty list...'}];
          this.ynlist = [{code:'', value:'Empty list...'}];
        }
      } else {
        this.sts = [{code:'', value:'Error ms config list'}];
        this.ynlist = [{code:'', value:'Error ms config list'}];
        this.genre = [{code:'', value:'Error ms config list'}];
      }
    },
    err => {
      this.loading = false;
      this.sts = [{code:'', value:'Error ms config list'}];
      this.ynlist = [{code:'', value:'Error ms config list'}];
      this.genre = [{code:'', value:'Error ms config list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  getArtistList(id){
    this.artistService.getArtistList(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artistlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.artistlist = [{_id:'', artistname:'Empty list...'}];
        }
      } else {
        this.artistlist = [{_id:'', artistname:'Error artist list'}];
      }
    },
    err => {
      this.loading = false;
      this.artistlist = [{_id:'', artistname:'Error artist list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  getAlbumList(id){
    this.albumService.getAlbumList(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.albumlist = [{_id:'', albumname:'Empty list...'}];
        }
      } else {
        this.albumlist = [{_id:'', albumname:'Error album list'}];
      }
    },
    err => {
      this.loading = false;
      this.albumlist = [{_id:'', albumname:'Error album list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getAlbumListbyArtist(id, artistid){
    this.albumService.getAlbumListbyArtist(id, artistid).subscribe(data => {
      if (data.success === true) {
        //console.log(data.data[0]);
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.albumlist);
        } else {
          this.albumlist = [{_id:'', albumname:'No album list available'}];
        }
      } else {
        this.albumlist = [{_id:'', albumname:'Error album list'}];
      }
    },
    err => {
      this.loading = false;
      this.albumlist = [{_id:'', albumname:'Error album list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['listsong'],
        {
          queryParams: {
            songname: this.reportForm.value.songname,
            artistid: this.reportForm.value.artistid,
            albumid: this.reportForm.value.albumid,
            albumyear: this.reportForm.value.albumyear,
            songgenre: this.reportForm.value.songgenre,
            songpublish: this.reportForm.value.songpublish,
            songbuy: this.reportForm.value.songbuy,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      );

    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.songService.getAggSongs(userid, formval)
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

        this.qsongname = formval.songname;
        this.qartistid = formval.artistid;
        this.qalbumid = formval.albumid;
        this.qalbumyear = formval.albumyear;
        this.qsonggenre = formval.songgenre;
        this.qsongpublish = formval.songpublish;
        this.qsongbuy = formval.songbuy;
        this.qstatus = formval.status;
        this.reportTitle = 'Songs Result';
        if (this.qartistid) {
          this.getAlbumListbyArtist(this.userObj.userid, this.qartistid);
        } else {
          this.getAlbumList(this.userObj.userid);
        }
        
        this.reportForm.patchValue({
          songname: this.qsongname,
          artistid: this.qartistid,
          albumid: this.qalbumid,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
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
    this.router.navigate(['listsong'],
      {
        queryParams: {
          songname: this.qsongname,
          artistid: this.qartistid,
          albumid: this.qalbumid,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
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
  
    this.router.navigate(['listsong'],
      {
        queryParams: { 
          songname: this.qsongname,
          artistid: this.qartistid,
          albumid: this.qalbumid,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  artistChangeEvent(selectedValue:any): void {
    var result = <String>selectedValue.target.value;
    // result is 1: artistid. Therefore need split
    var res = result.split(" ");
    if (res[1]) {
      this.getAlbumListbyArtist(this.userObj.userid,res[1]);
    } else {
      this.getAlbumList(this.userObj.userid);
    }   
  }

  editSongFiles(songid, songpublish, songbuy): void {
    if (songpublish == 'Y') {
      this.toastr.warning("This song files has been published. The file can not be edited");
    } else {
      //this.toastr.warning("This song id: " + songid);      
      this.router.navigate([`editsongfiles/${songid}`],
        {
          queryParams: { 
            songname: this.qsongname,
            artistid: this.qartistid,
            albumid: this.qalbumid,
            albumyear: this.qalbumyear,
            songgenre: this.qsonggenre,
            songpublish: this.qsongpublish,
            songbuy: this.qsongbuy,
            status: this.qstatus,
            page: this.qpage || 1, 
            sortby: this.qsort }
        }
      );
    }

  }

  showSong(songid): void {
    this.router.navigate([`viewsong/${songid}`],
      {
        queryParams: { 
          songname: this.qsongname,
          artistid: this.qartistid,
          albumid: this.qalbumid,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  editSong(songid, songpublish, songbuy): void {

    //if (songbuy > 0) {
    if (songpublish == 'Y') {
      this.toastr.warning("This song has been published. Data can not be edited");
    } else {
      this.router.navigate([`editsong/${songid}`],
      {
        queryParams: { 
          songname: this.qsongname,
          artistid: this.qartistid,
          albumid: this.qalbumid,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
        }
      );
    }
  }
  
  confirmDel(idx: number, songid: string, songpublish, songbuy, songname, songprvwname, songfilename) {
    
    //if (songbuy > 0) {
    if (songpublish == 'Y') {
      this.toastr.warning("This song has been published. Data can not be deleted");
    } else {
      if(confirm('Do you really want to delete this song: ' + songname + ' record?')){
        this.loading = true;
        let payloadData: any = {};
        payloadData.labelid = this.userObj.userid;
        payloadData.songprvwname = songprvwname;
        payloadData.songfilename = songfilename;  
        payloadData.prvwuploadpath = this.prvwuploadpath; 
        payloadData.songuploadpath = this.songuploadpath;  
        this.songService.pubdeleteSong(songid, payloadData)
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
            this.songs.splice(idx, 1);
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
/*   confirmDel(idx: number, songid: string, songpublish, songbuy, songname, songprvwname, songfilename) {
    
    //if (songbuy > 0) {
    if (songpublish == 'Y') {
      this.toastr.warning("This song has been published. Data can not be deleted");
    } else {
      if(confirm('Do you really want to delete this song: ' + songname + ' record?')){
        this.loading = true;
        let payload: any = {};
        payload.uploadpath = this.prvwuploadpath;
        payload.filename = songprvwname;
        //payload.songprvwname = songprvwname;
        this.ftService.deleteInputFile(payload)
        .subscribe(data => {
           if (data.success === false) {
              console.log('Error delete preview' + data.message);
            } else {
              console.log('Success delete preview...');
            }   
          },
          err => {
            console.log('Error delete preview' + err);
          });
        let payloadData: any = {};
        //payloadData.songfilename = songfilename;
        payloadData.uploadpath = this.songuploadpath;
        payloadData.filename = songfilename;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
            if (data.success === false) {
              console.log('Error delete songfile' + data.message);
            } else {
              console.log('Success delete SongFile... ');
            }   
          },
          err => {
            console.log('Error delete songfile' + err);
          });
        this.songService.deleteSong(songid)
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
            this.songs.splice(idx, 1);
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
  } */

  toaddSongs(): void {
    this.router.navigate(['/addsong']);
  }
}

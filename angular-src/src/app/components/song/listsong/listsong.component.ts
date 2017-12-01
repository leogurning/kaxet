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
  genre: any = ['Alternative', 'Blues', 'Children', 'Classical','Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop','Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age','Pop','RnB','Reggae', 'Rock', 'Soundtrack','Vocal','Others'];
  sts: any = ['active', 'inactive'];
  ynlist: any = ['Y', 'N'];
  currsongpublish: String;
  currsongbuy: Number;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  songname = new FormControl('',[Validators.nullValidator]);
  artistid = new FormControl('',[Validators.nullValidator]);
  albumid = new FormControl('',[Validators.nullValidator]);  
  albumyear = new FormControl('',[Validators.nullValidator]);
  songgenre = new FormControl('',[Validators.nullValidator]);
  songpublish = new FormControl('',[Validators.nullValidator]);
  songbuy = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('active', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
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

  getAlbumList(id){
    this.albumService.getAlbumList(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.albumlist = [{_id:'', albumname:'Error album list'}];
        }
      }
    });
  }
  getAlbumListbyArtist(id, artistid){
    this.albumService.getAlbumListbyArtist(id, artistid).subscribe(data => {
      if (data.success === true) {
        console.log(data.data[0]);
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.albumlist);
        } else {
          this.albumlist = [{_id:'', albumname:'No album list available'}];
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
    this.songService.getAggSongs(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
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
      }
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
    this.getAlbumListbyArtist(this.userObj.userid,res[1]);
  }

  editSongFiles(songid, songpublish, songbuy): void {
    if (songbuy > 0) {
      this.toastr.warning("This song has been purchased. The file can not be edited");
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

    if (songbuy > 0) {
      this.toastr.warning("This song has been purchased. The file can not be edited");
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

  confirmDel(idx: number, songid: string, songpublish, songbuy) {
    
    if (songbuy > 0) {
      this.toastr.warning("This song has been purchased. The file can not be edited");
    } else {
      if(confirm('Do you really want to delete this record?')){
        this.songService.deleteSong(songid)
        .subscribe(data => {
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.songs.splice(idx, 1);
            this.totalrows = this.totalrows - 1;
            this.toastr.success(data.message);
          }
        });
      }
    }
  }

  toaddSongs(): void {
    this.router.navigate(['/addsong']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';
import { IAlbumList } from '../../../interface/album';
import { ISong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editsong',
  templateUrl: './editsong.component.html',
  styleUrls: ['./editsong.component.css']
})
export class EditsongComponent implements OnInit {
  songForm: FormGroup;
  userObj: any;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  songid: String;
  artistlist: IArtistList[];
  albumlist: IAlbumList[];
  partistid: String;
  btnLbl: String;
  loading = false;

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
    private datePipe: DatePipe
  ) { }
  artistid = new FormControl('', [Validators.required]);  
  albumid = new FormControl('', [Validators.required]);  
  songname = new FormControl('', [Validators.required]);
  songlyric = new FormControl('', [Validators.required]);  
  songgenre = new FormControl('', [Validators.required]);
  songprice = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  status = new FormControl('', [Validators.required]);
  songpublish : String;
  songbuy : Number;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.songid = params['id'];
      this.btnLbl = "Update"
    });
    this.getSelectedSong(this.songid);
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.userObj =  this.authService.currentUser;
    this.getArtistList(this.userObj.userid);

    this.songForm = this.fb.group({
      artistid: this.artistid,
      albumid: this.albumid,
      songname: this.songname,
      songlyric: this.songlyric,
      songgenre: this.songgenre,
      songprice: this.songprice,
      songpublish: this.songpublish,
      songbuy: this.songbuy,         
      status: this.status
    });
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
          this.sts = [{code:'', value:'Empty list'}];
          this.genre = [{code:'', value:'Empty list'}];
        }
      } else {
        this.sts = [{code:'', value:'Error ms config list'}];
        this.genre = [{code:'', value:'Error ms config list'}];
      }
    },
    err => {
      this.loading = false;
      this.sts = [{code:'', value:'Error ms config list'}];
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
          this.artistlist = [{_id:'', artistname:'Empty artist list'}];
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
  getAlbumListbyArtist2(id, artistid){
    this.albumService.getAlbumListbyArtist(id, artistid).subscribe(data => {
      if (data.success === true) {
        //console.log(data.data[0]);
        if (data.data[0]) {
          this.albumlist = data.data;
          this.songForm.patchValue({
            albumid: this.albumlist[0]._id
          });
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

  getSelectedSong(id){
    this.songService.getSong(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.partistid = data.data[0].artistid;
          this.getAlbumListbyArtist(this.userObj.userid, this.partistid)
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Empty song result');
          this.router.navigate(['listsong']);
        }
      } else {
        this.toastr.error('Song id is incorrect in the URL');
        this.router.navigate(['listsong']);
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['listsong']);
    });
  }

  populateForm(data): void {
    this.songpublish = data.songpublish;
    this.songbuy = data.songbuy;    
    this.songForm.patchValue({
      artistid: data.artistid,
      albumid: data.albumid,
      songname: data.songname,
      songlyric: data.songlyric,
      songgenre: data.songgenre,
      songprice: data.songprice,
      songpublish: data.songpublish,
      songbuy: data.songbuy,         
      status: data.status
    });
  }
  
  saveSong(formdata:any): void {
    if (this.songForm.valid) {
      const theForm:any = this.songForm.value;
      if (this.songid !== '') {
        theForm.songid = this.songid;
      
      }
      this.loading = true;
      this.songService.pubeditSong(this.userObj.userid, theForm)
        .subscribe(data => {
          this.loading = false;
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
          }
          if (!this.songid) {
            this.songForm.reset();
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
/*   saveSong(formdata:any): void {
    if (this.songForm.valid) {
      const theForm:any = this.songForm.value;
      if (this.songid !== '') {
        theForm.songid = this.songid;
      
      }
      this.loading = true;
      this.songService.saveSong(this.userObj.userid,theForm.artistid, theForm.albumid,theForm)
        .subscribe(data => {
          this.loading = false;
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
          }
          if (!this.songid) {
            this.songForm.reset();
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  } */

  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }

  artistChangeEvent(selectedValue:any): void {
    var result = <String>selectedValue.target.value;
    // result is 1: artistid. Therefore need split
    var res = result.split(" ");
    this.albumlist.length = 0;
    this.getAlbumListbyArtist2(this.userObj.userid,res[1]);
  }

}

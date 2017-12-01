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


@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
  addSongForm: FormGroup;
  userObj: any;
  genre: any = ['Alternative', 'Blues', 'Children', 'Classical','Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop','Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age','Pop','RnB','Reggae', 'Rock', 'Soundtrack','Vocal','Others'];
  PrvwfilesToUpload: Array<File> = [];
  SongfilesToUpload: Array<File> = [];
  songid: String;
  artistlist: IArtistList[];
  albumlist: IAlbumList[];

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

  artistid = new FormControl('', [Validators.required]);  
  albumid = new FormControl('', [Validators.required]);  
  songname = new FormControl('', [Validators.required]);
  songlyric = new FormControl('', [Validators.required]);  
  songgenre = new FormControl('', [Validators.required]);
  songprice = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  songprvwpath: String;
  songprvwname: String;
  songfilepath: String;
  songfilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.getArtistList(this.userObj.userid);
    this.getAlbumList(this.userObj.userid);
    this.songid = '';
    this.addSongForm = this.fb.group({
      artistid: this.artistid,
      albumid: this.albumid,
      songname: this.songname,
      songlyric: this.songlyric,
      songgenre: this.songgenre,
      songprice: this.songprice,
      songprvw: this.PrvwfilesToUpload,
      songfile: this.SongfilesToUpload,
      songprvwpath: this.songprvwpath,
      songprvwname: this.songprvwname,
      songfilepath: this.songfilepath,
      songfilename: this.songfilename,
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
  addSong(formdata:any): void {
    if (this.addSongForm.dirty && this.addSongForm.valid) {
      const prvwfiles: Array<File> = this.PrvwfilesToUpload;
      let theForm = this.addSongForm.value;
      let lformData: FormData = new FormData();
      //console.log('Ini file: '+ prvwfiles[0]['name']);
      
      lformData.append('songprvw',prvwfiles[0],prvwfiles[0]['name']);
      //console.log(lformData.getAll('songprvw'));
      //console.dir(theForm);
      this.songService.uploadSongPreview(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.toastr.error(data.message);
          } else {
              theForm.songprvwpath = data.filedata.songprvwpath;
              theForm.songprvwname = data.filedata.songprvwname;
              const songfiles: Array<File> = this.SongfilesToUpload;
              lformData.append('songfile',songfiles[0],songfiles[0]['name']);
              this.songService.uploadSongFile(lformData)
              .subscribe(data => {
                  if (data.success === false) {
                    this.toastr.error(data.message);
                  } else {
                    theForm.songfilepath = data.filedata.songfilepath;
                    theForm.songfilename = data.filedata.songfilename;  
                    theForm.status = 'active';
                    if (this.songid !== '') {
                      theForm.songid = this.songid;
                    }
                    this.songService.saveSong(this.userObj.userid, theForm.artistid, theForm.albumid, theForm)
                    .subscribe(data => {
                      if (data.success === false) {
                        this.toastr.error(data.message);
                      } else {
                        this.toastr.success(data.message);
                        this.router.navigate(['listsong']);
                      }
                      this.addSongForm.reset();
                    });
                  }      
              });
          }   
        });
 
    }
  }

  prvwfileChangeEvent(fileInput:any): void {
    this.PrvwfilesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.PrvwfilesToUpload);
  }

  songfileChangeEvent(fileInput:any): void {
    this.SongfilesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.SongfilesToUpload);
  }

  artistChangeEvent(selectedValue:any): void {
    var result = <String>selectedValue.target.value;
    // result is 1: artistid. Therefore need split
    var res = result.split(" ");
    this.getAlbumListbyArtist(this.userObj.userid,res[1]);
  }
}

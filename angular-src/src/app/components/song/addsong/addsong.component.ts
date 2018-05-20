import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
  addSongForm: FormGroup;
  userObj: any;
  genre: IMsconfigGroupList[];
  PrvwfilesToUpload: Array<File> = [];
  SongfilesToUpload: Array<File> = [];
  songid: String;
  artistlist: IArtistList[];
  albumlist: IAlbumList[];
  loading = false;
  progressvalue = 0;
  @ViewChild('inputprev')inputpreVar: any;
  @ViewChild('inputsong')inputsongVar: any;
  @ViewChild('inputartist')artistVar: any;
  @ViewChild('inputalbum')albumVar: any;
  @ViewChild('inputgenre')genreVar: any;
  prvwuploadpath: string;
  songuploadpath: string;
  maxfilesize: IMsconfigGroupList;

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
    this.progressvalue = 0;
    this.userObj =  this.authService.currentUser;
    this.prvwuploadpath = this.globals.prvwuploadpath;
    this.songuploadpath = this.globals.songuploadpath;
    this.getMsconfigGroupList('GENRE');
    this.getMsconfigVal('AVSIZE','FSIZE');
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

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.genre = data.data;
        } else {
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.genre = [{code:'', value:'Error ms config list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getMsconfigVal(code, groupid){
    this.msconfigService.getMsconfigvalue(code, groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.maxfilesize = data.data[0];
        } else {
          this.maxfilesize = {code:'', value:'0'};
        }
      }
    },
    err => {
      this.loading = false;
      this.maxfilesize = {code:'', value:'0'};
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
          this.artistlist = [{_id:'', artistname:'Error artist list'}];
        }
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
          this.albumlist = [{_id:'', albumname:'Error album list'}];
        }
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
        console.log(data.data[0]);
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.albumlist);
        } else {
          this.albumlist = [{_id:'', albumname:'No album list available'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.albumlist = [{_id:'', albumname:'No album list available'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }
  addSong(formdata:any): void {
    this.progressvalue = 0;
    const prvwfiles: Array<File> = this.PrvwfilesToUpload;
    const songfiles: Array<File> = this.SongfilesToUpload;
    if (this.addSongForm.dirty && this.addSongForm.valid && prvwfiles[0] && songfiles[0]) {
      this.progressvalue = 10;
      //const prvwfiles: Array<File> = this.PrvwfilesToUpload;
      let theForm = this.addSongForm.value;
      this.progressvalue = 40;
      let lformData: FormData = new FormData();
      //console.log('Ini file: '+ prvwfiles[0]['name']);
      lformData.append('prvwfileinputsrc',prvwfiles[0],prvwfiles[0]['name']);
      lformData.append('prvwuploadpath',this.prvwuploadpath);
      lformData.append('songfileinputsrc',songfiles[0],songfiles[0]['name']);
      lformData.append('songuploadpath',this.songuploadpath);
      this.loading = true;
      this.progressvalue = 70;
      this.songService.uploadSongfiles(this.userObj.userid, lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 80;           
              /* let sgformData: FormData = new FormData();
              sgformData.append('fileinputsrc',songfiles[0],songfiles[0]['name']);
              sgformData.append('uploadpath',this.songuploadpath);
              sgformData.append('artistid',theForm.artistid);
              sgformData.append('albumid',theForm.albumid);
              sgformData.append('songname',theForm.songname);
              sgformData.append('songlyric',theForm.songlyric);
              sgformData.append('songgenre',theForm.songgenre);
              sgformData.append('songprice',theForm.songprice);
              sgformData.append('songprvwpath',data.filedata.filepath);
              sgformData.append('songprvwname',data.filedata.filename);
              sgformData.append('status','STSACT'); */
              let payload:any = {};
              payload.artistid = theForm.artistid;
              payload.albumid = theForm.albumid;
              payload.songname = theForm.songname;
              payload.songlyric = theForm.songlyric;
              payload.songgenre = theForm.songgenre;
              payload.songprice = theForm.songprice;
              payload.songprvwpath = data.preview.prvwfilepath;
              payload.songprvwname = data.preview.prvwfilename;
              payload.songfilepath = data.song.songfilepath;
              payload.songfilename = data.song.songfilename;
              payload.status = 'STSACT';
              this.progressvalue = 90;    
              this.songService.pubsaveSong(this.userObj.userid, payload)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.progressvalue = 0;
                  this.toastr.error(data.message);
                } else {
                  this.loading = false;
                  this.progressvalue = 100;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listsong']);
                }
                this.addSongForm.reset();
                this.progressvalue = 0;
                this.artistVar.nativeElement.selectedIndex = 0;
                this.albumVar.nativeElement.selectedIndex = 0;
                this.genreVar.nativeElement.selectedIndex = 0;
                this.inputpreVar.nativeElement.value = "";
                this.inputsongVar.nativeElement.value = "";
              },
              err => {
                this.loading = false;
                this.progressvalue = 0;
                //console.log(err);
                this.toastr.error(err);
              });
          }   
        },
        err => {
          this.loading = false;
          this.progressvalue = 0;
          //console.log(err);
          this.toastr.error(err);
        });
 
    } else {
      this.toastr.error('Please provide BOTH Song Preview and Song File...');
    }
  }
  /* addSong(formdata:any): void {
    this.progressvalue = 0;
    const prvwfiles: Array<File> = this.PrvwfilesToUpload;
    const songfiles: Array<File> = this.SongfilesToUpload;
    if (this.addSongForm.dirty && this.addSongForm.valid && prvwfiles[0] && songfiles[0]) {
      this.progressvalue = 10;
      //const prvwfiles: Array<File> = this.PrvwfilesToUpload;
      let theForm = this.addSongForm.value;
      this.progressvalue = 20;
      let lformData: FormData = new FormData();
      //console.log('Ini file: '+ prvwfiles[0]['name']);
      lformData.append('fileinputsrc',prvwfiles[0],prvwfiles[0]['name']);
      lformData.append('uploadpath',this.prvwuploadpath);

      this.loading = true;
      this.progressvalue = 30;
      this.ftService.uploadInputFile(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 40;
              theForm.songprvwpath = data.filedata.filepath;
              theForm.songprvwname = data.filedata.filename;
              //const songfiles: Array<File> = this.SongfilesToUpload;
              let lformData1: FormData = new FormData();
              lformData1.append('fileinputsrc',songfiles[0],songfiles[0]['name']);
              lformData1.append('uploadpath',this.songuploadpath);
              //formdata.set is not supported in Safari and other browsers
              //lformData.set('fileinputsrc',songfiles[0],songfiles[0]['name']);
              //lformData.set('uploadpath',this.songuploadpath);
              this.progressvalue = 50;
              this.ftService.uploadInputFile(lformData1)
              .subscribe(data => {
                  if (data.success === false) {
                    this.loading = false;
                    this.progressvalue = 0;
                    this.toastr.error(data.message);
                  } else {
                    this.progressvalue = 60;
                    theForm.songfilepath = data.filedata.filepath;
                    theForm.songfilename = data.filedata.filename;  
                    theForm.status = 'STSACT';
                    if (this.songid !== '') {
                      theForm.songid = this.songid;
                    }
                    this.progressvalue = 80;
                    this.songService.saveSong(this.userObj.userid, theForm.artistid, theForm.albumid, theForm)
                    .subscribe(data => {
                      if (data.success === false) {
                        this.loading = false;
                        this.progressvalue = 0;
                        this.toastr.error(data.message);
                      } else {
                        this.loading = false;
                        this.progressvalue = 100;
                        this.toastr.success(data.message);
                        //this.router.navigate(['listsong']);
                      }
                      this.addSongForm.reset();
                      this.progressvalue = 0;
                      this.artistVar.nativeElement.selectedIndex = 0;
                      this.albumVar.nativeElement.selectedIndex = 0;
                      this.genreVar.nativeElement.selectedIndex = 0;
                      this.inputpreVar.nativeElement.value = "";
                      this.inputsongVar.nativeElement.value = "";
                    },
                    err => {
                      this.loading = false;
                      this.progressvalue = 0;
                      //console.log(err);
                      this.toastr.error(err);
                    });
                  }      
              },
              err => {
                this.loading = false;
                this.progressvalue = 0;
                //console.log(err);
                this.toastr.error(err);
              });
          }   
        },
        err => {
          this.loading = false;
          this.progressvalue = 0;
          //console.log(err);
          this.toastr.error(err);
        });
 
    } else {
      this.toastr.error('Please provide BOTH Song Preview and Song File...');
    }
  } */

  prvwfileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("audio/") || ~files[0].type.indexOf("video/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.PrvwfilesToUpload = <Array<File>>fileInput.target.files;
      } else {
        let mfsize = +this.maxfilesize.value/1000000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Mb');
        this.inputpreVar.nativeElement.value = "";
      }
    } else  {
      alert('Error file type. You must input audio/video file type.');
      this.inputpreVar.nativeElement.value = "";
    }    
  }

  songfileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("audio/") || ~files[0].type.indexOf("video/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.SongfilesToUpload = <Array<File>>fileInput.target.files;
      } else {
        let mfsize = +this.maxfilesize.value/1000000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Mb');
        this.inputsongVar.nativeElement.value = "";
      }
    } else  {
      alert('Error file type. You must input audio/video file type.');
      this.inputsongVar.nativeElement.value = "";
    } 
  }

  artistChangeEvent(selectedValue:any): void {
    var result = <String>selectedValue.target.value;
    // result is 1: artistid. Therefore need split
    var res = result.split(" ");
    this.getAlbumListbyArtist(this.userObj.userid,res[1]);
  }
}

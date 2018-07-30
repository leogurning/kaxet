import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {
  addAlbumForm: FormGroup;
  userObj: any;
  genre: IMsconfigGroupList[];
  filesToUpload: Array<File> = [];
  albumid: String;
  artistlist: IArtistList[];
  loading = false;
  @ViewChild('inputimg')albumimageVar: any;
  @ViewChild('inputartist')artistVar: any;
  @ViewChild('inputgenre')genreVar: any;
  albumuploadpath:string;
  progressvalue = 0;
  maxfilesize: IMsconfigGroupList;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private ftService:FiletransferService,
    private globals: Globals
  ) { }

  artistid = new FormControl('', [Validators.required]);  
  albumname = new FormControl('', [Validators.required]);
  albumyear = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  albumgenre = new FormControl('', [Validators.required]);
  //albumprice = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  albumphotopath: String;
  albumphotoname: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.albumuploadpath = this.globals.albumuploadpath;
    this.progressvalue = 0;
    this.getArtistList(this.userObj.userid);
    this.getMsconfigGroupList('GENRE');
    this.getMsconfigVal('IMGSIZE','FSIZE');
    this.albumid = '';
    this.addAlbumForm = this.fb.group({
      artistid: this.artistid,
      albumname: this.albumname,
      albumyear: this.albumyear,
      albumgenre: this.albumgenre,
      //albumprice: this.albumprice,
      albumimage: this.filesToUpload,
      albumphotopath: this.albumphotopath,
      albumphotoname: this.albumphotoname
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
      this.genre = [{code:'', value:'Error ms config list'}];
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
      this.maxfilesize = {code:'', value:'0'};
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
      this.artistlist = [{_id:'', artistname:'Error artist list'}];
    });
  }
  
  addAlbum(formdata:any): void {
    this.progressvalue = 0;
    const files: Array<File> = this.filesToUpload;
    if (this.addAlbumForm.dirty && this.addAlbumForm.valid && files[0]) {
      this.progressvalue = 10;
      //const files: Array<File> = this.filesToUpload;
      let theForm = this.addAlbumForm.value;
      this.albumService.checkAlbum(this.userObj.userid, theForm)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.progressvalue = 0;
          this.toastr.error(data.message);
        } else {
          let lformData: FormData = new FormData();
          //console.log('Ini file: '+ files[0]['name']);
          this.progressvalue = 20;
          //lformData.append('albumimage',files[0],files[0]['name']);
          lformData.append('fileinputsrc',files[0],files[0]['name']);
          lformData.append('uploadpath',this.albumuploadpath);
          //console.dir(theForm);
          this.loading = true;
          this.progressvalue = 40;
          this.ftService.uploadInputFile(lformData)
            .subscribe(data => {
              if (data.success === false) {
                this.loading = false;
                this.progressvalue = 0;
                this.toastr.error(data.message);
              } else {
                  this.progressvalue = 60;
                  theForm.albumphotopath = data.filedata.filepath;
                  theForm.albumphotoname = data.filedata.filename;
                  theForm.status = 'STSACT';
                  if (this.albumid !== '') {
                    theForm.albumid = this.albumid;
                  }
                  this.progressvalue = 80;
                  this.albumService.pubsaveAlbum(this.userObj.userid, theForm)
                  .subscribe(data => {
                    if (data.success === false) {
                      this.loading = false;
                      this.progressvalue = 0;
                      this.toastr.error(data.message);
                    } else {
                      this.progressvalue = 90;
                      this.loading = false;
                      this.toastr.success(data.message);
                      //this.router.navigate(['listalbum']);
                      this.progressvalue = 100;
                    }
                    this.addAlbumForm.reset();
                    this.artistVar.nativeElement.selectedIndex = 0;
                    this.genreVar.nativeElement.selectedIndex = 0;
                    this.albumimageVar.nativeElement.value = "";
                    this.progressvalue = 0;
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
      this.toastr.error('Please provide the album cover/image...');
    }
  }
/*   addAlbum(formdata:any): void {
    this.progressvalue = 0;
    const files: Array<File> = this.filesToUpload;
    if (this.addAlbumForm.dirty && this.addAlbumForm.valid && files[0]) {
      this.progressvalue = 10;
      //const files: Array<File> = this.filesToUpload;
      let theForm = this.addAlbumForm.value;
      let lformData: FormData = new FormData();
      //console.log('Ini file: '+ files[0]['name']);
      this.progressvalue = 20;
      //lformData.append('albumimage',files[0],files[0]['name']);
      lformData.append('fileinputsrc',files[0],files[0]['name']);
      lformData.append('uploadpath',this.albumuploadpath);
      //console.dir(theForm);
      this.loading = true;
      this.progressvalue = 40;
      this.ftService.uploadInputFile(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
              this.progressvalue = 60;
              theForm.albumphotopath = data.filedata.filepath;
              theForm.albumphotoname = data.filedata.filename;
              theForm.status = 'STSACT';
              if (this.albumid !== '') {
                theForm.albumid = this.albumid;
              }
              this.progressvalue = 80;
              this.albumService.saveAlbum(this.userObj.userid, theForm.artistid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.progressvalue = 0;
                  this.toastr.error(data.message);
                } else {
                  this.progressvalue = 90;
                  this.loading = false;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listalbum']);
                  this.progressvalue = 100;
                }
                this.addAlbumForm.reset();
                this.artistVar.nativeElement.selectedIndex = 0;
                this.genreVar.nativeElement.selectedIndex = 0;
                this.albumimageVar.nativeElement.value = "";
                this.progressvalue = 0;
              },
              err => {
                this.loading = false;
                //console.log(err);
                this.toastr.error(err);
              });
          }   
        },
        err => {
          this.loading = false;
          //console.log(err);
          this.toastr.error(err);
        });
 
    } else {
      this.toastr.error('Please provide the album cover/image...');
    }
  } */

  fileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("image/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
      } else {
        let mfsize = +this.maxfilesize.value/1000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Kb');
        this.albumimageVar.nativeElement.value = "";
      }
    } else  {
      alert('Error file type. You must input image file type.');
      this.albumimageVar.nativeElement.value = "";
    }    
  }
}

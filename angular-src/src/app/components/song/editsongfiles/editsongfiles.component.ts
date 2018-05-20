import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ISong } from '../../../interface/song';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editsongfiles',
  templateUrl: './editsongfiles.component.html',
  styleUrls: ['./editsongfiles.component.css']
})
export class EditsongfilesComponent implements OnInit {
  songForm: FormGroup
  userObj: any;
  song: ISong;
  songid: String;
  PrvwfilesToUpload: Array<File> = [];
  SongfilesToUpload: Array<File> = [];
  loading = false;
  prvwuploadpath: string;
  songuploadpath: string;
  progressvalue = 0;
  maxfilesize: IMsconfigGroupList;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ftService:FiletransferService,
    private globals: Globals,
    private msconfigService: MsconfigService,
  ) { }

  songprvwpath = new FormControl('', [Validators.nullValidator]);
  songprvwname = new FormControl('', [Validators.nullValidator]);
  songfilepath = new FormControl('', [Validators.nullValidator]);
  songfilename = new FormControl('', [Validators.nullValidator]);
  newprvwfile: String;
  newsongfile: String;
  deletedPrvwFile: String;
  deletedSongFile: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.prvwuploadpath = this.globals.prvwuploadpath;
    this.songuploadpath = this.globals.songuploadpath;
    this.progressvalue = 0;
    this.getMsconfigVal('AVSIZE','FSIZE');
    this.songForm = this.fb.group({
      songprvwpath: this.songprvwpath,
      songprvwname: this.songprvwname,
      songfilepath: this.songfilepath,
      songfilename: this.songfilename,
    });
    this.route.params.subscribe((params: any) => {
      this.songid = params['id'];
      this.getSong(this.songid);
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
      } else {
        this.maxfilesize = {code:'', value:'0'};
      }
    },
    err => {
      this.loading = false;
      this.maxfilesize = {code:'', value:'0'};
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getSong(id){
    this.songService.getSong(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.song = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Empty Song result...');
          this.router.navigate(['listsong']);
        }
      } else {
        this.toastr.error('Song id is incorrect in the URL...');
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
    this.deletedPrvwFile = this.song.songprvwname;
    this.deletedSongFile = this.song.songfilename;
    this.songForm.patchValue({
      songprvwpath: data.songprvwpath,
      songprvwname: data.songprvwname,
      songfilepath: data.songfilepath,
      songfilename: data.songfilename
    });
  }

  PrvwfileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("audio/") || ~files[0].type.indexOf("video/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.PrvwfilesToUpload = <Array<File>>fileInput.target.files;
        this.newprvwfile = this.PrvwfilesToUpload[0]['name'];
        this.progressvalue = 0;
        this.uploadNewPreview(this.PrvwfilesToUpload);  
      } else {
        let mfsize = +this.maxfilesize.value/1000000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Mb');
      }
    } else  {
      alert('Error file type. You must input audio/video file type.');
    }    
  }

  SongfileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("audio/") || ~files[0].type.indexOf("video/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.SongfilesToUpload = <Array<File>>fileInput.target.files;
        this.newsongfile = this.SongfilesToUpload[0]['name'];
        this.progressvalue = 0;
        this.uploadNewSong(this.SongfilesToUpload);  
      } else {
        let mfsize = +this.maxfilesize.value/1000000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Mb');
      }
    } else  {
      alert('Error file type. You must input audio/video file type.');
    }    
  }
  
  uploadNewPreview(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    //lformData.append('songprvw',files[0],files[0]['name']);
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.prvwuploadpath);
    this.loading = true;
    this.progressvalue = 40;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        //let payloadData: any = this.songForm.value;
        this.progressvalue = 60;
        let payloadData: any = {};
        payloadData.songprvwpath = data.filedata.filepath;
        payloadData.songprvwname = data.filedata.filename;
        payloadData.oldsongprvwname = this.songForm.value.songprvwname;
        payloadData.labelid = this.userObj.userid;
        this.progressvalue = 80;
        this.progressvalue = 90;
          
        this.songService.pubupdateSongPreview(this.songid, payloadData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update song preview.');
            this.toastr.success(data.message);
            this.progressvalue = 0;
          }
        },
        err => {
          this.loading = false;
          this.progressvalue = 0;
          //console.log(err);
          this.toastr.error(err);
        });
        //this.songForm.value.songprvwpath = data.filedata.filepath;
        //this.songForm.value.songprvwname = data.filedata.filename;
      }
    },
    err => {
      this.loading = false;
      this.progressvalue = 0;
      //console.log(err);
      this.toastr.error(err);
    });    
  }
/*   uploadNewPreview(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    //lformData.append('songprvw',files[0],files[0]['name']);
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.prvwuploadpath);
    this.loading = true;
    this.progressvalue = 40;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        //let payloadData: any = this.songForm.value;
        this.progressvalue = 60;
        let payloadData: any = {};
        payloadData.uploadpath = this.prvwuploadpath;
        payloadData.filename = this.songForm.value.songprvwname;
        this.progressvalue = 80;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              console.log('Error deleted ' + data.message);
            } else {
              if (payloadData) {
                console.log('File deleted - ' + payloadData.filename);
              }
            }   
          },
          err => {
            console.log('Error deleted ' + err);
          });
        this.progressvalue = 90;
        this.songForm.value.songprvwpath = data.filedata.filepath;
        this.songForm.value.songprvwname = data.filedata.filename;
          
        this.songService.updateSongPreview(this.songid, this.songForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update song preview.');
            this.toastr.success(data.message);
            this.progressvalue = 0;
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
  } */
  
  uploadNewSong(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    //lformData.append('songfile',files[0],files[0]['name']);
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.songuploadpath);
    this.loading = true;
    this.progressvalue = 40;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        //let payloadData: any = this.songForm.value;
        this.progressvalue = 60;
        let payloadData: any = {};
        payloadData.songfilepath = data.filedata.filepath;
        payloadData.songfilename = data.filedata.filename;
        payloadData.oldsongfilename = this.songForm.value.songfilename;
        payloadData.labelid = this.userObj.userid;
        this.progressvalue = 80;
        this.progressvalue = 90;   
        this.songService.pubupdateSongFile(this.songid, payloadData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update song file.');
            this.toastr.success(data.message);
            this.progressvalue = 0;
          }
        },
        err => {
          this.loading = false;
          this.progressvalue = 0;
          //console.log(err);
          this.toastr.error(err);
        });
        //this.songForm.value.songfilepath = data.filedata.filepath;
        //this.songForm.value.songfilename = data.filedata.filename;
      }
    },
    err => {
      this.loading = false;
      this.progressvalue = 0;
      //console.log(err);
      this.toastr.error(err);
    });    
  }
/*   uploadNewSong(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    //lformData.append('songfile',files[0],files[0]['name']);
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.songuploadpath);
    this.loading = true;
    this.progressvalue = 40;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        //let payloadData: any = this.songForm.value;
        this.progressvalue = 60;
        let payloadData: any = {};
        payloadData.uploadpath = this.songuploadpath;
        payloadData.filename = this.songForm.value.songfilename;
        this.progressvalue = 80;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.filename);
            }   
          },
          err => {
            console.log('Error deleted ' + err);
          });
        this.progressvalue = 90;   
        this.songForm.value.songfilepath = data.filedata.filepath;
        this.songForm.value.songfilename = data.filedata.filename;

        this.songService.updateSongFile(this.songid, this.songForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update song file.');
            this.toastr.success(data.message);
            this.progressvalue = 0;
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
  } */
  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }
}

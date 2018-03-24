import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ISong } from '../../../interface/song';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

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

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ftService:FiletransferService,
    private globals: Globals
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
  getSong(id){
    this.songService.getSong(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.song = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Song id is incorrect in the URL');
          this.router.navigate(['listsong']);
        }
      }
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
    this.PrvwfilesToUpload = <Array<File>>fileInput.target.files;
    this.newprvwfile = this.PrvwfilesToUpload[0]['name'];
    this.progressvalue = 0;
    this.uploadNewPreview(this.PrvwfilesToUpload);  
  }

  SongfileChangeEvent(fileInput:any): void {
    this.SongfilesToUpload = <Array<File>>fileInput.target.files;
    this.newsongfile = this.SongfilesToUpload[0]['name'];
    this.progressvalue = 0;
    this.uploadNewSong(this.SongfilesToUpload);  
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
        });
      }
    });    
  }

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
        });
      }
    });    
  }
  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }
}

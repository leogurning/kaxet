import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ISong } from '../../../interface/song';

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

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
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
    this.uploadNewPreview(this.PrvwfilesToUpload);  
  }

  SongfileChangeEvent(fileInput:any): void {
    this.SongfilesToUpload = <Array<File>>fileInput.target.files;
    this.newsongfile = this.SongfilesToUpload[0]['name'];
    this.uploadNewSong(this.SongfilesToUpload);  
  }

  uploadNewPreview(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    lformData.append('songprvw',files[0],files[0]['name']);
    this.songService.uploadSongPreview(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.toastr.error(data.message);
      } else {
        let payloadData: any = this.songForm.value;
        this.songService.deleteSongPreview(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              console.log('Error deleted ' + data.message);
            } else {
              if (payloadData) {
                console.log('File deleted - ' + payloadData.songprvwname);
              }
            }   
          });
        this.songForm.value.songprvwpath = data.filedata.songprvwpath;
        this.songForm.value.songprvwname = data.filedata.songprvwname;
          
        this.songService.updateSongPreview(this.songid, this.songForm.value)
        .subscribe(data => {
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            console.log('Success update song preview.');
            this.toastr.success(data.message);
          }
        });
      }
    });    
  }

  uploadNewSong(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    lformData.append('songfile',files[0],files[0]['name']);
    this.songService.uploadSongFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.toastr.error(data.message);
      } else {
        let payloadData: any = this.songForm.value;
        this.songService.deleteSongFile(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.songfilename);
            }   
          });
           
        this.songForm.value.songfilepath = data.filedata.songfilepath;
        this.songForm.value.songfilename = data.filedata.songfilename;

        this.songService.updateSongFile(this.songid, this.songForm.value)
        .subscribe(data => {
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            console.log('Success update song file.');
            this.toastr.success(data.message);
          }
        });
      }
    });    
  }
  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }
}

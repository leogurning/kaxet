import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service';
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-addartist',
  templateUrl: './addartist.component.html',
  styleUrls: ['./addartist.component.css']
})


export class AddartistComponent implements OnInit {
  addArtistForm: FormGroup;
  userObj: any;
  //status: any = ['active', 'inactive'];
  filesToUpload: Array<File> = [];
  artistid: String;
  artistuploadpath:string;
  loading = false;
  progressvalue = 0;
  @ViewChild('inputimg')artistimageVar: any;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private ftService:FiletransferService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private globals: Globals
  ) { }
  
  artistname = new FormControl('', [Validators.required]);
  artistphotopath: String;
  artistphotoname: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.artistid = '';
    this.artistuploadpath = this.globals.artistuploadpath;
    this.progressvalue = 0;
    this.addArtistForm = this.fb.group({
      artistname: this.artistname,
      artistimage: this.filesToUpload,
      artistphotopath: this.artistphotopath,
      artistphotoname: this.artistphotoname
    });
  }

  addArtist(formdata:any): void {
    this.progressvalue = 0;
    const files: Array<File> = this.filesToUpload;
    if (this.addArtistForm.dirty && this.addArtistForm.valid && files[0]) {
      this.progressvalue = 10;
      let theForm = this.addArtistForm.value;
      let lformData: FormData = new FormData();
      //console.log('Ini file: '+ files[0]['name']);
      this.progressvalue = 30;
      lformData.append('fileinputsrc',files[0],files[0]['name']);
      lformData.append('uploadpath',this.artistuploadpath);
      //console.log(lformData.getAll('artistimage'));
      //console.dir(theForm);
      this.loading = true;
      this.progressvalue = 50;
      this.ftService.uploadInputFile(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
              this.progressvalue = 70;
              theForm.artistphotopath = data.filedata.filepath;
              theForm.artistphotoname = data.filedata.filename;
              theForm.status = 'STSACT';
              this.progressvalue = 90;
              //console.log('Ini file path: '+ theForm.artistphotopath);
              if (this.artistid !== '') {
                theForm.artistid = this.artistid;
              }
              this.artistService.saveArtist(this.userObj.userid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.progressvalue = 0;
                  this.toastr.error(data.message);
                } else {
                  this.loading = false;
                  this.progressvalue = 100;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listartist']);
                }
                this.addArtistForm.reset();
                this.artistimageVar.nativeElement.value = "";
                this.progressvalue = 0;
              });
          }   
        });
 
    } else {
        this.toastr.error('Please provide artist photo...');
    }
  }

  fileChangeEvent(fileInput:any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.filesToUpload);
  }

}

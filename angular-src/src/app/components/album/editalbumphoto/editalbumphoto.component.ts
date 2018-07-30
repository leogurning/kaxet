import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IAlbum } from '../../../interface/album';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editalbumphoto',
  templateUrl: './editalbumphoto.component.html',
  styleUrls: ['./editalbumphoto.component.css']
})
export class EditalbumphotoComponent implements OnInit {
  albumForm: FormGroup
  userObj: any;
  album: IAlbum;
  albumid: String;
  filesToUpload: Array<File> = [];
  loading = false;
  albumuploadpath:string;
  progressvalue = 0;
  maxfilesize: IMsconfigGroupList;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ftService:FiletransferService,
    private globals: Globals,
    private msconfigService: MsconfigService,
  ) { }
  
  albumphotopath = new FormControl('', [Validators.nullValidator]);
  albumphotoname = new FormControl('', [Validators.nullValidator]);
  newfile: String;
  displayImg: String;
  deletedFilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.albumuploadpath = this.globals.albumuploadpath;
    this.progressvalue = 0;
    this.getMsconfigVal('IMGSIZE','FSIZE');
    this.albumForm = this.fb.group({
      albumphotopath: this.albumphotopath,
      albumphotoname: this.albumphotoname
    });
    this.route.params.subscribe((params: any) => {
      this.albumid = params['id'];
      this.getAlbum(this.albumid);
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
  getAlbum(id){
    this.albumService.getAlbum(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.album = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Album id is incorrect in the URL');
          this.router.navigate(['listalbum']);
        }
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['listalbum']);
    });
  }

  populateForm(data): void {
    this.deletedFilename = this.album.albumphotoname;
    this.displayImg = this.album.albumphotopath;
    this.albumForm.patchValue({
      albumphotopath: data.albumphotopath,
      albumphotoname: data.albumphotoname
    });
  }

  fileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    if (~files[0].type.indexOf("image/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.newfile = this.filesToUpload[0]['name'];
        //console.log('content file: ' + this.filesToUpload);
        this.progressvalue = 0;
        this.uploadNewPhoto(this.filesToUpload);  
      } else {
        let mfsize = +this.maxfilesize.value/1000 ;
        alert('Error file size. File size is maximum ' + mfsize + ' Kb');
      }
    } else  {
      alert('Error file type. You must input image file type.');
    }   
  }
  
  uploadNewPhoto(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.albumuploadpath);
    this.progressvalue = 30;
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
        this.displayImg = data.filedata.filepath;
        let payloadData: any = {};
        payloadData.oldalbumphotoname = this.albumForm.value.albumphotoname;
        payloadData.uploadpath = this.albumuploadpath;
        payloadData.albumphotoname = data.filedata.filename;
        payloadData.albumphotopath = data.filedata.filepath;
        payloadData.labelid = this.userObj.userid;
        this.progressvalue = 80;
        this.progressvalue = 90;   
        this.albumService.pubupdateAlbumphoto(this.albumid, payloadData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update database photo - ' + this.displayImg)
            this.toastr.success(data.message);
            this.progressvalue = 0;
          }
        },
        err => {
          this.progressvalue = 0;
          this.loading = false;
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

/*   uploadNewPhoto(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.albumuploadpath);
    this.progressvalue = 30;
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
        this.displayImg = data.filedata.filepath;
        let payloadData: any = {};
        payloadData.uploadpath = this.albumuploadpath;
        payloadData.filename = this.albumForm.value.albumphotoname;
        this.progressvalue = 80;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              //this.toastr.error(data.message);
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.filename);
            }   
          },
          err => {
            console.log(err);
          });
        this.progressvalue = 90;   
        this.albumForm.value.albumphotopath = data.filedata.filepath;
        this.albumForm.value.albumphotoname = data.filedata.filename;

        //console.log('Update database photo - ' + this.displayImg);
        this.albumService.updateAlbumphoto(this.albumid, this.albumForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 100;
            this.loading = false;
            console.log('Success update database photo - ' + this.displayImg)
            this.toastr.success(data.message);
            this.progressvalue = 0;
          }
        },
        err => {
          this.progressvalue = 0;
          this.loading = false;
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
    this.router.navigate(['/listalbum'], { preserveQueryParams: true });
  }

}

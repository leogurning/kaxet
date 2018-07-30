import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';
import { IArtist } from '../../../interface/artist';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editartistphoto',
  templateUrl: './editartistphoto.component.html',
  styleUrls: ['./editartistphoto.component.css']
})
export class EditartistphotoComponent implements OnInit {
  artistForm: FormGroup
  userObj: any;
  artist: IArtist;
  artistid: String;
  filesToUpload: Array<File> = [];
  loading = false;
  artistuploadpath:string;
  progressvalue = 0;
  maxfilesize: IMsconfigGroupList;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private ftService:FiletransferService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private globals: Globals,
    private msconfigService: MsconfigService
  ) { }

  artistphotopath = new FormControl('', [Validators.nullValidator]);
  artistphotoname = new FormControl('', [Validators.nullValidator]);
  newfile: String;
  displayImg: String;
  deletedFilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.progressvalue = 0;
    this.artistuploadpath = this.globals.artistuploadpath;
    this.getMsconfigVal('IMGSIZE','FSIZE');
    this.artistForm = this.fb.group({
      artistphotopath: this.artistphotopath,
      artistphotoname: this.artistphotoname
    });
    this.route.params.subscribe((params: any) => {
      this.artistid = params['id'];
      this.getArtist(this.artistid);
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

  getArtist(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artist = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Artist id is incorrect in the URL');
          this.router.navigate(['listartist']);
        }
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['listartist']);
    });
  }

  populateForm(data): void {
    this.deletedFilename = this.artist.artistphotoname;
    this.displayImg = this.artist.artistphotopath;
    this.artistForm.patchValue({
      artistphotopath: data.artistphotopath,
      artistphotoname: data.artistphotoname
    });
  }
  fileChangeEvent(fileInput:any): void {
    const files: Array<File> = <Array<File>>fileInput.target.files;
    //console.log('content file: ' + this.filesToUpload);
    //alert('File size: ' + files[0].size + '. File type: '+ files[0].type + '. Max size: ' + this.maxfilesize.value);
    this.progressvalue = 0;
    if (~files[0].type.indexOf("image/")) {
      if (files[0].size <= +this.maxfilesize.value) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.newfile = this.filesToUpload[0]['name'];
        //console.log('content file: ' + this.filesToUpload);
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
    lformData.append('uploadpath',this.artistuploadpath);
    this.loading = true;
    this.progressvalue = 30;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        this.progressvalue = 50;
        this.displayImg = data.filedata.filepath;
        let payloadData: any = {};
        payloadData.uploadpath = this.artistuploadpath;
        payloadData.oldartistphotoname = this.artistForm.value.artistphotoname;
        payloadData.artistphotoname = data.filedata.filename;
        payloadData.artistphotopath = data.filedata.filepath;
        payloadData.labelid = this.userObj.userid;
        this.progressvalue = 80;   
        this.artistService.pubupdateArtistphoto(this.artistid, payloadData)
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
            this.loading = false;
            this.progressvalue = 100;
            //console.log('Success update database photo - ' + this.displayImg)
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
  }

/*   uploadNewPhoto(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.artistuploadpath);
    lformData.append('artistphotoname',this.artistForm.value.artistphotoname);
    lformData.append('labelid',this.userObj.userid);
    this.loading = true;
    this.progressvalue = 30;
    this.artistService.pubupdateArtistphoto(this.artistid, lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        this.progressvalue = 50;
        //this.displayImg = data.filedata.filepath;
        this.progressvalue = 70;
        this.progressvalue = 80;   
        this.progressvalue = 100;
        this.toastr.success(data.message);
        this.progressvalue = 0;
        this.router.navigate(['/listartist'], { preserveQueryParams: true });
      }
    },
    err => {
      this.loading = false;
      this.progressvalue = 0;
      //console.log(err);
      this.toastr.error(err);
    });    
  } */
/*   uploadNewPhoto(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    this.progressvalue = 10;
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.artistuploadpath);
    this.loading = true;
    this.progressvalue = 30;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        this.progressvalue = 50;
        this.displayImg = data.filedata.filepath;
        let payloadData: any = {};
        payloadData.uploadpath = this.artistuploadpath;
        payloadData.filename = this.artistForm.value.artistphotoname;
        this.progressvalue = 70;
        this.ftService.deleteInputFile(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              //this.toastr.error(data.message);
              this.progressvalue = 0;
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.filename);
            }   
          },
          err => {
            console.log(err);
          });
        this.progressvalue = 80;   
        this.artistForm.value.artistphotopath = data.filedata.filepath;
        this.artistForm.value.artistphotoname = data.filedata.filename;

        //console.log('Update database photo - ' + this.displayImg);
        this.artistService.updateArtistphoto(this.artistid, this.artistForm.value)
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
            this.loading = false;
            this.progressvalue = 100;
            //console.log('Success update database photo - ' + this.displayImg)
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
    this.router.navigate(['/listartist'], { preserveQueryParams: true });
  }

}

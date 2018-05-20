import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IAggMsconfig } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editconfigfile',
  templateUrl: './editconfigfile.component.html',
  styleUrls: ['./editconfigfile.component.css']
})
export class EditconfigfileComponent implements OnInit {
  msconfigForm: FormGroup
  userObj: any;
  msconfig: IAggMsconfig;
  msconfigid: String;
  filesToUpload: Array<File> = [];
  loading = false;
  configuploadpath:string;
  progressvalue = 0;
  maxfilesize: IMsconfigGroupList;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private ftService:FiletransferService,
    private globals: Globals
  ) { }
  filepath = new FormControl('', [Validators.nullValidator]);
  filename = new FormControl('', [Validators.nullValidator]);
  newfile: String;
  displayImg: String;
  deletedFilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.configuploadpath = this.globals.configuploadpath;
    this.progressvalue = 0;
    this.getMsconfigVal('IMGSIZE','FSIZE');
    this.msconfigForm = this.fb.group({
      filepath: this.filepath,
      filename: this.filename
    });
    this.route.params.subscribe((params: any) => {
      let msconfigid = params['id'];
      this.msconfigid = msconfigid;
      this.getMsconfig(msconfigid);
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
  getMsconfig(id){
    this.msconfigService.getMsconfigAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.msconfig = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('MsConfig id is incorrect in the URL');
        }
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }
  populateForm(data): void {
    this.deletedFilename = this.msconfig.filename;
    this.displayImg = this.msconfig.filepath;
    this.msconfigForm.patchValue({
      filepath: data.filepath,
      filename: data.filename
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
    this.progressvalue = 30;
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    //lformData.append('genreimage',files[0],files[0]['name']);
    lformData.append('fileinputsrc',files[0],files[0]['name']);
    lformData.append('uploadpath',this.configuploadpath);
    this.loading = true;
    this.progressvalue = 60;
    this.ftService.uploadInputFile(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.progressvalue = 0;
        this.toastr.error(data.message);
      } else {
        this.progressvalue = 70;
        this.displayImg = data.filedata.filepath;
        //let payloadData: any = this.msconfigForm.value;
        let payloadData: any = {};
        payloadData.uploadpath = this.configuploadpath;
        payloadData.filename = this.msconfigForm.value.filename;
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
            console.log('Error deleted ' + err);
          });
        this.msconfigForm.value.msconfigid = this.msconfigid;   
        this.msconfigForm.value.filepath = data.filedata.filepath;
        this.msconfigForm.value.filename = data.filedata.filename;
        this.progressvalue = 90;
        //console.log('Update database photo - ' + this.displayImg);
        this.msconfigService.updateMsconfigfile(this.userObj.userid, this.msconfigForm.value)
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
            console.log('Success update database photo - ' + this.displayImg)
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
  onBack(): void {
    this.router.navigate(['/listconfig'], { preserveQueryParams: true });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IAggMsconfig } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

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
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.newfile = this.filesToUpload[0]['name'];
    console.log('content file: ' + this.filesToUpload);
    this.progressvalue = 0;
    this.uploadNewPhoto(this.filesToUpload);  
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
        });

      }
    });    
  }
  onBack(): void {
    this.router.navigate(['/listconfig'], { preserveQueryParams: true });
  }
}

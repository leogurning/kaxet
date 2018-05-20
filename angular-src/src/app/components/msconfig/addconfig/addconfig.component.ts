import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service';
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-addconfig',
  templateUrl: './addconfig.component.html',
  styleUrls: ['./addconfig.component.css']
})
export class AddconfigComponent implements OnInit {
  addConfigForm: FormGroup;
  userObj: any;
  //status: any = ['active', 'inactive'];
  filesToUpload: Array<File> = [];
  msconfigid: String;
  grouplist: IMsconfigGroupList[];
  loading = false;
  @ViewChild('inputimg')genreimageVar: any;
  @ViewChild('inputgroup')inputgroupVar: any;  
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
    private datePipe: DatePipe,
    private ftService:FiletransferService,
    private globals: Globals
  ) { }

  code = new FormControl('', [Validators.required]);
  value = new FormControl('', [Validators.required]);
  group = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.nullValidator]);
  filepath: String;
  filename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.configuploadpath = this.globals.configuploadpath;
    this.progressvalue = 0;
    this.msconfigid = '';
    this.addConfigForm = this.fb.group({
      code: this.code,
      value: this.value,
      group: this.group,
      desc: this.desc,
      genreimage: this.filesToUpload,
      filepath: this.filepath,
      filename: this.filename
    });
    this.getMsconfiggroup();
    this.getMsconfigVal('IMGSIZE','FSIZE');
  }
  getMsconfiggroup(){
    this.msconfigService.getMsconfiggroup().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.grouplist = data.data;
          //console.log(this.artistlist);
        } else {
          this.grouplist = [{code:'', value:'Error group list'}];
        }
      }
    },
    err => {
      this.grouplist = [{code:'', value:'Error group list'}];
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
  addMsconfig(formdata:any): void {
    this.progressvalue = 0;
    if (this.addConfigForm.dirty && this.addConfigForm.valid) {
      const files: Array<File> = this.filesToUpload;
      let theForm = this.addConfigForm.value;
      this.loading = true;
      this.progressvalue = 10;
      if (this.genreimageVar.nativeElement.value) {
        this.progressvalue = 30;
        let lformData: FormData = new FormData();
        //console.log('Ini file: '+ files[0]['name']); 
        //lformData.append('genreimage',files[0],files[0]['name']);
        lformData.append('fileinputsrc',files[0],files[0]['name']);
        lformData.append('uploadpath',this.configuploadpath);
        //console.log(lformData.getAll('artistimage'));
        //console.dir(theForm);
        this.progressvalue = 50;
        this.ftService.uploadInputFile(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
              this.progressvalue = 70;
              theForm.filepath = data.filedata.filepath;
              theForm.filename = data.filedata.filename;
              theForm.status = 'STSACT';
              //console.log('Ini file path: '+ theForm.artistphotopath);
              if (this.msconfigid !== '') {
                theForm.msconfigid = this.msconfigid;
              }
              this.progressvalue = 90;
              this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.progressvalue = 0;
                  this.toastr.error(data.message);
                } else {
                  this.progressvalue = 100;
                  this.loading = false;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listartist']);
                }
                this.addConfigForm.reset();
                this.inputgroupVar.nativeElement.selectedIndex = 0;
                this.genreimageVar.nativeElement.value = "";
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
      }else {
        this.progressvalue = 30;
        theForm.status = 'STSACT';
        //console.log('Ini file path: '+ theForm.artistphotopath);
        if (this.msconfigid !== '') {
          theForm.msconfigid = this.msconfigid;
        }
        this.progressvalue = 70;
        this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.progressvalue = 0;
            this.toastr.error(data.message);
          } else {
            this.progressvalue = 90;
            this.loading = false;
            this.toastr.success(data.message);
            //this.router.navigate(['listartist']);
            this.progressvalue = 100;
          }
          this.addConfigForm.reset();
          this.inputgroupVar.nativeElement.selectedIndex = 0;
          this.genreimageVar.nativeElement.value = "";
          this.progressvalue = 0;
        },
        err => {
          this.loading = false;
          this.progressvalue = 0;
          //console.log(err);
          this.toastr.error(err);
        });
      }
    }
  }
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
        this.genreimageVar.nativeElement.value = "";
      }
    } else  {
      alert('Error file type. You must input image file type.');
      this.genreimageVar.nativeElement.value = "";
    }   
  }
}

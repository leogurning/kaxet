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
  configuploadpath:string;
  progressvalue = 0;

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
                this.genreimageVar.nativeElement.value = "";
                this.progressvalue = 0;
              });
          }   
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
          this.genreimageVar.nativeElement.value = "";
          this.progressvalue = 0;
        });
      }
    }
  }
  fileChangeEvent(fileInput:any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.filesToUpload);
  }
}

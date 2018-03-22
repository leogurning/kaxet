import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service';
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

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

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  code = new FormControl('', [Validators.required]);
  value = new FormControl('', [Validators.required]);
  group = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.nullValidator]);
  filepath: String;
  filename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
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
    if (this.addConfigForm.dirty && this.addConfigForm.valid) {
      const files: Array<File> = this.filesToUpload;
      let theForm = this.addConfigForm.value;
      this.loading = true;
      if (this.genreimageVar.nativeElement.value) {
        let lformData: FormData = new FormData();
        //console.log('Ini file: '+ files[0]['name']); 
        lformData.append('genreimage',files[0],files[0]['name']);
        //console.log(lformData.getAll('artistimage'));
        //console.dir(theForm);
        this.msconfigService.uploadGenrephoto(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.toastr.error(data.message);
          } else {
              theForm.filepath = data.filedata.filepath;
              theForm.filename = data.filedata.filename;
              theForm.status = 'STSACT';
              //console.log('Ini file path: '+ theForm.artistphotopath);
              if (this.msconfigid !== '') {
                theForm.msconfigid = this.msconfigid;
              }
              this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.toastr.error(data.message);
                } else {
                  this.loading = false;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listartist']);
                }
                this.addConfigForm.reset();
                this.genreimageVar.nativeElement.value = "";
              });
          }   
        });
      }else {
        theForm.status = 'STSACT';
        //console.log('Ini file path: '+ theForm.artistphotopath);
        if (this.msconfigid !== '') {
          theForm.msconfigid = this.msconfigid;
        }
        this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.toastr.success(data.message);
            //this.router.navigate(['listartist']);
          }
          this.addConfigForm.reset();
          this.genreimageVar.nativeElement.value = "";
        });
      }
    }
  }
  fileChangeEvent(fileInput:any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.filesToUpload);
  }
}

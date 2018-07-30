import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editconfig',
  templateUrl: './editconfig.component.html',
  styleUrls: ['./editconfig.component.css']
})
export class EditconfigComponent implements OnInit {
  msconfigForm: FormGroup;
  userObj: any;
  sts: IMsconfigGroupList[];
  //sts: any = ['active', 'inactive'];
  grouplist: IMsconfigGroupList[];
  msconfigid: String;
  btnLbl: String;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  mscode: String;
  code = new FormControl('', [Validators.required]);
  value = new FormControl('', [Validators.required]);
  group = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.nullValidator]);
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.msconfigid = params['id'];
      this.getMsconfig(this.msconfigid);
      this.btnLbl = "Update"
    });
    
    this.userObj =  this.authService.currentUser;
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfiggroup();
    this.msconfigForm = this.fb.group({
      code: this.code,
      value: this.value,
      group: this.group,
      desc: this.desc,
      status: this.status
    });
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'CSTATUS') {
            this.sts = data.data;
          }
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
    });
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

  getMsconfig(id){
    this.msconfigService.getMsconfigAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
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
    this.mscode = data.code;
    this.msconfigForm.patchValue({
      code: data.code,
      value: data.value,
      group: data.group,
      desc: data.desc,
      status: data.status
    });
  }

  saveMsconfig(formdata:any): void {
    if (this.msconfigForm.valid) {
      const theForm:any = this.msconfigForm.value;
      if (this.msconfigid !== '') {
        theForm.msconfigid = this.msconfigid;
      
      }
      this.loading = true;
      this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
        .subscribe(data => {
          this.loading = false;
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
          }
          if (!this.msconfigid) {
            this.msconfigForm.reset();
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
  onBack(): void {
    this.router.navigate(['/listconfig'], { preserveQueryParams: true });
  }
}

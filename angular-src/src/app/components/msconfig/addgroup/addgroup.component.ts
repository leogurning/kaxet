import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service';
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  addGroupForm: FormGroup;
  userObj: any;
  //status: any = ['active', 'inactive'];
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
  code = new FormControl('', [Validators.required]);
  value = new FormControl('', [Validators.required]);
  desc = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.addGroupForm = this.fb.group({
      code: this.code,
      value: this.value,
      desc: this.desc
    });
  }
  addMsgroup(formdata:any): void {
    if (this.addGroupForm.dirty && this.addGroupForm.valid) {
      let theForm = this.addGroupForm.value;
      this.loading = true;
      theForm.group = 'GROUP';      
      theForm.status = 'STSACT';
      //console.log('Ini file path: '+ theForm.artistphotopath);
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
        this.addGroupForm.reset();
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
}

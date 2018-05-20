import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { IAggMsconfig } from '../../../interface/msconfig';

@Component({
  selector: 'app-viewconfig',
  templateUrl: './viewconfig.component.html',
  styleUrls: ['./viewconfig.component.css']
})
export class ViewconfigComponent implements OnInit {

  userObj: any;
  private sub: Subscription;
  sts: IMsconfigGroupList[];
  msconfig: IAggMsconfig;
  msconfigForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private msconfigService: MsconfigService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let msconfigid = params['id'];
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfig(msconfigid);
      });
    this.msconfigForm = this.fb.group({
      status: this.status
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.sts = data.data;
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
      //console.log(err);
      this.toastr.error(err);
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
      //console.log(err);
      this.toastr.error(err);
    });
  }
  populateForm(data): void {
    this.msconfigForm.patchValue({
      status: data.status
    });
  }
  onBack(): void {
    this.router.navigate(['/listconfig'], { preserveQueryParams: true });
  }
}

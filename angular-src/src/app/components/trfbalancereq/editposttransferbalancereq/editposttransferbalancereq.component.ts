import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { TrfbalancemgtService } from '../../../services/admin/trfbalancemgt.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-editposttransferbalancereq',
  templateUrl: './editposttransferbalancereq.component.html',
  styleUrls: ['./editposttransferbalancereq.component.css']
})
export class EditposttransferbalancereqComponent implements OnInit {
  trfbalancereqForm: FormGroup;
  trfbalancereq: any;
  userObj: any;
  trfbalancereqid: String;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private trfbalancemgtService: TrfbalancemgtService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  bankref = new FormControl('', [Validators.required]);  
  transferdt = new FormControl('', [Validators.required]);  
  remarks = new FormControl('', [Validators.nullValidator]);
  editlog = new FormControl({value: '', disabled: true}, [Validators.required]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.trfbalancereqid = params['id'];
    });
    
    this.getSelectedTrfbalancereq(this.trfbalancereqid);
    this.userObj =  this.authService.currentUser;

    this.trfbalancereqForm = this.fb.group({
      bankref: this.bankref,
      transferdt: this.transferdt,
      remarks: this.remarks,
      editlog: this.editlog,
    });
  }
  getSelectedTrfbalancereq(id){
    this.trfbalancemgtService.getTrfbalancereqAgg(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.trfbalancereq = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Empty transfer balance request result');
          this.router.navigate(['pendingtrfbalancereq']);
        }
      } else {
        this.toastr.error('Transfer request id is incorrect in the URL');
        this.router.navigate(['pendingtrfbalancereq']);
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['pendingtrfbalancereq']);
    });
  }
  populateForm(data): void {

    this.trfbalancereqForm.patchValue({
      bankref: data.bankref,
      transferdt: data.transferdt,
      remarks: data.remarks,
      editlog: data.extfield1
    });
  }
  editTrfbalancereq(formdata:any): void {
    if (this.trfbalancereqForm.valid) {
      const theForm:any = this.trfbalancereqForm.value;
      theForm.adminuser = this.userObj.username;
      theForm.adminuserid = this.userObj.userid;
      this.loading = true;
      this.trfbalancemgtService.editposttrfbalance(this.trfbalancereqid, theForm)
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
          if (!this.trfbalancereqid) {
            this.trfbalancereqForm.reset();
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
    this.router.navigate(['/admlisttrfbalancereq'], { preserveQueryParams: true });
  }
}

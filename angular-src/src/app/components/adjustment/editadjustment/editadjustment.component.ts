import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { AuthService } from '../../../services/auth.service';
import { AdjustmentService } from '../../../services/admin/adjustment.service';
//import { SongService } from '../../services/song.service';
import { IUserList } from '../../../interface/user';
import { UsermgtService } from '../../../services/admin/usermgt.service';

@Component({
  selector: 'app-editadjustment',
  templateUrl: './editadjustment.component.html',
  styleUrls: ['./editadjustment.component.css']
})
export class EditadjustmentComponent implements OnInit {
  adjustmentForm: FormGroup;
  userObj: any;
  adjid: String;
  adjustment: any;
  btnLbl: String;
  loading = false;
  dc = [{code: '-', value: 'OUT / -'},
        {code: '+', value: 'IN / +'}];
  progressvalue = 0;
  userlist: IUserList[];

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private adjustmentService: AdjustmentService,
    private labelmgtService: UsermgtService 
  ) { }

  amount = new FormControl('',[Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  remarks = new FormControl('', [Validators.required]);
  dbcr = new FormControl('',[Validators.required]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.adjid = params['id'];
      this.btnLbl = "Update"
    });
    this.getSelectedAdj(this.adjid);
    
    this.userObj =  this.authService.currentUser;

    this.adjustmentForm = this.fb.group({
      amount: this.amount,
      remarks: this.remarks,
      dbcr: this.dbcr
    });
  }
  getSelectedAdj(id){
    this.adjustmentService.getAdjustmentAgg(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.adjustment = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Empty adjustment data result');
          this.router.navigate(['listadjustment']);
        }
      } else {
        this.toastr.error('Adjustment id is incorrect in the URL');
        this.router.navigate(['listadjustment']);
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['listadjustment']);
    });
  }

  populateForm(data): void {

    this.adjustmentForm.patchValue({
      amount: data.amount,
      remarks: data.remarks,
      dbcr: data.dbcr
    });
  }
  saveAdjustment(formdata:any): void {
    if (this.adjustmentForm.valid) {
      const theForm:any = this.adjustmentForm.value;
      theForm.adminuser = this.userObj.username;
      theForm.adminuserid = this.userObj.userid;
      this.loading = true;
      this.adjustmentService.editAdjustment(this.adjid, theForm)
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
          if (!this.adjid) {
            this.adjustmentForm.reset();
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
    this.router.navigate(['/listadjustment'], { preserveQueryParams: true });
  }
}

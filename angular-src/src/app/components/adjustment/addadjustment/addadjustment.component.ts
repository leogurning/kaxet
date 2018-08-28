import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service';
import { AuthService } from '../../../services/auth.service';
import { AdjustmentService } from '../../../services/admin/adjustment.service';
//import { SongService } from '../../services/song.service';
import { IUserList } from '../../../interface/user';
import { UsermgtService } from '../../../services/admin/usermgt.service';

@Component({
  selector: 'app-addadjustment',
  templateUrl: './addadjustment.component.html',
  styleUrls: ['./addadjustment.component.css']
})
export class AddadjustmentComponent implements OnInit {
  addAdjustmentForm: FormGroup;
  userObj: any;
  dc = [{code: '-', value: 'OUT / -'},
        {code: '+', value: 'IN / +'}];
  loading = false;
  progressvalue = 0;
  userlist: IUserList[];
  @ViewChild('inputlabel')labelVar: any;
  @ViewChild('inputdbcr')dbcrVar: any;

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
  
  labelid = new FormControl('',[Validators.required]);
  amount = new FormControl('',[Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  remarks = new FormControl('', [Validators.required]);
  dbcr = new FormControl('',[Validators.required]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.progressvalue = 0;
    this.getLabels();
    this.addAdjustmentForm = this.fb.group({
      labelid: this.labelid,
      amount: this.amount,
      remarks: this.remarks,
      dbcr: this.dbcr
    });
    //saveAdjustment
  }
  getLabels(){
    this.labelmgtService.getLabelList().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.userlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.userlist = [{_id:'', name:'Empty list...'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.userlist = [{_id:'', name:'Error label list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  addAdjustment(formdata:any): void {
    this.progressvalue = 0;
    
    if (this.addAdjustmentForm.dirty && this.addAdjustmentForm.valid ) {
      
      this.progressvalue = 10;
      let theForm = this.addAdjustmentForm.value;
      this.progressvalue = 30;
      theForm.username = this.userObj.username;
      this.loading = true;
      this.adjustmentService.saveAdjustment(this.userObj.userid, theForm)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          this.progressvalue = 0;
          this.toastr.error(data.message);
        } else {
          this.progressvalue = 50;
          this.loading = false;
          this.progressvalue = 100;
          this.toastr.success(data.message);
        }
        this.addAdjustmentForm.reset();
        this.labelVar.nativeElement.selectedIndex = 0;
        this.dbcrVar.nativeElement.selectedIndex = 0;
        this.progressvalue = 0;
      },
      err => {
        this.progressvalue = 0;
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    } else {
        this.toastr.error('Please provide correct input...');
    }
  }
}

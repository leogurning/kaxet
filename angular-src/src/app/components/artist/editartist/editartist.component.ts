import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-editartist',
  templateUrl: './editartist.component.html',
  styleUrls: ['./editartist.component.css']
})
export class EditartistComponent implements OnInit {
  artistForm: FormGroup;
  userObj: any;
  sts: IMsconfigGroupList[];
  //sts: any = ['active', 'inactive'];
  artistid: String;
  btnLbl: String;
  loading = false;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  artistname = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  about = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.artistid = params['id'];
      this.getMsconfigGroupList('CSTATUS');
      this.getArtist(this.artistid);
      this.btnLbl = "Update"
    });
    
    this.userObj =  this.authService.currentUser;
    this.artistForm = this.fb.group({
      artistname: this.artistname,
      status: this.status,
      about: this.about
    });
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
    });
  }

  getArtist(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Artist id is incorrect in the URL');
          this.router.navigate(['listartist']);
        }
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
      this.router.navigate(['listartist']);
    });
  }
  populateForm(data): void {
    this.artistForm.patchValue({
      artistname: data.artistname,
      status: data.status,
      about: data.about
    });
  }

  saveArtist(formdata:any): void {
    if (this.artistForm.valid) {
      const theForm:any = this.artistForm.value;
      if (this.artistid !== '') {
        theForm.artistid = this.artistid;
      
      }
      this.loading = true;
      this.artistService.pubsaveArtist(this.userObj.userid,theForm)
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
          if (!this.artistid) {
            this.artistForm.reset();
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
/*   saveArtist(formdata:any): void {
    if (this.artistForm.valid) {
      const theForm:any = this.artistForm.value;
      if (this.artistid !== '') {
        theForm.artistid = this.artistid;
      
      }
      this.loading = true;
      this.artistService.saveArtist(this.userObj.userid,theForm)
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
          if (!this.artistid) {
            this.artistForm.reset();
          }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  } */

  onBack(): void {
    this.router.navigate(['/listartist'], { preserveQueryParams: true });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-editartist',
  templateUrl: './editartist.component.html',
  styleUrls: ['./editartist.component.css']
})
export class EditartistComponent implements OnInit {
  artistForm: FormGroup;
  userObj: any;
  sts: any = ['active', 'inactive'];
  artistid: String;
  btnLbl: String;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  artistname = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.artistid = params['id'];
      this.getArtist(this.artistid);
      this.btnLbl = "Update"
    });
    
    this.userObj =  this.authService.currentUser;
    this.artistForm = this.fb.group({
      artistname: this.artistname,
      status: this.status
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
    });
  }
  populateForm(data): void {
    this.artistForm.patchValue({
      artistname: data.artistname,
      status: data.status
    });
  }

  saveArtist(formdata:any): void {
    if (this.artistForm.valid) {
      const theForm:any = this.artistForm.value;
      if (this.artistid !== '') {
        theForm.artistid = this.artistid;
      
      }
      this.artistService.saveArtist(this.userObj.userid,theForm)
        .subscribe(data => {
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.toastr.success(data.message);
          }
          if (!this.artistid) {
            this.artistForm.reset();
          }
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/listartist'], { preserveQueryParams: true });
  }
}

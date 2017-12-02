import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-addartist',
  templateUrl: './addartist.component.html',
  styleUrls: ['./addartist.component.css']
})
export class AddartistComponent implements OnInit {
  addArtistForm: FormGroup;
  userObj: any;
  //status: any = ['active', 'inactive'];
  filesToUpload: Array<File> = [];
  artistid: String;
  loading = false;

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
  artistphotopath: String;
  artistphotoname: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.artistid = '';
    this.addArtistForm = this.fb.group({
      artistname: this.artistname,
      artistimage: this.filesToUpload,
      artistphotopath: this.artistphotopath,
      artistphotoname: this.artistphotoname
    });
  }

  addArtist(formdata:any): void {
    if (this.addArtistForm.dirty && this.addArtistForm.valid) {
      const files: Array<File> = this.filesToUpload;
      let theForm = this.addArtistForm.value;
      let lformData: FormData = new FormData();
      console.log('Ini file: '+ files[0]['name']);
      
      lformData.append('artistimage',files[0],files[0]['name']);
      console.log(lformData.getAll('artistimage'));
      console.dir(theForm);
      this.loading = true;
      this.artistService.uploadArtistphoto(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.toastr.error(data.message);
          } else {
              theForm.artistphotopath = data.filedata.artistphotopath;
              theForm.artistphotoname = data.filedata.artistphotoname;
              theForm.status = 'active';
              console.log('Ini file path: '+ theForm.artistphotopath);
              if (this.artistid !== '') {
                theForm.artistid = this.artistid;
              }
              this.artistService.saveArtist(this.userObj.userid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.toastr.error(data.message);
                } else {
                  this.loading = false;
                  this.toastr.success(data.message);
                  this.router.navigate(['listartist']);
                }
                this.addArtistForm.reset();
              });
          }   
        });
 
    }
  }

  fileChangeEvent(fileInput:any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('content file: ' + this.filesToUpload);
  }

}

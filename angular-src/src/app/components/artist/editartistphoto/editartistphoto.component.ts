import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AuthService } from '../../../services/auth.service';
import { IArtist } from '../../../interface/artist';

@Component({
  selector: 'app-editartistphoto',
  templateUrl: './editartistphoto.component.html',
  styleUrls: ['./editartistphoto.component.css']
})
export class EditartistphotoComponent implements OnInit {
  artistForm: FormGroup
  userObj: any;
  artist: IArtist;
  artistid: String;
  filesToUpload: Array<File> = [];
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  artistphotopath = new FormControl('', [Validators.nullValidator]);
  artistphotoname = new FormControl('', [Validators.nullValidator]);
  newfile: String;
  displayImg: String;
  deletedFilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.artistForm = this.fb.group({
      artistphotopath: this.artistphotopath,
      artistphotoname: this.artistphotoname
    });
    this.route.params.subscribe((params: any) => {
      this.artistid = params['id'];
      this.getArtist(this.artistid);
    });
  }
  getArtist(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artist = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Artist id is incorrect in the URL');
          this.router.navigate(['listartist']);
        }
      }
    });
  }

  populateForm(data): void {
    this.deletedFilename = this.artist.artistphotoname;
    this.displayImg = this.artist.artistphotopath;
    this.artistForm.patchValue({
      artistphotopath: data.artistphotopath,
      artistphotoname: data.artistphotoname
    });
  }
  fileChangeEvent(fileInput:any): void {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.newfile = this.filesToUpload[0]['name'];
    console.log('content file: ' + this.filesToUpload);
    this.uploadNewPhoto(this.filesToUpload);  
  }

  uploadNewPhoto(newFileData:any): void {
    const files: Array<File> = newFileData;
    let lformData: FormData = new FormData();
    lformData.append('artistimage',files[0],files[0]['name']);
    this.loading = true;
    this.artistService.uploadArtistphoto(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.toastr.error(data.message);
      } else {
        this.displayImg = data.filedata.artistphotopath;
        let payloadData: any = this.artistForm.value;
        this.artistService.deleteArtistPhoto(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              //this.toastr.error(data.message);
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.artistphotoname);
            }   
          });
           
        this.artistForm.value.artistphotopath = data.filedata.artistphotopath;
        this.artistForm.value.artistphotoname = data.filedata.artistphotoname;

        console.log('Update database photo - ' + this.displayImg);
        this.artistService.updateArtistphoto(this.artistid, this.artistForm.value)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['login']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            console.log('Success update database photo - ' + this.displayImg)
            this.toastr.success(data.message);
          }
        });

      }
    });    
  }

  onBack(): void {
    this.router.navigate(['/listartist'], { preserveQueryParams: true });
  }

}

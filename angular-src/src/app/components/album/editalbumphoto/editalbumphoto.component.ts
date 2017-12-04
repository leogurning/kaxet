import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../common/toastr.service'
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IAlbum } from '../../../interface/album';

@Component({
  selector: 'app-editalbumphoto',
  templateUrl: './editalbumphoto.component.html',
  styleUrls: ['./editalbumphoto.component.css']
})
export class EditalbumphotoComponent implements OnInit {
  albumForm: FormGroup
  userObj: any;
  album: IAlbum;
  albumid: String;
  filesToUpload: Array<File> = [];
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  albumphotopath = new FormControl('', [Validators.nullValidator]);
  albumphotoname = new FormControl('', [Validators.nullValidator]);
  newfile: String;
  displayImg: String;
  deletedFilename: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.albumForm = this.fb.group({
      albumphotopath: this.albumphotopath,
      albumphotoname: this.albumphotoname
    });
    this.route.params.subscribe((params: any) => {
      this.albumid = params['id'];
      this.getAlbum(this.albumid);
    });
  }
  getAlbum(id){
    this.albumService.getAlbum(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.album = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Album id is incorrect in the URL');
          this.router.navigate(['listalbum']);
        }
      }
    });
  }

  populateForm(data): void {
    this.deletedFilename = this.album.albumphotoname;
    this.displayImg = this.album.albumphotopath;
    this.albumForm.patchValue({
      albumphotopath: data.albumphotopath,
      albumphotoname: data.albumphotoname
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
    lformData.append('albumimage',files[0],files[0]['name']);
    this.loading = true;
    this.albumService.uploadAlbumphoto(lformData)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.toastr.error(data.message);
      } else {
        this.displayImg = data.filedata.albumphotopath;
        let payloadData: any = this.albumForm.value;
        this.albumService.deleteAlbumPhoto(payloadData)
        .subscribe(data => {
           if (data.success === false) {
              //this.toastr.error(data.message);
              console.log('Error deleted ' + data.message);
            } else {
              console.log('File deleted - ' + payloadData.albumphotoname);
            }   
          });
           
        this.albumForm.value.albumphotopath = data.filedata.albumphotopath;
        this.albumForm.value.albumphotoname = data.filedata.albumphotoname;

        console.log('Update database photo - ' + this.displayImg);
        this.albumService.updateAlbumphoto(this.albumid, this.albumForm.value)
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
    this.router.navigate(['/listalbum'], { preserveQueryParams: true });
  }

}

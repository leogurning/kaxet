import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {
  addAlbumForm: FormGroup;
  userObj: any;
  genre: any = ['Alternative', 'Blues', 'Children', 'Classical','Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop','Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age','Pop','RnB','Reggae', 'Rock', 'Soundtrack','Vocal','Others'];
  filesToUpload: Array<File> = [];
  albumid: String;
  artistlist: IArtistList[];

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }

  artistid = new FormControl('', [Validators.required]);  
  albumname = new FormControl('', [Validators.required]);
  albumyear = new FormControl('', [Validators.required]);
  albumgenre = new FormControl('', [Validators.required]);
  albumprice = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  albumphotopath: String;
  albumphotoname: String;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.getArtistList(this.userObj.userid);
    this.albumid = '';
    this.addAlbumForm = this.fb.group({
      artistid: this.artistid,
      albumname: this.albumname,
      albumyear: this.albumyear,
      albumgenre: this.albumgenre,
      albumprice: this.albumprice,
      albumimage: this.filesToUpload,
      albumphotopath: this.albumphotopath,
      albumphotoname: this.albumphotoname
    });
  }
  getArtistList(id){
    this.artistService.getArtistList(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artistlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.artistlist = [{_id:'', artistname:'Error artist list'}];
        }
      }
    });
  }

  addAlbum(formdata:any): void {
    if (this.addAlbumForm.dirty && this.addAlbumForm.valid) {
      const files: Array<File> = this.filesToUpload;
      let theForm = this.addAlbumForm.value;
      let lformData: FormData = new FormData();
      console.log('Ini file: '+ files[0]['name']);
      
      lformData.append('albumimage',files[0],files[0]['name']);
      console.log(lformData.getAll('albumimage'));
      console.dir(theForm);
      this.albumService.uploadAlbumphoto(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.toastr.error(data.message);
          } else {
              theForm.albumphotopath = data.filedata.albumphotopath;
              theForm.albumphotoname = data.filedata.albumphotoname;
              theForm.status = 'active';
              console.log('Ini file path: '+ theForm.albumphotopath);
              if (this.albumid !== '') {
                theForm.albumid = this.albumid;
              }
              this.albumService.saveAlbum(this.userObj.userid, theForm.artistid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.toastr.error(data.message);
                } else {
                  this.toastr.success(data.message);
                  this.router.navigate(['report']);
                }
                this.addAlbumForm.reset();
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

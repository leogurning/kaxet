import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-addalbum',
  templateUrl: './addalbum.component.html',
  styleUrls: ['./addalbum.component.css']
})
export class AddalbumComponent implements OnInit {
  addAlbumForm: FormGroup;
  userObj: any;
  genre: IMsconfigGroupList[];
  filesToUpload: Array<File> = [];
  albumid: String;
  artistlist: IArtistList[];
  loading = false;
  @ViewChild('inputimg')albumimageVar: any;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private msconfigService: MsconfigService,
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
    this.getMsconfigGroupList('GENRE');
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

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.genre = data.data;
        } else {
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
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
      console.dir(theForm);
      this.loading = true;
      this.albumService.uploadAlbumphoto(lformData)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.toastr.error(data.message);
          } else {
              theForm.albumphotopath = data.filedata.albumphotopath;
              theForm.albumphotoname = data.filedata.albumphotoname;
              theForm.status = 'STSACT';
              console.log('Ini file path: '+ theForm.albumphotopath);
              if (this.albumid !== '') {
                theForm.albumid = this.albumid;
              }
              this.albumService.saveAlbum(this.userObj.userid, theForm.artistid, theForm)
              .subscribe(data => {
                if (data.success === false) {
                  this.loading = false;
                  this.toastr.error(data.message);
                } else {
                  this.loading = false;
                  this.toastr.success(data.message);
                  //this.router.navigate(['listalbum']);
                }
                this.addAlbumForm.reset();
                this.albumimageVar.nativeElement.value = "";
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

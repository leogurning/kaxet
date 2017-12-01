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
  selector: 'app-editalbum',
  templateUrl: './editalbum.component.html',
  styleUrls: ['./editalbum.component.css']
})
export class EditalbumComponent implements OnInit {
  albumForm: FormGroup;
  userObj: any;
  sts: any = ['active', 'inactive'];
  genre: any = ['Alternative', 'Blues', 'Children', 'Classical','Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop','Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age','Pop','RnB','Reggae', 'Rock', 'Soundtrack','Vocal','Others'];
  albumid: String;
  artistlist: IArtistList[];
  btnLbl: String;

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
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.albumid = params['id'];
      this.getAlbum(this.albumid);
      this.btnLbl = "Update"
    });
    
    this.userObj =  this.authService.currentUser;
    this.getArtistList(this.userObj.userid);
    this.albumForm = this.fb.group({
      artistid: this.artistid,
      albumname: this.albumname,
      albumyear: this.albumyear,
      albumgenre: this.albumgenre,
      albumprice: this.albumprice,
      status: this.status
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
  getAlbum(id){
    this.albumService.getAlbum(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Album id is incorrect in the URL');
          this.router.navigate(['listalbum']);
        }
      }
    });
  }
  populateForm(data): void {
    this.albumForm.patchValue({
      artistid: data.artistid,
      albumname: data.albumname,
      albumyear: data.albumyear,
      albumgenre: data.albumgenre,
      albumprice: data.albumprice,
      status: data.status
    });
  }

  saveAlbum(formdata:any): void {
    if (this.albumForm.valid) {
      const theForm:any = this.albumForm.value;
      if (this.albumid !== '') {
        theForm.albumid = this.albumid;
      
      }
      this.albumService.saveAlbum(this.userObj.userid,theForm.artistid, theForm)
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
          if (!this.albumid) {
            this.albumForm.reset();
          }
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/listalbum'], { preserveQueryParams: true });
  }
}

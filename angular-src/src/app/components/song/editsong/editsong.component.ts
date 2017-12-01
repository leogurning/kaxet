import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { IArtistList } from '../../../interface/artist';
import { IAlbumList } from '../../../interface/album';
import { ISong } from '../../../interface/song';

@Component({
  selector: 'app-editsong',
  templateUrl: './editsong.component.html',
  styleUrls: ['./editsong.component.css']
})
export class EditsongComponent implements OnInit {
  songForm: FormGroup;
  userObj: any;
  sts: any = ['active', 'inactive'];
  genre: any = ['Alternative', 'Blues', 'Children', 'Classical','Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop','Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age','Pop','RnB','Reggae', 'Rock', 'Soundtrack','Vocal','Others'];
  ynlist: any = ['Y','N'];

  songid: String;
  artistlist: IArtistList[];
  albumlist: IAlbumList[];
  partistid: String;
  btnLbl: String;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) { }
  artistid = new FormControl('', [Validators.required]);  
  albumid = new FormControl('', [Validators.required]);  
  songname = new FormControl('', [Validators.required]);
  songlyric = new FormControl('', [Validators.required]);  
  songgenre = new FormControl('', [Validators.required]);
  songprice = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  songpublish = new FormControl('', [Validators.required]);
  songbuy = new FormControl('', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]);
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.songid = params['id'];
      this.btnLbl = "Update"
    });
    this.getSelectedSong(this.songid);
    this.userObj =  this.authService.currentUser;
    this.getArtistList(this.userObj.userid);

    this.songForm = this.fb.group({
      artistid: this.artistid,
      albumid: this.albumid,
      songname: this.songname,
      songlyric: this.songlyric,
      songgenre: this.songgenre,
      songprice: this.songprice,
      songpublish: this.songpublish,
      songbuy: this.songbuy,         
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

  getAlbumListbyArtist(id, artistid){
    this.albumService.getAlbumListbyArtist(id, artistid).subscribe(data => {
      if (data.success === true) {
        console.log(data.data[0]);
        if (data.data[0]) {
          this.albumlist = data.data;
          //console.log(this.albumlist);
        } else {
          this.albumlist = [{_id:'', albumname:'No album list available'}];
        }
      }
    });
  }

  getSelectedSong(id){
    this.songService.getSong(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.partistid = data.data[0].artistid;
          this.getAlbumListbyArtist(this.userObj.userid, this.partistid)
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Song id is incorrect in the URL');
          this.router.navigate(['listsong']);
        }
      }
    });
  }

  populateForm(data): void {
    this.songForm.patchValue({
      artistid: data.artistid,
      albumid: data.albumid,
      songname: data.songname,
      songlyric: data.songlyric,
      songgenre: data.songgenre,
      songprice: data.songprice,
      songpublish: data.songpublish,
      songbuy: data.songbuy,         
      status: data.status
    });
  }

  saveSong(formdata:any): void {
    if (this.songForm.valid) {
      const theForm:any = this.songForm.value;
      if (this.songid !== '') {
        theForm.songid = this.songid;
      
      }
      this.songService.saveSong(this.userObj.userid,theForm.artistid, theForm.albumid,theForm)
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
          if (!this.songid) {
            this.songForm.reset();
          }
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }

  artistChangeEvent(selectedValue:any): void {
    var result = <String>selectedValue.target.value;
    // result is 1: artistid. Therefore need split
    var res = result.split(" ");
    this.getAlbumListbyArtist(this.userObj.userid,res[1]);
  }

}

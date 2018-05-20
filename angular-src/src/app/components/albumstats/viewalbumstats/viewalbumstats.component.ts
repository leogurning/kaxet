import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IArtist } from '../../../interface/artist';
import { IAlbum } from '../../../interface/album';
import { ISong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-viewalbumstats',
  templateUrl: './viewalbumstats.component.html',
  styleUrls: ['./viewalbumstats.component.css']
})
export class ViewalbumstatsComponent implements OnInit {
  artist: IArtist;
  album: IAlbum;
  artistid: String;
  albumid: String;
  userObj: any;
  songs: ISong[];
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qsongname: String;
  qalbumid: String;

  qpage: number;
  qsort: String;
  reportTitle: String;
  genre: IMsconfigGroupList[];
  sts: IMsconfigGroupList[];
  albumForm: FormGroup;
  
  private sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,    
    private msconfigService: MsconfigService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  albumgenre = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let albumid = params['id'];
        this.albumid = albumid;
      });
    console.log(this.albumid);  
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getAlbum(this.albumid);
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['label'] || '';
      this.qalbumid = params['albumid'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      this.qalbumid = this.albumid;
      payload.labelid = this.qlabelid;
      payload.albumid = this.qalbumid;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);
    });
    this.albumForm = this.fb.group({
      albumgenre: this.albumgenre,
      status: this.status
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'CSTATUS') {
            this.sts = data.data;
          }
          if (groupid == 'GENRE') {
            this.genre = data.data;
          }
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
          this.genre = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
      this.genre = [{code:'', value:'Error ms config list'}];
    });
  }

  getAlbum(id){
    this.albumService.getAlbum(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.album = data.data[0];
          this.getArtistName(this.album.artistid);
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Album id is incorrect in the URL');
        }
        
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  populateForm(data): void {
    this.albumForm.patchValue({
      albumgenre: data.albumgenre,
      status: data.status
    });
  }

  getArtistName(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.artist = data.data[0];
        } else {
          this.toastr.error('Artist id is incorrect in the URL');
        }
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  fetchReport(userid, formval) {
    this.songService.getSongListstats(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.songs = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qlabelid = formval.labelid;
        this.qalbumid = formval.albumid;
        this.reportTitle = 'Songs Result';
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  setPage(page): void {
    this.router.navigate([`viewalbumstats/${this.albumid}`],
      {
        queryParams: { labelid: this.qlabelid,
          albumid: this.qalbumid,
          page: page, 
          sortby: this.qsort }
      }
    );
  }

  createPager(number) {
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  sortSong(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate([`viewalbumstats/${this.albumid}`],
      {
        queryParams: { labelid: this.qlabelid,
          albumid: this.qalbumid,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['../albumstats'], { preserveQueryParams: true });
  }

}

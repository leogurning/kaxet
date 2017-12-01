import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-viewalbum',
  templateUrl: './viewalbum.component.html',
  styleUrls: ['./viewalbum.component.css']
})
export class ViewalbumComponent implements OnInit {
  artist: IArtist;
  album: IAlbum;
  artistid: String;
  albumid: String;
  userObj: any;
  songs: ISong[];
  totalrows: number;
  pgCounter: number;
  qsongname: String;
  qalbumid: String;

  qpage: number;
  qsort: String;
  reportTitle: String;

  private sub: Subscription;

  constructor(
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,    
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let albumid = params['id'];
        this.albumid = albumid;
      });
    console.log(this.albumid);  
    this.getAlbum(this.albumid);
    this.route.queryParams.forEach((params: Params) => {
      this.qalbumid = params['albumid'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      this.qalbumid = this.albumid;
      payload.albumid = this.qalbumid;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
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
        } else {
          this.toastr.error('Album id is incorrect in the URL');
        }
        
      }
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
    });
  }

  fetchReport(userid, formval) {
    this.songService.getSongs(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.songs = data.data.docs;
        this.totalrows = +data.data.total;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qalbumid = formval.albumid;
        this.reportTitle = 'Songs Result';
      }
    });
  }

  setPage(page): void {
    this.router.navigate([`viewalbum/${this.albumid}`],
      {
        queryParams: { albumid: this.qalbumid,
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
  
    this.router.navigate([`viewalbum/${this.albumid}`],
      {
        queryParams: { albumid: this.qalbumid,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/listalbum'], { preserveQueryParams: true });
  }


}

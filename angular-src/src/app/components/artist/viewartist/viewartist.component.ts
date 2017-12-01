import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IArtist } from '../../../interface/artist';
import { IAlbum } from '../../../interface/album';

@Component({
  selector: 'app-viewartist',
  templateUrl: './viewartist.component.html',
  styleUrls: ['./viewartist.component.css']
})
export class ViewartistComponent implements OnInit {
  artist: IArtist;
  artistid: String;
  userObj: any;
  albums: IAlbum[];
  private sub: Subscription;
  totalrows: number;
  pgCounter: number;
  qalbumname: String;
  qartistid: String;
  qalbumyear: String;
  qalbumgenre: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  reportTitle: String;

  constructor(
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let artistid = params['id'];
        this.artistid = artistid;
        this.getArtist(artistid);
      });
      this.route.queryParams.forEach((params: Params) => {
        this.qartistid = params['artistid'] || '';
        this.qpage = params['page'] || '';
        this.qsort = params['sortby'] || '';

        let payload: any = {};
        //this.qartistid = this.artistid;
        payload.artistid = this.qartistid;
        payload.page = this.qpage;
        payload.sortby = this.qsort;
        this.fetchReport(this.userObj.userid, payload);
      })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getArtist(id){
    this.artistService.getArtist(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.artist = data.data[0];
        } else {
          this.toastr.error('Artist id is incorrect in the URL');
        }
        
      }
    });
  }

  fetchReport(userid, formval) {
    this.albumService.getAlbums(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.albums = data.data.docs;
        this.totalrows = +data.data.total;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qartistid = formval.artistid;
        this.reportTitle = 'Albums Result';
      }
    });
  }

  setPage(page): void {
    this.router.navigate([`viewartist/${this.artistid}`],
      {
        queryParams: { artistid: this.qartistid,
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

  sortAlbum(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate([`viewartist/${this.artistid}`],
      {
        queryParams: { artistid: this.qartistid,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/listartist'], { preserveQueryParams: true });
  }
}

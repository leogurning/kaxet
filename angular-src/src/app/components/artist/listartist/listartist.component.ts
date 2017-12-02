import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IArtist } from '../../../interface/artist';

@Component({
  selector: 'app-listartist',
  templateUrl: './listartist.component.html',
  styleUrls: ['./listartist.component.css']
})
export class ListartistComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  artists: IArtist[];
  totalrows: number;
  pgCounter: number;
  qartistname: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: any = ['active', 'inactive'];
  loading = false;

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

  artistname = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('active', [Validators.nullValidator]);
  //startdt = new FormControl({value: '', disabled: true});

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      artistname: this.artistname,
      status: this.status
    });

    this.route.queryParams.forEach((params: Params) => {
      this.qartistname = params['artistname'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

//      if(this.qstatus !== '') {
        let payload: any = {};
        payload.status = this.qstatus;
//        if( (this.qartistname !== '')){
          payload.artistname = this.qartistname;
//        }
        payload.page = this.qpage;
        payload.sortby = this.qsort;
        this.fetchReport(this.userObj.userid, payload);

        this.reportForm.patchValue({
          artistname: this.qartistname,
          status: this.qstatus
        });
//      }
    })
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        this.fetchReport(this.userObj.userid, this.reportForm.value);
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.artistService.getArtists(userid, formval)
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
        this.artists = data.data.docs;
        this.totalrows = +data.data.total;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qartistname = formval.artistname;
        this.qstatus = formval.status;
        this.reportTitle = 'Artists Result';
        
        /* if (formval.status === 'active') {
          this.reportTitle = 'Selected active Artists'
        } else {
          this.reportTitle = 'Selected inactive Artists'
        } */
      }
    });
  }

  setPage(page): void {
    this.router.navigate(['listartist'],
      {
        queryParams: { artistname: this.qartistname, status: this.qstatus, page: page, sortby: this.qsort }
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

  showArtist(artistid): void {
    this.router.navigate([`viewartist/${artistid}`],
      {
        queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
      }
    );
  }

  confirmDel(idx: number, artistid: string) {
    var totalalbum: number;
    
    let payload: any = {};
    payload.artistid = artistid;
    this.albumService.getAlbums(this.userObj.userid, payload)
    .subscribe(data => {
      if (data.success === false) {
        this.toastr.error(data.message);
      } else {
        totalalbum = +data.data.total;
        if (totalalbum > 0) {
          this.toastr.warning('Can not delete artist. It already has albums.');
        } else {
          if(confirm('Do you really want to delete this record?')){
            this.artistService.deleteArtist(artistid)
            .subscribe(data => {
              if (data.success === false) {
                if (data.errcode){
                  this.authService.logout();
                  this.router.navigate(['login']);
                }
                this.toastr.error(data.message);
              } else {
                this.artists.splice(idx, 1);
                this.totalrows = this.totalrows - 1;
                this.toastr.success(data.message);
              }
            });
          }
        }
      }
    });    
  }

  editArtist(artistid): void {
    this.router.navigate([`editartist/${artistid}`],
      {
        queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
      }
    );
  }
  editArtistPhoto(artistid): void {
    this.router.navigate([`editartistphoto/${artistid}`],
      {
        queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
      }
    );
  }

  sortArtist(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['listartist'],
      {
        queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
      }
    );
  }

  toaddArtists(): void {
    this.router.navigate(['/addartist']);
  }
}

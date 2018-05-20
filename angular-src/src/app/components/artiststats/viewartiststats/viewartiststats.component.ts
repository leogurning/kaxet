import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IArtist } from '../../../interface/artist';
import { IAlbum } from '../../../interface/album';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-viewartiststats',
  templateUrl: './viewartiststats.component.html',
  styleUrls: ['./viewartiststats.component.css']
})
export class ViewartiststatsComponent implements OnInit {
  artist: IArtist;
  artistid: String;
  userObj: any;
  albums: IAlbum[];
  private sub: Subscription;
  totalrows: number;
  pgCounter: number;
  qalbumname: String;
  qlabelid: String;
  qartistid: String;
  qalbumyear: String;
  qalbumgenre: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  reportTitle: String;
  sts: IMsconfigGroupList[];
  artistForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private msconfigService: MsconfigService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  status = new FormControl('', [Validators.required]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let artistid = params['id'];
        this.artistid = artistid;
        this.getMsconfigGroupList('CSTATUS');
        this.getArtist(artistid);
      });
      this.route.queryParams.forEach((params: Params) => {
        this.qlabelid = params['label'] || '';
        this.qartistid = params['artistid'] || '';
        this.qpage = params['page'] || '';
        this.qsort = params['sortby'] || '';

        let payload: any = {};
        this.qartistid = this.artistid;
        payload.labelid = this.qlabelid;
        payload.artistid = this.qartistid;
        payload.page = this.qpage;
        payload.sortby = this.qsort;
        this.fetchReport(this.userObj.userid, payload);
      })
      this.artistForm = this.fb.group({
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
          this.sts = data.data;
        } else {
          this.sts = [{code:'', value:'Error ms config list'}];
        }
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
    });
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
          this.populateForm(data.data[0]);
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
  populateForm(data): void {
    this.artistForm.patchValue({
      status: data.status
    });
  }

  fetchReport(userid, formval) {
    this.albumService.getArtistAlbumsStats(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.albums = data.data;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qlabelid = formval.labelid;
        this.qartistid = formval.artistid;
        this.reportTitle = 'Albums Result';
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  setPage(page): void {
    this.router.navigate([`viewartiststats/${this.artistid}`],
      {
        queryParams: { labelid: this.qlabelid,
          artistid: this.qartistid,
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
  
    this.router.navigate([`viewartiststats/${this.artistid}`],
      {
        queryParams: { labelid: this.qlabelid, 
          artistid: this.qartistid,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  onBack(): void {
    this.router.navigate(['../artiststats'], { preserveQueryParams: true });
  }
}

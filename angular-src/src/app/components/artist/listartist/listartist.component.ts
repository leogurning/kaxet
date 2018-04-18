import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../../common/toastr.service'
import { ArtistService } from '../../../services/artist.service';
import { AlbumService } from '../../../services/album.service';
import { AuthService } from '../../../services/auth.service';
import { IArtist } from '../../../interface/artist';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { FiletransferService } from '../../../services/filetransfer.service';
import { Globals } from '../../../app.global';

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
  sts: IMsconfigGroupList[];
  artistuploadpath:string;
/*   sts: any = [  {id: '',desc: 'Select option'},
                {id: 'active', desc: 'active'}, 
                {id: 'inactive', desc: 'inactive'} 
              ]; */
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private ftService:FiletransferService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private globals: Globals
  ) { }

  artistname = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);
  //startdt = new FormControl({value: '', disabled: true});

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.artistuploadpath = this.globals.artistuploadpath;
    this.reportForm = this.fb.group({
      artistname: this.artistname,
      status: this.status
    });

    this.route.queryParams.forEach((params: Params) => {
      this.qartistname = params['artistname'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      this.getMsconfigGroupList('CSTATUS');
      let payload: any = {};
      payload.status = this.qstatus;
      payload.artistname = this.qartistname;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(this.userObj.userid, payload);
    })
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
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['listartist'],
        {
          queryParams: { artistname: this.reportForm.value.artistname, status: this.reportForm.value.status, page: 1, sortby: null }
        }
      );
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.artistService.getAggArtists(userid, formval)
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
        //this.artists = data.data.docs;
        this.artists = data.data;
        //this.totalrows = +data.data.total;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qartistname = formval.artistname;
        this.qstatus = formval.status;
        this.reportTitle = 'Artists Result';
        this.reportForm.patchValue({
          artistname: this.qartistname,
          status: this.qstatus
        });
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

  confirmDel(idx: number, artistid: string, artistname:string, artistphotoname:string) {
    var totalalbum: number;
    
    let payload: any = {};
    payload.artistid = artistid;
    this.loading = true;
    this.albumService.getArtistAlbums(this.userObj.userid, payload)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        totalalbum = +data.totalcount;
        if (totalalbum > 0) {
          this.toastr.warning('Can not delete artist. It already has albums.');
        } else {
          if(confirm('Do you really want to delete this artist: ' + artistname + ' record?')){
            let payloadData: any = {};
            payloadData.uploadpath = this.artistuploadpath;
            payloadData.filename = artistphotoname;
            this.loading = true;
            this.ftService.deleteInputFile(payloadData)
            .subscribe(data => {
               if (data.success === false) {
                this.loading = false;
                  if (data.errcode){
                    this.authService.logout();
                    this.router.navigate(['login']);
                  }
                  this.toastr.error(data.message);
                } else {
                  this.artistService.deleteArtist(artistid)
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
                      this.artists.splice(idx, 1);
                      this.totalrows = this.totalrows - 1;
                      this.toastr.success(data.message);
                    }
                  });
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

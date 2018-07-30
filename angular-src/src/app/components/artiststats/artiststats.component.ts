import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { UsermgtService } from '../../services/admin/usermgt.service';
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';
import { AuthService } from '../../services/auth.service';
import { IArtist } from '../../interface/artist';
import { IUserList } from '../../interface/user';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';
import { FiletransferService } from '../../services/filetransfer.service';
import { Globals } from '../../app.global';

@Component({
  selector: 'app-artiststats',
  templateUrl: './artiststats.component.html',
  styleUrls: ['./artiststats.component.css']
})
export class ArtiststatsComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  userlist: IUserList[];
  artists: IArtist[];
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qartistname: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  artistuploadpath:string;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
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

  labelid = new FormControl('',[Validators.nullValidator]);
  artistname = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.artistuploadpath = this.globals.artistuploadpath;
    this.reportForm = this.fb.group({
      labelid: this.labelid,
      artistname: this.artistname,
      status: this.status
    });
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['labelid'] || '';
      this.qartistname = params['artistname'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      this.getMsconfigGroupList('CSTATUS');
      this.getLabels();
      let payload: any = {};
      payload.labelid = this.qlabelid;
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
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
    });
  }
  getLabels(){
    this.labelmgtService.getLabelList().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.userlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.userlist = [{_id:'', name:'Error label list'}];
        }
      }
    },
    err => {
      this.userlist = [{_id:'', name:'Error label list'}];
    });
  }

  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.userObj.userid, this.reportForm.value);
        this.router.navigate(['artiststats'],
        {
          queryParams: { labelid: this.reportForm.value.labelid, artistname: this.reportForm.value.artistname, status: this.reportForm.value.status, page: 1, sortby: null }
        }
      );
    }
  }

  fetchReport(userid, formval) {
    this.loading = true;
    this.artistService.getAggArtiststats(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        //this.artists = data.data.docs;
        this.artists = data.data;
        //this.totalrows = +data.data.total;
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        
        this.qlabelid = formval.labelid;
        this.qartistname = formval.artistname;
        this.qstatus = formval.status;
        this.reportTitle = 'Artists Result';
        this.reportForm.patchValue({
          labelid: this.qlabelid,
          artistname: this.qartistname,
          status: this.qstatus
        });
        /* if (formval.status === 'active') {
          this.reportTitle = 'Selected active Artists'
        } else {
          this.reportTitle = 'Selected inactive Artists'
        } */
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }

  setPage(page): void {
    this.router.navigate(['artiststats'],
      {
        queryParams: { labelid: this.qlabelid, artistname: this.qartistname, status: this.qstatus, page: page, sortby: this.qsort }
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

  sortArtist(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['artiststats'],
      {
        queryParams: { labelid: this.qlabelid, artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
      }
    );
  }

  showArtist(artistid, labelid): void {
    //console.log(artistid + '  ' + labelid);
    this.router.navigate([`viewartiststats/${artistid}`],
      {
        queryParams: { label:labelid, 
          labelid: this.qlabelid, 
          artistname: this.qartistname, 
          status: this.qstatus, 
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

}

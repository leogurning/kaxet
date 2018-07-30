import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';
import { SongService } from '../../services/song.service';
import { AuthService } from '../../services/auth.service';
//import { IArtist } from '../../interface/artist';
//import { IAlbum } from '../../interface/album';
import { IUser } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { SongadminService } from '../../services/admin/songadmin.service';
import { SongpurchaseService } from '../../services/songpurchase.service';
import { MatDialog } from '@angular/material';
import { LabelbalancedialogComponent } from '../labelbalancedialog/labelbalancedialog.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //artists: IArtist[];
  //albums: IAlbum[];  
  user: IUser;
  private sub: Subscription;
  userObj: any;
  totalrows: number;
  totalalbums: number;
  totalsongs: number;
  totalpendinglabel: number = 0;
  totalpendingsong: number = 0;
  totalpendingpurchase: number = 0;

  constructor(
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private userService: UserService,
    private labelmgtService: UsermgtService,
    private songadminService: SongadminService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private songpurchaseService: SongpurchaseService,
    private dialog: MatDialog
  ) { }

  name: String;
  email: String;
  contactno: String;
  balance: Number;
  chart = [];
  //topsongs:any = [];

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.name = this.userObj.name;
    let payloadn: any = {};
    payloadn.status = 'STSACT';
    this.songService.getAggTopSongs(payloadn).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        //this.topsongs = data.data;
        let songbuy = data.data.map(res => res.songbuy);
        let songname = data.data.map(res => res.songname);
        //let labelnsong = data.data.map(res => res.labelnsong);
        Chart.defaults.global.defaultFontFamily = 'Arial';
        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontColor = '#333';
        //console.log(labelnsong);
        /* let formattedLabels = [];
        songname.forEach((res) => {
            let labelitem = formatLabel(res, 15);
            formattedLabels.push(labelitem);
        }); */
        this.chart = new Chart('canvas', {
          type: 'horizontalBar',
          data: {
            labels: songname,
            datasets: [
              {
                label: 'Total Purchased',
                data: songbuy,
                backgroundColor:'#fce86c',
                borderWidth: 1,
                borderColor: '#333',
                hoverBorderWidth: 2,
                hoverBorderColor: '#000'
              }
            ]
          },
          options: {
            scaleLabel: function(object) {
                          return "      " + object.value;
                        },
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: true,
              text: 'Global Top 10 Purchased Songs',
              fontSize: 14
            },
            legend: {
              display: false,
              position: 'right'
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: true,
                  drawBorder: true
                },
                ticks: {
                  stepSize: 1
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                }
              }]
            },
            layout: {
              padding: {
                  left: 40,
                  right: 0,
                  top: 0,
                  bottom: 0
              }
            }
            /* tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  //let songdtl: any = this.topsongs[tooltipItem.index];
                  //return this.topsongs[tooltipItem.index].artistname+":"+this.topsongs[tooltipItem.index].labelname;
                  return tooltipItem.index +'.' + tooltipItem.yLabel;
                }
              }
            } */
          }
        });
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
    this.userService.getUser(this.userObj.userid).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.user = data.data[0];
        this.email = this.user.email;
        this.contactno = this.user.contactno;
        this.balance = this.user.balance;
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });

    if (this.userObj.usertype === 'ADM') {
      this.fetchReportAdm(this.userObj.userid);
    }
    if (this.userObj.usertype === 'LBL') {
      let payload: any = {};
      payload.status = 'STSACT';
      this.fetchReport(this.userObj.userid, payload);
    }
  }

  fetchReport(userid, formval) {
    this.artistService.getArtistCount(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        //this.artists = data.data.docs;
        this.totalrows = +data.totalcount;
        this.albumService.getAlbumCount(userid, formval)
        .subscribe(data => {
          if (data.success === false) {
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            //this.albums = data.data.docs;
            this.totalalbums = +data.totalcount;
            this.songService.getSongCount(userid, formval)
            .subscribe(data => {
              if (data.success === false) {
                if (data.errcode){
                  this.authService.logout();
                  this.router.navigate(['errorpage']);
                }
                this.toastr.error(data.message);
              } else {
                this.totalsongs = +data.totalcount;
              }
            },
            err => {
              //console.log(err);
              this.toastr.error(err);
            });
          }
        },
        err => {
          //console.log(err);
          this.toastr.error(err);
        });
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
    //songpurchaseService.getPendingSongpurchaseCount
    let payload: any = {};
    payload.status = 'STSPEND';
    this.songpurchaseService.getPendingSongpurchaseCount(userid, payload)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.totalpendingpurchase = +data.totalcount;
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  fetchReportAdm (userid) {
    let payload: any = {};
    payload.status = 'STSPEND';
    payload.veremail = 'Y';
    payload.usertype = 'LBL';
    this.labelmgtService.getPendingLabelCount(userid, payload)
    .subscribe(data => { 
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.totalpendinglabel = +data.totalcount;
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
    let payloadsg: any = {};
    payloadsg.songpublish = 'N';
    this.songadminService.getPendingSongCount(userid, payloadsg)
    .subscribe(data => { 
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.totalpendingsong = +data.totalcount;
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }

  toArtists(): void {
    this.router.navigate(['/listartist']);
  }
  toAlbums(): void {
    this.router.navigate(['/listalbum']);
  }
  toSongs(): void {
    this.router.navigate(['/listsong']);
  }
  toLabelApv(): void {
    this.router.navigate(['/usermanagement']);
  }
  toSongMgt(): void {
    this.router.navigate(['/songmanagement']);
  }
  toPendingSongpurchase(): void {
    this.router.navigate(['/songpendingpurchase']);
  }

  viewlabelbalance(labelname):void {
    let dialogRef = this.dialog.open(LabelbalancedialogComponent, {
      disableClose: true,
      width: '400px',
      data: 'Hi ' + labelname + ', Please find below your balance.'
    });
  }
}

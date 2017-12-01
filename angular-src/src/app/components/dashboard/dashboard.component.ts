import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { ArtistService } from '../../services/artist.service';
import { AlbumService } from '../../services/album.service';
import { SongService } from '../../services/song.service';
import { AuthService } from '../../services/auth.service';
import { IArtist } from '../../interface/artist';
import { IAlbum } from '../../interface/album';
import { IUser } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  artists: IArtist[];
  albums: IAlbum[];  
  user: IUser;
  private sub: Subscription;
  userObj: any;
  totalrows: number;
  totalalbums: number;
  totalsongs: number;

  constructor(
    private authService: AuthService,
    private artistService: ArtistService,
    private albumService: AlbumService,
    private songService: SongService,
    private userService: UserService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  name: String;
  email: String;
  contactno: String;
  balance: Number;
  
  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.name = this.userObj.name;

    this.userService.getUser(this.userObj.userid).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.user = data.data[0];
        this.email = this.user.email;
        this.contactno = this.user.contactno;
        this.balance = this.user.balance;
      }
    });

    let payload: any = {};
    payload.status = 'active';
    this.fetchReport(this.userObj.userid, payload);
  }

  fetchReport(userid, formval) {
    this.artistService.getArtists(userid, formval)
    .subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        this.artists = data.data.docs;
        this.totalrows = +data.data.total;
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
            this.totalalbums = +data.data.total;
            this.songService.getSongs(userid, formval)
            .subscribe(data => {
              if (data.success === false) {
                if (data.errcode){
                  this.authService.logout();
                  this.router.navigate(['login']);
                }
                this.toastr.error(data.message);
              } else {
                this.totalsongs = +data.data.total;
              }
            });
          }
        });
      }
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
}

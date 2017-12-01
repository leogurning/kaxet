import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IAggSong } from '../../../interface/song';

@Component({
  selector: 'app-viewsong',
  templateUrl: './viewsong.component.html',
  styleUrls: ['./viewsong.component.css']
})
export class ViewsongComponent implements OnInit {
  song: IAggSong;
  private sub: Subscription;

  constructor(    
    private authService: AuthService,
    private songService: SongService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let songid = params['id'];
        this.getSong(songid);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSong(id){
    this.songService.getSongAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.song = data.data[0];
        } else {
          this.toastr.error('Song id is incorrect in the URL');
        }
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/listsong'], { preserveQueryParams: true });
  }
}

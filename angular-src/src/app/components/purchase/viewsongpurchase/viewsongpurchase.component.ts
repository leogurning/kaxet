import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IAggSong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-viewsongpurchase',
  templateUrl: './viewsongpurchase.component.html',
  styleUrls: ['./viewsongpurchase.component.css']
})
export class ViewsongpurchaseComponent implements OnInit {
  userObj: any;
  song: IAggSong;
  genre: IMsconfigGroupList[];
  sts: IMsconfigGroupList[];
  songForm: FormGroup;
  qsrcpg: string;

  private sub: Subscription;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private songService: SongService,
    private msconfigService: MsconfigService,    
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  songgenre = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);
  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let songid = params['id'];
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
        this.getSong(songid);
      });
    this.route.queryParams.forEach((params: Params) => {
        this.qsrcpg = params['srcpg'] || '';
      });
    this.songForm = this.fb.group({
      songgenre: this.songgenre,
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
        }
      }
    });
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
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Song id is incorrect in the URL');
        }
      }
    });
  }

  populateForm(data): void {
    this.songForm.patchValue({
      songgenre: data.songgenre,
      status: data.status
    });
  }

  onBack(): void {
    if (this.qsrcpg === 'pend') {
      this.router.navigate(['/songpendingpurchase'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'comp') {
      this.router.navigate(['/songcompletepurchase'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'tranx') {
      this.router.navigate(['../transaction'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'stats') {
      this.router.navigate(['/songpurchasestats'], { preserveQueryParams: true });  
    } else {
      this.authService.logout();
      this.router.navigate(['login']);
      this.toastr.error('Incorrect param in the URL');
    }
  }
}

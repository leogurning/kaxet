import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { SongpurchaseService } from '../../../services/songpurchase.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-viewpurchase',
  templateUrl: './viewpurchase.component.html',
  styleUrls: ['./viewpurchase.component.css']
})
export class ViewpurchaseComponent implements OnInit {
  userObj: any;
  purchase: any;
  purchaseForm: FormGroup;
  private sub: Subscription;
  qsrcpg: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private songpurchaseService: SongpurchaseService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let songpurchaseid = params['id'];
        this.getSongpurchase(songpurchaseid);
      });
    this.route.queryParams.forEach((params: Params) => {
        this.qsrcpg = params['srcpg'] || '';
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getSongpurchase(id){
    let payload: any = {};
    payload.songpurchaseid = id;
    this.songpurchaseService.getSongpurchaseAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.purchase = data.data[0];
        } else {
          this.toastr.error('Song purchase id is incorrect in the URL');
        }
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }
  onBack(): void {
    if (this.qsrcpg === 'pend') {
      this.router.navigate(['/songpendingpurchase'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'comp') {
      this.router.navigate(['/songcompletepurchase'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'tranx') {
      this.router.navigate(['/transaction'], { preserveQueryParams: true });
    } else if (this.qsrcpg === 'stats') {
      this.router.navigate(['/songpurchasestats'], { preserveQueryParams: true }); 
    } else if (this.qsrcpg === 'tranxstats') {
      this.router.navigate(['/transactionstats'], { preserveQueryParams: true }); 
    } else {
      this.authService.logout();
      this.router.navigate(['login']);
      this.toastr.error('Incorrect param in the URL');
    }
  }
}

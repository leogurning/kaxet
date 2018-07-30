import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../../services/user.service';
import { NotifService } from '../../../services/notif.service';
import { ToastrService } from '../../../common/toastr.service';
import { Globals } from '../../../app.global';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-postresetpasswd',
  templateUrl: './postresetpasswd.component.html',
  styleUrls: ['./postresetpasswd.component.css']
})
export class PostresetpasswdComponent implements OnInit {
  private sub: Subscription;
  loading = false;
  hash: String;
  hasl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifService: NotifService,
    private toastr: ToastrService,
    private userService: UserService,
    private globals: Globals,
    public nav: NavbarService
  ) { }
  kaxeturl:String;

  ngOnInit() {
    this.nav.disableLink();
    this.kaxeturl = this.globals.kaxeturl;
    this.loading = true;
    this.sub = this.route.queryParams.subscribe(
      params => {
        let phash = params['id'];
        this.hasl = params['hasl'];
        this.notifService.pageverification(phash)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.toastr.error(data.message);
            this.router.navigate(['../errorpage']);
          } else {
            //this.loading = false;
            this.hash = data.hash;
            this.userService.updatehash(this.hash)
            .subscribe(data => {
              if (data.success === false) {
                this.loading = false;
                this.toastr.error(data.message);
                this.router.navigate(['../errorpage']);
              } else {
                this.loading = false;
                this.toastr.success(data.message);
              }
            },
            err => {
              this.loading = false;
              //console.log(err);
              this.toastr.error(err);
              this.router.navigate(['../errorpage']);
            });
          }
        },
        err => {
          this.loading = false;
          this.toastr.error(err);
          this.router.navigate(['../errorpage']);
          //console.log(err);
          
        }); 
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onLogin(): void {
    window.open(this.kaxeturl.toString());
  }
}

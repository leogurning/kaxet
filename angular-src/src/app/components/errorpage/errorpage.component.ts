import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Globals } from '../../app.global';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor(private authService: AuthService, private globals: Globals,
              public nav: NavbarService) { }
  kaxeturl: String;

  ngOnInit() {
    this.nav.disableLink();
    this.kaxeturl = this.globals.kaxeturl;
    this.authService.logout();
  }
  onLogin(): void {
    window.open(this.kaxeturl.toString());
  }
}

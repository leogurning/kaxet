import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';
import { Globals } from '../../app.global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  qhashid: string;
  constructor(public authService: AuthService,
              private route: ActivatedRoute,
              public nav: NavbarService,
              private globals: Globals) 
              { }
  homepath: String;
  ngOnInit() {
    this.homepath = this.globals.kaxeturl;
    this.route.queryParams.forEach((params: Params) => {
      this.qhashid = params['id'] || '';
    });
  }

}

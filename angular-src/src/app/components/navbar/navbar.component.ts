import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  qhashid: string;
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              public nav: NavbarService) 
              { }

  ngOnInit() {

    this.route.queryParams.forEach((params: Params) => {
      this.qhashid = params['id'] || '';
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-postregistered',
  templateUrl: './postregistered.component.html',
  styleUrls: ['./postregistered.component.css']
})
export class PostregisteredComponent implements OnInit {
  private sub: Subscription;
  uname: String;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let name = params['nm'];
        this.uname = name;
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }
}

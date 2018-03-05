import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-postregistered',
  templateUrl: './postregistered.component.html',
  styleUrls: ['./postregistered.component.css']
})
export class PostregisteredComponent implements OnInit {
  private sub: Subscription;
  uname: String;
  remarks: IMsconfigGroupList[];
  csemail: IMsconfigGroupList;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private msconfigService: MsconfigService
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let name = params['nm'];
        this.uname = name;
      });
    this.getMsconfigGroupList('REMARKS');
    this.getMsconfigVal('CSEML','EMAIL');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.remarks = data.data;
        } else {
          this.remarks = [{code:'', value:'Error ms config list'}];
        }
      }
    });
    
  }
  getMsconfigVal(code, groupid){
    this.msconfigService.getMsconfigvalue(code, groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.csemail = data.data[0];
        } else {
          this.csemail = {code:'', value:'Error ms config list'};
        }
      }
    });
  }
  
  onLogin(): void {
    this.router.navigate(['/login']);
  }
}

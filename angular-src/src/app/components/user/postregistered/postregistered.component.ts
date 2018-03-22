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
  qemailto: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private msconfigService: MsconfigService
              ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let param = params['nm'];
        let strlist = param.split("?");
        this.uname = strlist[0];
        this.qemailto = strlist[1];
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
  getremarksvalue(premarks) : String {
    var result: String = '';

    for (let oremark of this.remarks) {
      if (premarks === oremark.code){
        result = oremark.value;
     }
    }
    return result;
  }

  onLogin(): void {
    this.router.navigate(['/login']);
  }
}

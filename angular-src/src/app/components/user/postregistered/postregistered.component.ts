import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { NavbarService } from '../../../services/navbar.service';
import { Globals } from '../../../app.global';

@Component({
  selector: 'app-postregistered',
  templateUrl: './postregistered.component.html',
  styleUrls: ['./postregistered.component.css']
})
export class PostregisteredComponent implements OnInit {
  private sub: Subscription;
  uname: String;
  //remarks: IMsconfigGroupList[];
  csemail: IMsconfigGroupList;
  remarks3: IMsconfigGroupList;
  remarks4: IMsconfigGroupList;
  qemailto: String;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private msconfigService: MsconfigService,
              public nav: NavbarService,
              private globals: Globals
              ) { }
  kaxeturl:String;

  ngOnInit() {
    this.nav.disableLink();
    this.kaxeturl = this.globals.kaxeturl;
    this.sub = this.route.params.subscribe(
      params => {
        let param = params['nm'];
        let strlist = param.split("?");
        this.uname = strlist[0];
        this.qemailto = strlist[1];
      });
    //this.getMsconfigGroupList('REMARKS');
    this.getMsconfigVal('REMARKS3','REMARKS');
    this.getMsconfigVal('REMARKS4','REMARKS');
    this.getMsconfigVal('CSEML','EMAIL');
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
/*   getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.remarks = data.data;
        } else {
          this.remarks = [{code:'', value:'Empty list...'}];
        }
      }
    },
    err => {
      this.remarks = [{code:'', value:'Error ms config list'}];
      //console.log(err);
    });
    
  } */
  getMsconfigVal(code, groupid){
    this.msconfigService.getMsconfigvalue(code, groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (code === 'CSEML') {
            this.csemail = data.data[0];
          } else if (code === 'REMARKS3') {
            this.remarks3 = data.data[0];
          } else if (code === 'REMARKS4') {
            this.remarks4 = data.data[0];
          }
        } else {
          this.csemail = {code:'', value:'Empty list...'};
          this.remarks3 = {code:'', value:'Empty list...'};
          this.remarks4 = {code:'', value:'Empty list...'};
        }
      }
    },
    err => {
      this.csemail = {code:'', value:'Error ms config list'};
      this.remarks3 = {code:'', value:'Error ms config list'};
      this.remarks4 = {code:'', value:'Error ms config list'};
      //console.log(err);
    });
  }
/*   getremarksvalue(premarks) : String {
    var result: String = '';

    for (let oremark of this.remarks) {
      if (premarks === oremark.code){
        result = oremark.value;
     }
    }
    return result;
  } */

  onLogin(): void {
    //this.router.navigate(['/login']);
    window.open(this.kaxeturl.toString());
  }
}

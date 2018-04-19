import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastrService } from '../../../common/toastr.service'
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';
import { NotifService } from '../../../services/notif.service';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailverificationComponent implements OnInit {
  private sub: Subscription;
  remarks: IMsconfigGroupList[];
  csemail: IMsconfigGroupList;
  username: string;
  name: string;
  email: string;
  utype: string;
  remarks1: IMsconfigGroupList;
  remarks2: IMsconfigGroupList;
  loading = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private notifService: NotifService,
              private msconfigService: MsconfigService,
              private toastr: ToastrService,) 
              { }

  ngOnInit() {
    this.loading = true;
    this.sub = this.route.queryParams.subscribe(
      params => {
        let hash = params['id'];
        let postind = params['post'];
        //this.getMsconfigGroupList('REMARKS');
        this.notifService.recvemailverification(hash)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            this.router.navigate(['login']);
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.username = data.message.username;
            this.name = data.message.name;
            this.email = data.message.email;
            this.utype = data.message.usertype;
            if (postind === 'Y') {
              this.remarks1 = {code:'0', value:"Your email has been verified."};
              this.remarks2 = {code:'0', value:"If you have any queries, please send email to "};
            } else {
              this.getMsconfigVal('REMARKS1','REMARKS');
              this.getMsconfigVal('REMARKS2','REMARKS');
            }
          }
        });    
      });

    this.getMsconfigVal('CSEML','EMAIL');

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  /* getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.remarks = data.data;
        } else {
          this.remarks = [{code:'', value:'Error ms config list'}];
        }
      }
    });
    
  } */
  getMsconfigVal(code, groupid){
    this.msconfigService.getMsconfigvalue(code, groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (code === 'CSEML') {
            this.csemail = data.data[0];
          } else if (code === 'REMARKS1') {
            this.remarks1 = data.data[0];
          } else if (code === 'REMARKS2') {
            this.remarks2 = data.data[0];
          }
          
        } else {
          this.csemail = {code:'', value:'Error ms config list'};
          this.remarks1 = {code:'', value:'Error ms config list'};
          this.remarks2 = {code:'', value:'Error ms config list'};
        }
      }
    });
  }
  /* getremarksvalue(premarks) : String {
    var result: String = '';

    for (let oremark of this.remarks) {
      if (premarks === oremark.code){
        result = oremark.value;
     }
    }
    return result;
  } */
}

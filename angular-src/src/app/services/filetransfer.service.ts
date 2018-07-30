import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globals } from '../app.global';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FiletransferService {
  public jwtToken: string;
  public filetransferurl: String;

  constructor(private http: Http, private globals: Globals) { 
    this.filetransferurl = globals.filetransferurl;
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
  }
  uploadInputFile(oFile){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    //console.log(oFile.getAll('artistimage'));
    return this.http.post(`${this.filetransferurl}/api/inputfileupload`, oFile, options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteInputFile(oFile){
    const theUser:any = JSON.parse(localStorage.getItem('currentUser'));
    if (theUser) {  
      this.jwtToken = theUser.token;
    }    
    let headers = new Headers();
    headers.append('Authorization', `${this.jwtToken}`);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.filetransferurl}/api/inputfiledelete`, oFile, options)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    let errMsg = error.status ? `${error.status} - ${error.statusText}`:'Ooops sorry...a server error occured. Please try again shortly.';
    //console.error(errMsg);
    return Observable.throw( errMsg );
  }
}

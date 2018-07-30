import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    artistuploadpath = 'kaxet/images/artists/';
    albumuploadpath = 'kaxet/images/albums/';
    configuploadpath = 'kaxet/images/genres/';
    prvwuploadpath = 'kaxet/previews/';
    songuploadpath = 'kaxet/songs/';
    //adminurl: String = 'http://localhost:2002';
    adminurl: String = 'https://kxadminp-kaxetprd.4b63.pro-ap-southeast-2.openshiftapps.com';
    //notifurl: String = 'http://localhost:2004';
    notifurl: String = 'https://kxnotifp-kaxetprd.4b63.pro-ap-southeast-2.openshiftapps.com';
    //filetransferurl: String = 'http://localhost:2005';
    filetransferurl: String = 'https://kxfiletrfp-kaxetprd.4b63.pro-ap-southeast-2.openshiftapps.com';
    kaxeturl: String = 'https://www.kaxet.com';
    //kaxeturl: String = 'http://localhost:2000';
}
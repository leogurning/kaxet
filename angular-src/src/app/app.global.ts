import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    artistuploadpath = 'images/artists/';
    albumuploadpath = 'images/albums/';
    configuploadpath = 'images/genres/';
    prvwuploadpath = 'previews/';
    songuploadpath = 'songs/';
    //adminurl: String = 'http://localhost:2002';
    adminurl: String = 'https://apikxadmin-dot-kaxetd.appspot.com';
    //notifurl: String = 'http://localhost:2004';
    notifurl: String = 'https://apikxnotif-dot-kaxetd.appspot.com';
    //filetransferurl: String = 'http://localhost:2005';
    filetransferurl: String = 'https://apikxfiletrf-dot-kaxetd.appspot.com';
}
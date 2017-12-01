export interface ISong {
    labelid: String;
    artistid: String;
    albumid: String;
    songname: String;
    songlyric: String;
    songgenre: String;
    songrate: Number;
    songprice: Number;
    songprvwpath: String;
    songprvwname: String;
    songfilepath: String;
    songfilename: String;
    songpublish: String;
    songbuy: Number;
    status: String;
    objartistid: String;
    objalbumid: String;
}

export interface IAggSong {
    labelid: String;
    artistid: String;
    albumid: String;
    songname: String;
    songlyric: String;
    songgenre: String;
    songprice: Number;
    songprvwpath: String;
    songprvwname: String;
    songfilepath: String;
    songfilename: String;
    songpublish: String;
    songbuy: Number;
    status: String;
    objartistid: String;
    objalbumid: String;
    artist: String;
    album: String;
    albumyear: String;
}

export interface ISongList {
    _id: String;
    songname: String;
}
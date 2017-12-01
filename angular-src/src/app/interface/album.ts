export interface IAlbum {
    labelid: String;
    artistid: String;
    albumname: String;
    albumyear: String;
    albumgenre: String;
    albumprice: Number;
    albumphotopath: String;
    albumphotoname: String;
    status: String;
}

export interface IAggAlbum {
    labelid: String;
    artistid: String;
    albumname: String;
    albumyear: String;
    albumgenre: String;
    albumprice: Number;
    albumphotopath: String;
    albumphotoname: String;
    status: String;
    objartistid: String;
    artist: String;
}

export interface IAlbumList {
    _id: String;
    albumname: String;
}
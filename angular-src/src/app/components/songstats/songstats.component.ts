import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationStart, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { AuthService } from '../../services/auth.service';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { SongadminService } from '../../services/admin/songadmin.service';
import { IAggSong } from '../../interface/song';
import { IUserList } from '../../interface/user';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';
import { SongService } from '../../services/song.service';
import { Globals } from '../../app.global';

@Component({
  selector: 'app-songstats',
  templateUrl: './songstats.component.html',
  styleUrls: ['./songstats.component.css']
})
export class SongstatsComponent implements OnInit {
  reportForm: FormGroup
  userObj: any;
  reportTitle: String;
  userlist: IUserList[];
  songs: IAggSong[];
  totalrows: number;
  pgCounter: number;
  qlabelid: String;
  qsongname: String;
  qartistname: String;
  qalbumname: String;
  qalbumyear: String;
  qsonggenre: String;
  qsongpublish: String;
  qsongbuy: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  ynlist: IMsconfigGroupList[];

  currsongpublish: String;
  currsongbuy: Number;
  loading = false;
  prvwuploadpath: string;
  songuploadpath: string;
  navigationSubscription;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private labelmgtService: UsermgtService,
    private msconfigService: MsconfigService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private songadminService: SongadminService,
    private globals: Globals,
    private songService: SongService
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.pauseanyAudiostream();
        this.pauseanyAudiocontext();
        this.resetAudioElement();
      }
      if (e instanceof NavigationStart) {
        this.pauseanyAudiostream();
        this.pauseanyAudiocontext();
        this.resetAudioElement();
      }
    });
  }
  songname = new FormControl('',[Validators.nullValidator]);
  labelid = new FormControl('',[Validators.nullValidator]);
  artistname = new FormControl('',[Validators.nullValidator]);
  albumname = new FormControl('',[Validators.nullValidator]);  
  albumyear = new FormControl('',[Validators.nullValidator]);
  songgenre = new FormControl('',[Validators.nullValidator]);
  songpublish = new FormControl('',[Validators.nullValidator]);
  songbuy = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);

  private audioContext: AudioContext;
  private audio: HTMLAudioElement;
  private audioBuffer: AudioBuffer;
  private audiobufferSource: AudioBufferSourceNode;
  //private state = {playing:false, loading:false};
  private state: any = [];
  private audiotag = false;
  private currentPlaying = -1;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.prvwuploadpath = this.globals.prvwuploadpath;
    this.songuploadpath = this.globals.songuploadpath;
    this.reportForm = this.fb.group({
      labelid: this.labelid,
      songname: this.songname,
      artistname: this.artistname,
      albumname: this.albumname,
      albumyear: this.albumyear,
      songgenre: this.songgenre,
      songpublish: this.songpublish,
      songbuy: this.songbuy,
      status: this.status
    });
    this.getMsconfigGroupList('CSTATUS');
    this.getMsconfigGroupList('GENRE');
    this.getMsconfigGroupList('YRN');
    this.getLabels();
    this.route.queryParams.forEach((params: Params) => {
      this.qlabelid = params['labelid'] || '';
      this.qsongname = params['songname'] || '';
      this.qartistname = params['artistname'] || '';
      this.qalbumname = params['albumname'] || '';
      this.qalbumyear = params['albumyear'] || '';
      this.qsonggenre = params['songgenre'] || '';
      this.qsongpublish = params['songpublish'] || '';
      this.qsongbuy = params['songbuy'] || '';
      this.qstatus = params['status'] || '';
      this.qpage = params['page'] || '';
      this.qsort = params['sortby'] || '';

      let payload: any = {};
      payload.status = this.qstatus;
      payload.labelid = this.qlabelid;
      payload.artistname = this.qartistname;
      payload.albumname = this.qalbumname;
      payload.songname = this.qsongname;
      payload.albumyear = this.qalbumyear;
      payload.songgenre = this.qsonggenre;
      payload.songpublish = this.qsongpublish;
      payload.songbuy = this.qsongbuy;
      payload.page = this.qpage;
      payload.sortby = this.qsort;
      this.fetchReport(payload);

      this.reportForm.patchValue({
        labelid: this.qlabelid,
        songname: this.qsongname,
        artistname: this.qartistname,
        albumname: this.qalbumname,
        albumyear: this.qalbumyear,
        songgenre: this.qsonggenre,
        songpublish: this.qsongpublish,
        songbuy: this.qsongbuy,
        status: this.qstatus
      });
    })
    try {
      this.audioContext = new AudioContext();
      if (this.audioContext) {
        this.audioBuffer = null;
        this.audiobufferSource = null;
      }     
    } catch (error) {
      this.audiotag = true;
      this.audio = null;
    }
  }
  ngOnDestroy() {
    this.resetAudioElement();
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  resetAudioElement(){
    this.audioContext = null;
    this.audioBuffer = null;
    this.audiobufferSource = null;
    this.audio = null;
    this.state = [];
  }
  fetchSong(audiourl): Promise<any> {
    return fetch(audiourl)
        .then(response => response.arrayBuffer())
        .then(buffer => {
            return new Promise((resolve, reject) => {
                this.audioContext.decodeAudioData(
                    buffer,
                    resolve,
                    reject
                );
            })
        });
  }

  toggleAudio(selectedItem, audiourl){
    if (this.audiotag) {
      //this.toastr.error("Error. Your browser doesn't support Web Audio API.");
      if (!this.state[selectedItem].playing) {
        this.playAudiostream(selectedItem, audiourl);
      } else {
        this.pauseAudiostream(selectedItem);
      }      
    } else {
      if (!this.state[selectedItem].playing) {
        this.playAudiocontext(selectedItem, audiourl);
      } else {
        this.pauseAudiocontext(selectedItem);
      }
    }
  }
  stopAllplaying(selectedItem) {
    let curState = true;
    if (this.state[this.currentPlaying]) {
      curState = this.state[this.currentPlaying].playing;
    }
    if (this.currentPlaying != selectedItem && curState) {
      if (this.state[this.currentPlaying]) {
        this.state[this.currentPlaying].playing = false;
      }
      if (this.audiotag) {
        if (this.audio) { this.audio.pause(); }
        this.audio = null;
      } else {
        if (this.audiobufferSource) { this.audiobufferSource.stop(); }
        this.audioBuffer = null;
        this.audiobufferSource = null;
      }
      
    }    
  }
  playAudiocontext(selectedItem, audiourl) {
    
    this.stopAllplaying(selectedItem);
    
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    if (this.audioBuffer) {
      this.state[selectedItem].playing = true;
      this.audiobufferSource = null;
      this.audiobufferSource = this.audioContext.createBufferSource();
      this.audiobufferSource.buffer = this.audioBuffer;
      this.audiobufferSource.connect(this.audioContext.destination);              
      this.audiobufferSource.start(0);    
    } else {
      this.state[selectedItem].loading = true;
      this.fetchSong(audiourl)
          .then(audioBuffer => {
              this.state[selectedItem].loading = false;
              this.state[selectedItem].playing = true;
              this.audioBuffer = audioBuffer;
              this.audiobufferSource = this.audioContext.createBufferSource();
              this.audiobufferSource.buffer = this.audioBuffer;
              this.audiobufferSource.connect(this.audioContext.destination);        
              this.audiobufferSource.start(0);
          })
          .catch(error => { this.toastr.error(error); });
    }
    this.currentPlaying = selectedItem;
  }
  playAudiostream(selectedItem, audiourl) {
    
    this.stopAllplaying(selectedItem);
    
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = audiourl;
      this.state[selectedItem].loading = true;
      this.audio.load();
      this.state[selectedItem].loading = false;
      //this.audio.play();
      var promise = this.audio.play();          
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          this.toastr.error('Can not play audio file. File type is not supported to be played in this browser.');
        });
      }
      this.state[selectedItem].playing = true;
    } else {
      this.state[selectedItem].playing = true;
      //this.audio.play();
      var promise = this.audio.play();          
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          this.toastr.error('Can not play audio file. File type is not supported to be played in this browser.');
        });
      }
    }
    this.currentPlaying = selectedItem;
  }

  pauseAudiocontext(selectedItem) {
    if (this.audioBuffer && this.audiobufferSource) {
      this.state[selectedItem].playing = false;
      this.audiobufferSource.stop();    
    }
  }
  pauseAudiostream(selectedItem) {
    if (this.audio && this.audio.src) {
      this.state[selectedItem].playing = false;
      this.audio.pause();   
    }
  }
  pauseanyAudiocontext() {
    if (this.audioBuffer && this.audiobufferSource) {
      this.audiobufferSource.stop();    
    }
  }
  pauseanyAudiostream() {
    if (this.audio && this.audio.src) {
      this.audio.pause();   
    }
  }
  getMsconfigGroupList(groupid){
    this.msconfigService.getMsconfigbygroup(groupid).subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          if (groupid == 'CSTATUS') {
            this.sts = data.data;
          }
          if (groupid == 'GENRE') {
            this.genre = data.data;
          }
          if (groupid == 'YRN') {
            this.ynlist = data.data;
          }
        } 
      } 
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getLabels(){
    this.labelmgtService.getLabelList().subscribe(data => {
      if (data.success === true) {
        if (data.data[0]) {
          this.userlist = data.data;
          //console.log(this.artistlist);
        } else {
          this.userlist = [{_id:'', name:'Empty list...'}];
        }
      }
    },
    err => {
      this.loading = false;
      this.userlist = [{_id:'', name:'Error label list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }
  getReport(formdata:any): void {
    if (this.reportForm.valid) {
        //this.fetchReport(this.reportForm.value);
        this.router.navigate(['songstats'],
        {
          queryParams: {
            labelid: this.reportForm.value.labelid,
            songname: this.reportForm.value.songname,
            artistname: this.reportForm.value.artistname,
            albumname: this.reportForm.value.albumname,
            albumyear: this.reportForm.value.albumyear,
            songgenre: this.reportForm.value.songgenre,
            songpublish: this.reportForm.value.songpublish,
            songbuy: this.reportForm.value.songbuy,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      );
    }
  }
  fetchReport(formval) {
    this.loading = true;
    this.songadminService.getAggSongs(formval)
    .subscribe(data => {
      if (data.success === false) {
        this.loading = false;
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        this.loading = false;
        this.songs = data.data;
        this.songs.forEach((res) => {
          let stateitem = {playing:false, loading:false};
          this.state.push(stateitem);
        });
        this.totalrows = +data.totalcount;
        this.pgCounter = Math.floor((this.totalrows + 10 - 1) / 10);
        this.qlabelid = formval.labelid;
        this.qsongname = formval.songname;
        this.qartistname = formval.artistname;
        this.qalbumname = formval.albumname;
        this.qalbumyear = formval.albumyear;
        this.qsonggenre = formval.songgenre;
        this.qsongpublish = formval.songpublish;
        this.qsongbuy = formval.songbuy;
        this.qstatus = formval.status;
        this.reportTitle = 'Songs Result';
        
        this.reportForm.patchValue({
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus
        });
      }
    },
    err => {
      this.loading = false;
      //console.log(err);
      this.toastr.error(err);
    });
  }
  setPage(page): void {
    this.router.navigate(['songstats'],
      {
        queryParams: {
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: page, 
          sortby: this.qsort }
      }
    );
  }
  createPager(number) {
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  sortSong(sortby): void {
    if (this.qsort === ''){
      this.qsort = sortby;
    } else if (this.qsort.indexOf('-') > -1 ) {
      this.qsort = sortby;
    } else {
      this.qsort = '-' + sortby;
    }
  
    this.router.navigate(['songstats'],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  showSong(songid): void {
    this.router.navigate([`viewsongstats/${songid}`],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          songpublish: this.qsongpublish,
          songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }
  unpublishSong(songid, songname, songpublish): void {
    
    this.loading = true;
    if (songpublish === 'N') {
      this.loading = false;
      this.toastr.warning('This song is already still unpublished.');
    } else {
      if(confirm('Do you really want to unpublish this song: ' + songname + ' record?')){
        this.pauseanyAudiostream();
        this.pauseanyAudiocontext();
        this.resetAudioElement();
        let payload: any = {};
        payload.status = 'STSACT';
        this.songadminService.cancelpublishSong(songid, payload)
        .subscribe(data => {
          if (data.success === false) {
            this.loading = false;
            if (data.errcode){
              this.authService.logout();
              this.router.navigate(['errorpage']);
            }
            this.toastr.error(data.message);
          } else {
            this.loading = false;
            this.fetchReport(this.reportForm.value);
            this.toastr.success(data.message);
          }
        },
        err => {
          this.loading = false;
          //console.log(err);
          this.toastr.error(err);
        });
      } else {
        this.loading = false;
      }
    }
  }
  
  confirmDel(idx: number, songid: string, songpublish, songbuy, songname, songprvwname, songfilename) {
    
    //if (songbuy > 0) {
    if(confirm('Do you really want to delete this song: ' + songname + ' record?')){
      this.pauseanyAudiostream();
      this.pauseanyAudiocontext();
      this.resetAudioElement();
      this.loading = true;
      let payloadData: any = {};
      payloadData.labelid = this.userObj.userid;
      payloadData.songprvwname = songprvwname;
      payloadData.songfilename = songfilename;  
      payloadData.prvwuploadpath = this.prvwuploadpath; 
      payloadData.songuploadpath = this.songuploadpath;  
      this.songService.pubdeleteSong(songid, payloadData)
      .subscribe(data => {
        if (data.success === false) {
          this.loading = false;
          if (data.errcode){
            this.authService.logout();
            this.router.navigate(['errorpage']);
          }
          this.toastr.error(data.message);
        } else {
          this.loading = false;
          this.songs.splice(idx, 1);
          this.totalrows = this.totalrows - 1;
          this.toastr.success(data.message);
        }
      },
      err => {
        this.loading = false;
        //console.log(err);
        this.toastr.error(err);
      });
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params,NavigationStart,NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from '../../common/toastr.service'
import { AuthService } from '../../services/auth.service';
import { UsermgtService } from '../../services/admin/usermgt.service';
import { SongadminService } from '../../services/admin/songadmin.service';
import { IAggSong } from '../../interface/song';
import { IUserList } from '../../interface/user';
import { MsconfigService } from '../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../interface/msconfig';


@Component({
  selector: 'app-songmgt',
  templateUrl: './songmgt.component.html',
  styleUrls: ['./songmgt.component.css']
})
export class SongmgtComponent implements OnInit {
  navigationSubscription;
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
  //qsongbuy: String;
  qstatus: String;
  qpage: number;
  qsort: String;
  sts: IMsconfigGroupList[];
  genre: IMsconfigGroupList[];
  ynlist: IMsconfigGroupList[];

  currsongpublish: String;
  //currsongbuy: Number;
  loading = false;

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
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.pauseanyAudiostream();
        this.pauseanyAudiocontext();
        this.resetAudioElement();
        this.ngOnInit();
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
  //songbuy = new FormControl('',[Validators.nullValidator]);
  status = new FormControl('', [Validators.nullValidator]);
  
  private audioContext: AudioContext;
  private audio: HTMLAudioElement;
  private audioBuffer: AudioBuffer;
  private audiobufferSource: AudioBufferSourceNode;
  //private state = {playing:false, loading:false};
  private state: any = [];
  private audiotag = false;
  private currentPlaying = -1;
  private previousaudiotype: string = '';

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.reportForm = this.fb.group({
      labelid: this.labelid,
      songname: this.songname,
      artistname: this.artistname,
      albumname: this.albumname,
      albumyear: this.albumyear,
      songgenre: this.songgenre,
      //songbuy: this.songbuy,
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
      //this.qsongbuy = params['songbuy'] || '';
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
      //payload.songbuy = this.qsongbuy;
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
        //songbuy: this.qsongbuy,
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
  toggleAudio(selectedItem, audiotype, audiourl){
    console.log(this.audiotag);
    if (this.audiotag) {
      //this.toastr.error("Error. Your browser doesn't support Web Audio API.");
      if (audiotype === 'prvw') {
        if (!this.state[selectedItem].playingprvw) {
          this.playAudiostream(selectedItem, audiotype, audiourl);
        } else {
          this.pauseAudiostream(selectedItem, audiotype);
        }      
      } else if (audiotype === 'song') {
        if (!this.state[selectedItem].playingsong) {
          this.playAudiostream(selectedItem, audiotype, audiourl);
        } else {
          this.pauseAudiostream(selectedItem, audiotype);
        }      
      }
    } else {
      if (audiotype === 'prvw') {
        if (!this.state[selectedItem].playingprvw) {
          this.playAudiocontext(selectedItem, audiotype, audiourl);
        } else {
          this.pauseAudiocontext(selectedItem, audiotype);
        }      
      } else if (audiotype === 'song') {
        if (!this.state[selectedItem].playingsong) {
          this.playAudiocontext(selectedItem, audiotype, audiourl);
        } else {
          this.pauseAudiocontext(selectedItem, audiotype);
        }   
      }

    }
  }
  /* stopAllplaying(selectedItem, audiotype) {
    let curState = true;
    
    if (this.state[this.currentPlaying]) {
      curState = this.state[this.currentPlaying].playingprvw || this.state[this.currentPlaying].playingsong;
    }
    if (this.currentPlaying != selectedItem && curState) {
      if (this.state[this.currentPlaying]) {
        this.state[this.currentPlaying].playingprvw = false;
        this.state[this.currentPlaying].playingsong = false;
      }
      if (this.audiotag) {
        if (this.audio) { this.audio.pause(); }
        this.audio = null;
      } else {
        if (this.audiobufferSource) { this.audiobufferSource.stop(); }
        this.audioBuffer = null;
        this.audiobufferSource = null;
      }
      
    } else {
      if (this.currentPlaying == selectedItem && curState) {
        if (audiotype === 'prvw') {
          if (this.state[this.currentPlaying]) {
            if (this.state[this.currentPlaying].playingsong) {
              if (this.audiotag) {
                if (this.audio) { this.audio.pause(); }
                this.audio = null;
              } else {
                if (this.audiobufferSource) { this.audiobufferSource.stop(); }
                this.audioBuffer = null;
                this.audiobufferSource = null;
              }
              this.state[this.currentPlaying].playingsong = false;
            }          
          }
        } else if (audiotype === 'song') {
          if (this.state[this.currentPlaying]) {
            if (this.state[this.currentPlaying].playingprvw) {
              if (this.audiotag) {
                if (this.audio) { this.audio.pause(); }
                this.audio = null;
              } else {
                if (this.audiobufferSource) { this.audiobufferSource.stop(); }
                this.audioBuffer = null;
                this.audiobufferSource = null;
              }
              this.state[this.currentPlaying].playingprvw = false;
            }          
          }
        }
      }
    }    

  } */
  stopAllplaying(selectedItem, audiotype) {
    let curState = true;
    
    if (this.state[this.currentPlaying]) {
      curState = this.state[this.currentPlaying].playingprvw || this.state[this.currentPlaying].playingsong;
    }
    if (curState) {
      if (this.currentPlaying != selectedItem) {
        if (this.state[this.currentPlaying]) {
          this.state[this.currentPlaying].playingprvw = false;
          this.state[this.currentPlaying].playingsong = false;
        }
        if (this.audiotag) {
          if (this.audio) { this.audio.pause(); }
          this.audio = null;
        } else {
          if (this.audiobufferSource) { this.audiobufferSource.stop(); }
          this.audioBuffer = null;
          this.audiobufferSource = null;
        }
        
      } else { //if (this.currentPlaying == selectedItem)
        
          if (audiotype === 'prvw') {
            if (this.state[this.currentPlaying]) {
              if (this.state[this.currentPlaying].playingsong) {
                if (this.audiotag) {
                  if (this.audio) { this.audio.pause(); }
                  this.audio = null;
                } else {
                  if (this.audiobufferSource) { this.audiobufferSource.stop(); }
                  this.audioBuffer = null;
                  this.audiobufferSource = null;
                }
                this.state[this.currentPlaying].playingsong = false;
              }          
            }
          } else if (audiotype === 'song') {
            if (this.state[this.currentPlaying]) {
              if (this.state[this.currentPlaying].playingprvw) {
                if (this.audiotag) {
                  if (this.audio) { this.audio.pause(); }
                  this.audio = null;
                } else {
                  if (this.audiobufferSource) { this.audiobufferSource.stop(); }
                  this.audioBuffer = null;
                  this.audiobufferSource = null;
                }
                this.state[this.currentPlaying].playingprvw = false;
              }          
            }
          }
        
      }   
    } else { // curState both false for prvw and song
      if (this.currentPlaying == selectedItem && this.previousaudiotype == audiotype) {
        //no action
      } else {
        //reset
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
     

  }
  playAudiocontext(selectedItem, audiotype, audiourl) {
    
    this.stopAllplaying(selectedItem, audiotype);
    
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    if (this.audioBuffer) {
      if (audiotype === 'prvw') {
        this.state[selectedItem].playingprvw = true;
      } else if (audiotype === 'song') {
        this.state[selectedItem].playingsong = true;
      }   
      this.audiobufferSource = null;
      this.audiobufferSource = this.audioContext.createBufferSource();
      this.audiobufferSource.buffer = this.audioBuffer;
      this.audiobufferSource.connect(this.audioContext.destination);              
      this.audiobufferSource.start(0);    
    } else {
      if (audiotype === 'prvw') {
        this.state[selectedItem].loadingprvw = true;
      } else if (audiotype === 'song') {
        this.state[selectedItem].loadingsong = true;
      }
      this.fetchSong(audiourl)
          .then(audioBuffer => {
              if (audiotype === 'prvw') {
                this.state[selectedItem].loadingprvw = false;
                this.state[selectedItem].playingprvw = true;
              } else if (audiotype === 'song') {
                this.state[selectedItem].loadingsong = false;
                this.state[selectedItem].playingsong = true;
              }   
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
  playAudiostream(selectedItem, audiotype, audiourl) {
    
    this.stopAllplaying(selectedItem, audiotype);
    
    if (!this.audio) {
      console.log('create new audio');
      try {
        this.audio = new Audio();
        if (this.audio) {
          this.audio.src = audiourl;
          if (audiotype === 'prvw') {
            this.state[selectedItem].loadingprvw = true;
          } else if (audiotype === 'song') {
            this.state[selectedItem].loadingsong = true;
          }
          this.audio.load();
          if (audiotype === 'prvw') {
            this.state[selectedItem].loadingprvw = false;
          } else if (audiotype === 'song') {
            this.state[selectedItem].loadingsong = false;
          }   
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
          if (audiotype === 'prvw') {
            this.state[selectedItem].playingprvw = true;
          } else if (audiotype === 'song') {
            this.state[selectedItem].playingsong = true;
          }
        } else {
          this.toastr.error('Error creating Audio element.');  
        }
      } catch (error) {
        this.toastr.error(error);
      }
    } else {
      if (audiotype === 'prvw') {
        this.state[selectedItem].playingprvw = true;
      } else if (audiotype === 'song') {
        this.state[selectedItem].playingsong = true;
      } 
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
  pauseAudiocontext(selectedItem, audiotype) {
    if (this.audioBuffer && this.audiobufferSource) {
      if (audiotype === 'prvw') {
        this.state[selectedItem].playingprvw = false;
        this.previousaudiotype = 'prvw';
      } else if (audiotype === 'song') {
        this.state[selectedItem].playingsong = false;
        this.previousaudiotype = 'song';
      }
      this.audiobufferSource.stop();    
    }
  }
  pauseAudiostream(selectedItem, audiotype) {
    if (this.audio && this.audio.src) {
      if (audiotype === 'prvw') {
        this.state[selectedItem].playingprvw = false;
        this.previousaudiotype = 'prvw';
      } else if (audiotype === 'song') {
        this.state[selectedItem].playingsong = false;
        this.previousaudiotype = 'song';
      }
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
        } else {
          if (groupid == 'CSTATUS') this.sts = [{code:'', value:'Empty list...'}];
          if (groupid == 'GENRE') this.genre = [{code:'', value:'Empty list...'}];
          if (groupid == 'YRN') this.ynlist = [{code:'', value:'Empty list...'}];
        }
      } else {
        this.sts = [{code:'', value:'Error ms config list'}];
        this.genre = [{code:'', value:'Error ms config list'}];
        this.ynlist = [{code:'', value:'Error ms config list'}];
      }
    },
    err => {
      this.loading = false;
      this.sts = [{code:'', value:'Error ms config list'}];
      this.genre = [{code:'', value:'Error ms config list'}];
      this.ynlist = [{code:'', value:'Error ms config list'}];
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
      } else {
        this.userlist = [{_id:'', name:'Error label list'}];
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
        this.router.navigate(['songmanagement'],
        {
          queryParams: {
            labelid: this.reportForm.value.labelid,
            songname: this.reportForm.value.songname,
            artistname: this.reportForm.value.artistname,
            albumname: this.reportForm.value.albumname,
            albumyear: this.reportForm.value.albumyear,
            songgenre: this.reportForm.value.songgenre,
            //songbuy: this.reportForm.value.songbuy,
            status: this.reportForm.value.status,
            page: 1, 
            sortby: null }
        }
      );
    }
  }

  fetchReport(formval) {
    this.loading = true;
    this.songadminService.getAggSongsnonpublish(formval)
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
          let stateitem = {playingprvw:false, playingsong:false, loadingprvw:false, loadingsong:false};
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
        //this.qsongbuy = formval.songbuy;
        this.qstatus = formval.status;
        this.reportTitle = 'Songs Result';
        
        this.reportForm.patchValue({
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
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
    this.router.navigate(['songmanagement'],
      {
        queryParams: {
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
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
  
    this.router.navigate(['songmanagement'],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  showSong(songid): void {
    this.router.navigate([`viewsong/${songid}`],
      {
        queryParams: { 
          labelid: this.qlabelid,
          songname: this.qsongname,
          artistname: this.qartistname,
          albumname: this.qalbumname,
          albumyear: this.qalbumyear,
          songgenre: this.qsonggenre,
          //songbuy: this.qsongbuy,
          status: this.qstatus,
          page: this.qpage || 1, 
          sortby: this.qsort }
      }
    );
  }

  publishSong(songid, songname, songpublish): void {
    
    this.loading = true;
    if (songpublish === 'Y') {
      this.loading = false;
      this.toastr.warning('This song has already been published.');
    } else {
      if(confirm('Do you really want to publish this song: ' + songname + ' record?')){
        this.pauseanyAudiostream();
        this.pauseanyAudiocontext();
        this.resetAudioElement();
        let payload: any = {};
        payload.status = 'STSACT';
        this.songadminService.publishSong(songid, payload)
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

  unpublishSong(songid, songname, songpublish): void {
    
    this.loading = true;
    if (songpublish === 'N') {
      this.loading = false;
      this.toastr.warning('This song is already still unpublished.');
    } else {
      if(confirm('Do you really want to unpublish this song: ' + songname + ' record?')){
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

}

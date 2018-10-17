import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { SongService } from '../../../services/song.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from '../../../common/toastr.service';
import { Subscription } from 'rxjs/Subscription';
import { IAggSong } from '../../../interface/song';
import { MsconfigService } from '../../../services/admin/msconfig.service';
import { IMsconfigGroupList } from '../../../interface/msconfig';

@Component({
  selector: 'app-viewsong',
  templateUrl: './viewsong.component.html',
  styleUrls: ['./viewsong.component.css']
})
export class ViewsongComponent implements OnInit {
  userObj: any;
  song: IAggSong;
  genre: IMsconfigGroupList[];
  sts: IMsconfigGroupList[];
  songForm: FormGroup;

  private sub: Subscription;
  navigationSubscription;
  constructor(    
    private fb: FormBuilder,
    private authService: AuthService,
    private songService: SongService,
    private msconfigService: MsconfigService,    
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.pausePrvw();
        this.pausePrvwAudio();
        this.pauseSong();
        this.pauseSongAudio();
        this.resetAudioElement();
      }
      if (e instanceof NavigationStart) {
        this.pausePrvw();
        this.pausePrvwAudio();
        this.pauseSong();
        this.pauseSongAudio();
        this.resetAudioElement();
      }
    });
  }

  songgenre = new FormControl('', [Validators.required]);
  status = new FormControl('', [Validators.required]);

  private audioContext: AudioContext;
  private prvwaudio: HTMLAudioElement;
  private songaudio: HTMLAudioElement;
  private prvwBuffer: AudioBuffer;
  private songBuffer: AudioBuffer;
  private prvwbufferSource: AudioBufferSourceNode;
  private songbufferSource: AudioBufferSourceNode;
  public state = {prvwplaying:false, songplaying:false, 
                   loadingprvw:false, loadingsong:false};
  private audiotag = false;

  ngOnInit() {
    this.userObj =  this.authService.currentUser;
    this.sub = this.route.params.subscribe(
      params => {
        let songid = params['id'];
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
        this.getSong(songid);
      });
    this.songForm = this.fb.group({
      songgenre: this.songgenre,
      status: this.status
    });  

    try {
      this.audioContext = new AudioContext();
      if (this.audioContext) {
        this.prvwBuffer = null;
        this.songBuffer = null;
        this.prvwbufferSource = null;
        this.songbufferSource = null;
      }     
    } catch (error) {
      this.audiotag = true;
      this.prvwaudio = new Audio();
      this.songaudio = new Audio();
    }
  }
  ngOnDestroy() {
    this.resetAudioElement();
    this.sub.unsubscribe();
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }

  }
  resetAudioElement(){
    this.audioContext = null;
    this.prvwBuffer = null;
    this.songBuffer = null;
    this.prvwbufferSource = null;
    this.songbufferSource = null;
    this.prvwaudio = null;
    this.songaudio = null;
  }
  fetchSong(songurl): Promise<any> {
    return fetch(songurl)
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
  togglePrvw(audiourl){
    if (this.audiotag) {
      //this.toastr.error("Error. Your browser doesn't support Web Audio API.");
      if (!this.state.prvwplaying) {
        this.playPrvwAudio(audiourl);
      } else {
        this.pausePrvwAudio();
      }      
    } else {
      if (!this.state.prvwplaying) {
        this.playPrvw(audiourl);
      } else {
        this.pausePrvw();
      }
    }
  }
  toggleSong(audiourl){
    if (this.audiotag) {
      //this.toastr.error("Error. Your browser doesn't support Web Audio API.");
      if (!this.state.songplaying) {
        this.playSongAudio(audiourl);
      } else {
        this.pauseSongAudio();
      }      
    } else {
      if (!this.state.songplaying) {
        this.playSong(audiourl);
      } else {
        this.pauseSong();
      }
    }
  }
  stopAllplaying(type) {

    if ( type === 'song') {
        if (this.songBuffer && this.songbufferSource) {
          this.state.songplaying = false;
          this.songbufferSource.stop();
        }
    } else if ( type === 'prvw') {
      if (this.prvwBuffer && this.prvwbufferSource) {
        this.state.prvwplaying = false;
        this.prvwbufferSource.stop();
      }
    }
  }
  stopAllplayingaudio(type) {
    
      if ( type === 'song') {
        if (this.songaudio && this.songaudio.src) {
          this.state.songplaying = false;
          this.songaudio.pause();
        }
      } else if ( type === 'prvw') {
        if (this.prvwaudio && this.prvwaudio.src) {
          this.state.prvwplaying = false;
          this.prvwaudio.pause();
        }
      }
  }

  playPrvw(audiourl) {
    if (this.state.songplaying) {
      this.stopAllplaying('song');
    }
    if (this.prvwBuffer) {
      this.state.prvwplaying = true;
      this.prvwbufferSource = null;
      this.prvwbufferSource = this.audioContext.createBufferSource();
      this.prvwbufferSource.buffer = this.prvwBuffer;
      this.prvwbufferSource.connect(this.audioContext.destination);              
      this.prvwbufferSource.start(0);    
    } else {
      this.state.loadingprvw = true;
      this.fetchSong(audiourl)
          .then(audioBuffer => {
              this.state.loadingprvw = false;
              this.state.prvwplaying = true;
              this.prvwBuffer = audioBuffer;
              this.prvwbufferSource = this.audioContext.createBufferSource();
              this.prvwbufferSource.buffer = this.prvwBuffer;
              this.prvwbufferSource.connect(this.audioContext.destination);        
              this.prvwbufferSource.start(0);
          })
          .catch(error => { this.toastr.error(error); });
    }
  }
  playPrvwAudio(audiourl) {
    if (this.state.songplaying) {
      this.stopAllplayingaudio('song');
    }
    if (this.prvwaudio.src === '') {
      this.prvwaudio.src = audiourl;
      this.state.loadingprvw = true;
      this.prvwaudio.load();
      this.state.loadingprvw = false;
      //this.prvwaudio.play();
      var promise = this.prvwaudio.play();          
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          this.toastr.error('Can not play audio file. File type is not supported to be played in this browser.');
        });
      }
      this.state.prvwplaying = true;
    } else {
      this.state.prvwplaying = true;
      //this.prvwaudio.play();
      var promise = this.prvwaudio.play();          
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
  }
  playSong(audiourl) {
    if (this.state.prvwplaying) {
      this.stopAllplaying('prvw');
    }
    if (this.songBuffer) {
      this.state.songplaying = true;
      this.songbufferSource = null;
      this.songbufferSource = this.audioContext.createBufferSource();
      this.songbufferSource.buffer = this.songBuffer;
      this.songbufferSource.connect(this.audioContext.destination);              
      this.songbufferSource.start(0);    
    } else {
      this.state.loadingsong = true;
      this.fetchSong(audiourl)
          .then(audioBuffer => {
              this.state.loadingsong = false;
              this.state.songplaying = true;
              this.songBuffer = audioBuffer;
              this.songbufferSource = this.audioContext.createBufferSource();
              this.songbufferSource.buffer = this.songBuffer;
              this.songbufferSource.connect(this.audioContext.destination);        
              this.songbufferSource.start(0);
          })
          .catch(error => { this.toastr.error(error); });
    }
  }
  playSongAudio(audiourl) {
    if (this.state.prvwplaying) {
      this.stopAllplayingaudio('prvw');
    }
    if (this.songaudio.src === '') {
      this.songaudio.src = audiourl;
      this.state.loadingsong = true;
      this.songaudio.load();
      this.state.loadingsong = false;
      //this.songaudio.play();
      var promise = this.songaudio.play();          
      if (promise !== undefined) {
        promise.then(_ => {
          // Autoplay started!
        }).catch(error => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
          this.toastr.error('Can not play audio file. File type is not supported to be played in this browser.');
        });
      }
      this.state.songplaying = true;
    } else {
      this.state.songplaying = true;
      //this.songaudio.play();
      var promise = this.songaudio.play();          
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
  }
  pausePrvw() {
    if (this.prvwBuffer && this.prvwbufferSource) {
      this.state.prvwplaying = false;
      this.prvwbufferSource.stop();    
    }
  }
  pausePrvwAudio() {
    if (this.prvwaudio && this.prvwaudio.src) {
      this.state.prvwplaying = false;
      this.prvwaudio.pause();   
    }
  }
  pauseSong() {
    if (this.songBuffer && this.songbufferSource) {
      this.state.songplaying = false;
      this.songbufferSource.stop();    
    }
  }
  pauseSongAudio() {
    if (this.songaudio && this.songaudio.src) {
      this.state.songplaying = false;
      this.songaudio.pause();   
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
        } else {
          this.sts = [{code:'', value:'Empty list...'}];
          this.genre = [{code:'', value:'Empty list...'}];
        }
      } else {
        this.sts = [{code:'', value:'Error ms config list'}];
        this.genre = [{code:'', value:'Error ms config list'}];
      }
    },
    err => {
      this.sts = [{code:'', value:'Error ms config list'}];
      this.genre = [{code:'', value:'Error ms config list'}];
      //console.log(err);
      this.toastr.error(err);
    });
  }

  getSong(id){
    this.songService.getSongAgg(id).subscribe(data => {
      if (data.success === false) {
        if (data.errcode){
          this.authService.logout();
          this.router.navigate(['errorpage']);
        }
        this.toastr.error(data.message);
      } else {
        if (data.data[0]) {
          this.song = data.data[0];
          this.populateForm(data.data[0]);
        } else {
          this.toastr.error('Song id is incorrect in the URL');
        }
      }
    },
    err => {
      //console.log(err);
      this.toastr.error(err);
    });
  }

  populateForm(data): void {
    this.songForm.patchValue({
      songgenre: data.songgenre,
      status: data.status
    });
  }

  onBack(): void {
    if (this.userObj.usertype === 'ADM') {
      this.router.navigate(['/songmanagement'], { preserveQueryParams: true });
    } else if (this.userObj.usertype === 'LBL') {
      this.router.navigate(['/listsong'], { preserveQueryParams: true });
    }  else {
      this.authService.logout();
      this.router.navigate(['errorpage']);
      this.toastr.error('Incorrect param in the URL');
    }
  }
}

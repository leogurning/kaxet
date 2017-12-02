import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

/* Services Modules */
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { ArtistService } from './services/artist.service';
import { AlbumService } from './services/album.service';
import { SongService } from './services/song.service';

/* common Modules */
import { ToastrService } from './common/toastr.service';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { PasswordComponent } from './components/user/password/password.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LogoutComponent } from './components/user/logout.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditartistComponent } from './components/artist/editartist/editartist.component';
import { ListartistComponent } from './components/artist/listartist/listartist.component';
import { ViewartistComponent } from './components/artist/viewartist/viewartist.component';
import { AddartistComponent } from './components/artist/addartist/addartist.component';
import { EditartistphotoComponent } from './components/artist/editartistphoto/editartistphoto.component';
import { AddalbumComponent } from './components/album/addalbum/addalbum.component';
import { ListalbumComponent } from './components/album/listalbum/listalbum.component';
import { ViewalbumComponent } from './components/album/viewalbum/viewalbum.component';
import { EditalbumComponent } from './components/album/editalbum/editalbum.component';
import { EditalbumphotoComponent } from './components/album/editalbumphoto/editalbumphoto.component';
import { AddsongComponent } from './components/song/addsong/addsong.component';
import { ListsongComponent } from './components/song/listsong/listsong.component';
import { EditsongfilesComponent } from './components/song/editsongfiles/editsongfiles.component';
import { ViewsongComponent } from './components/song/viewsong/viewsong.component';
import { EditsongComponent } from './components/song/editsong/editsong.component';

const appRoutes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGuard]},
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path:'password', component:PasswordComponent, canActivate:[AuthGuard]},
  {path:'report', component:DashboardComponent, canActivate:[AuthGuard]},
  {path: 'addartist', canActivate: [ AuthGuard], component: AddartistComponent },
  {path: 'editartist/:id', canActivate: [ AuthGuard], component: EditartistComponent },
  {path: 'listartist', canActivate: [ AuthGuard], component: ListartistComponent },
  {path: 'editartistphoto/:id', component:EditartistphotoComponent, canActivate:[AuthGuard]},
  {path: 'viewartist/:id', canActivate: [ AuthGuard], component: ViewartistComponent },
  {path: 'addalbum', canActivate: [ AuthGuard], component: AddalbumComponent },
  {path: 'listalbum', canActivate: [ AuthGuard], component: ListalbumComponent },
  {path: 'viewalbum/:id', canActivate: [ AuthGuard], component: ViewalbumComponent },
  {path: 'editalbum/:id', canActivate: [ AuthGuard], component: EditalbumComponent },
  {path: 'editalbumphoto/:id', component:EditalbumphotoComponent, canActivate:[AuthGuard]},
  {path: 'addsong', canActivate: [ AuthGuard], component: AddsongComponent },
  {path: 'listsong', canActivate: [ AuthGuard], component: ListsongComponent },
  {path: 'editsongfiles/:id', component:EditsongfilesComponent, canActivate:[AuthGuard]},
  {path: 'viewsong/:id', canActivate: [ AuthGuard], component: ViewsongComponent },
  {path: 'editsong/:id', canActivate: [ AuthGuard], component: EditsongComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    ProfileComponent,
    LogoutComponent,
    AboutComponent,
    DashboardComponent,
    EditartistComponent,
    ListartistComponent,
    ViewartistComponent,
    AddartistComponent,
    EditartistphotoComponent,
    AddalbumComponent,
    ListalbumComponent,
    ViewalbumComponent,
    EditalbumComponent,
    EditalbumphotoComponent,
    AddsongComponent,
    ListsongComponent,
    EditsongfilesComponent,
    ViewsongComponent,
    EditsongComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#00008B', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ToastrService, 
    AuthService, 
    AuthGuard, 
    UserService, 
    ArtistService, 
    AlbumService, 
    SongService, 
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

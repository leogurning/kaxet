import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material'
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

/* Global Variables */
import {Globals} from './app.global';

/* Services Modules */
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { ArtistService } from './services/artist.service';
import { AlbumService } from './services/album.service';
import { SongService } from './services/song.service';
import { UsermgtService } from './services/admin/usermgt.service';
import { SongadminService } from './services/admin/songadmin.service';
import { MsconfigService } from './services/admin/msconfig.service';
import { NotifService } from './services/notif.service';
import { FiletransferService } from './services/filetransfer.service';
import { SongpurchaseService } from './services/songpurchase.service';
import { TransactionService } from './services/transaction.service';
import { ActivitylogService } from './services/activitylog.service';
import { NavbarService } from './services/navbar.service';
import { TrfbalanceService } from './services/trfbalance.service';
import { TrfbalancemgtService } from './services/admin/trfbalancemgt.service';
import { AdjustmentService } from './services/admin/adjustment.service';

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
import { PostregisteredComponent } from './components/user/postregistered/postregistered.component';
import { UsermgtComponent } from './components/usermgt/usermgt.component';
import { ViewlabelComponent } from './components/usermgt/viewlabel/viewlabel.component';
import { UpdateemailComponent } from './components/user/updateemail/updateemail.component';
import { EmailverificationComponent } from './components/user/emailverification/emailverification.component';
import { SongmgtComponent } from './components/songmgt/songmgt.component';
import { AddconfigComponent } from './components/msconfig/addconfig/addconfig.component';
import { AddgroupComponent } from './components/msconfig/addgroup/addgroup.component';
import { ListconfigComponent } from './components/msconfig/listconfig/listconfig.component';
import { ViewconfigComponent } from './components/msconfig/viewconfig/viewconfig.component';
import { EditconfigfileComponent } from './components/msconfig/editconfigfile/editconfigfile.component';
import { EditconfigComponent } from './components/msconfig/editconfig/editconfig.component';
import { KxInfoDialogComponent } from './components/kx-info-dialog/kx-info-dialog.component';
import { ForgotpasswordComponent } from './components/user/forgotpassword/forgotpassword.component';
import { ResetuserpasswdComponent } from './components/user/resetuserpasswd/resetuserpasswd.component';
import { ArtiststatsComponent } from './components/artiststats/artiststats.component';
import { AlbumstatsComponent } from './components/albumstats/albumstats.component';
import { SongstatsComponent } from './components/songstats/songstats.component';
import { LabelstatsComponent } from './components/labelstats/labelstats.component';
import { ViewlabelstatsComponent } from './components/labelstats/viewlabelstats/viewlabelstats.component';
import { ViewartiststatsComponent } from './components/artiststats/viewartiststats/viewartiststats.component';
import { ViewalbumstatsComponent } from './components/albumstats/viewalbumstats/viewalbumstats.component';
import { ViewsongstatsComponent } from './components/songstats/viewsongstats/viewsongstats.component';
import { SongpendingpurchaseComponent } from './components/purchase/songpendingpurchase/songpendingpurchase.component';
import { SongcompletepurchaseComponent } from './components/purchase/songcompletepurchase/songcompletepurchase.component';
import { ViewsongpurchaseComponent } from './components/purchase/viewsongpurchase/viewsongpurchase.component';
import { ViewpurchaseComponent } from './components/purchase/viewpurchase/viewpurchase.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { SongpurchasestatsComponent } from './components/purchase/songpurchasestats/songpurchasestats.component';
import { TransactionstatsComponent } from './components/transactionstats/transactionstats.component';
import { LabelbalancedialogComponent } from './components/labelbalancedialog/labelbalancedialog.component';
import { ActivitylogComponent } from './components/activitylog/activitylog.component';
import { ActivitylogstatsComponent } from './components/activitylogstats/activitylogstats.component';
import { PostresetpasswdComponent } from './components/user/postresetpasswd/postresetpasswd.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { AddtrfbalancereqComponent } from './components/trfbalancereq/addtrfbalancereq/addtrfbalancereq.component';
import { ListtrfbalancereqComponent } from './components/trfbalancereq/listtrfbalancereq/listtrfbalancereq.component';
import { ViewtrfbalancereqComponent } from './components/trfbalancereq/viewtrfbalancereq/viewtrfbalancereq.component';
import { PendingtrfbalancereqComponent } from './components/trfbalancereq/pendingtrfbalancereq/pendingtrfbalancereq.component';
import { UpdatetrfbalancereqComponent } from './components/trfbalancereq/updatetrfbalancereq/updatetrfbalancereq.component';
import { AdmlisttransferbalancereqComponent } from './components/trfbalancereq/admlisttransferbalancereq/admlisttransferbalancereq.component';
import { EditposttransferbalancereqComponent } from './components/trfbalancereq/editposttransferbalancereq/editposttransferbalancereq.component';
import { AddadjustmentComponent } from './components/adjustment/addadjustment/addadjustment.component';
import { ListadjustmentComponent } from './components/adjustment/listadjustment/listadjustment.component';
import { ViewadjustmentComponent } from './components/adjustment/viewadjustment/viewadjustment.component';
import { EditadjustmentComponent } from './components/adjustment/editadjustment/editadjustment.component';
import { PendingadjustmentComponent } from './components/adjustment/pendingadjustment/pendingadjustment.component';
import { OthertransactionComponent } from './components/othertransaction/othertransaction.component';
import { OthertransactionstatsComponent } from './components/othertransactionstats/othertransactionstats.component';

const appRoutes: Routes = [
  {path: '',redirectTo:'about',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'postregistered/:nm', component:PostregisteredComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'logout', component:LogoutComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path:'profile', component:ProfileComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path:'password', component:PasswordComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path:'report', component:DashboardComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'addartist', canActivate: [ AuthGuard], component: AddartistComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editartist/:id', canActivate: [ AuthGuard], component: EditartistComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listartist', canActivate: [ AuthGuard], component: ListartistComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editartistphoto/:id', component:EditartistphotoComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'viewartist/:id', canActivate: [ AuthGuard], component: ViewartistComponent ,runGuardsAndResolvers: 'always'},
  {path: 'addalbum', canActivate: [ AuthGuard], component: AddalbumComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listalbum', canActivate: [ AuthGuard], component: ListalbumComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewalbum/:id', canActivate: [ AuthGuard], component: ViewalbumComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editalbum/:id', canActivate: [ AuthGuard], component: EditalbumComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editalbumphoto/:id', component:EditalbumphotoComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'addsong', canActivate: [ AuthGuard], component: AddsongComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listsong', canActivate: [ AuthGuard], component: ListsongComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editsongfiles/:id', component:EditsongfilesComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'viewsong/:id', canActivate: [ AuthGuard], component: ViewsongComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editsong/:id', canActivate: [ AuthGuard], component: EditsongComponent ,runGuardsAndResolvers: 'always'},
  {path: 'usermanagement', canActivate: [ AuthGuard], component: UsermgtComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewlabel/:id', canActivate: [ AuthGuard], component: ViewlabelComponent ,runGuardsAndResolvers: 'always'},
  {path: 'updateemail', canActivate: [ AuthGuard], component: UpdateemailComponent ,runGuardsAndResolvers: 'always'},
  {path: 'verify', component: EmailverificationComponent },
  {path: 'songmanagement', canActivate: [ AuthGuard], component: SongmgtComponent ,runGuardsAndResolvers: 'always'},
  {path: 'addconfig', canActivate: [ AuthGuard], component: AddconfigComponent ,runGuardsAndResolvers: 'always'},
  {path: 'addgroup', canActivate: [ AuthGuard], component: AddgroupComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listconfig', canActivate: [ AuthGuard], component: ListconfigComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewconfig/:id', canActivate: [ AuthGuard], component: ViewconfigComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editconfigfile/:id', component:EditconfigfileComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'editconfig/:id', component:EditconfigComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'resetpassword', component: ResetuserpasswdComponent },
  {path: 'labelstats', canActivate: [ AuthGuard], component: LabelstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'artiststats', canActivate: [ AuthGuard], component: ArtiststatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'albumstats', canActivate: [ AuthGuard], component: AlbumstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'songstats', canActivate: [ AuthGuard], component: SongstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewlabelstats/:id', canActivate: [ AuthGuard], component: ViewlabelstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewartiststats/:id', canActivate: [ AuthGuard], component: ViewartiststatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewalbumstats/:id', canActivate: [ AuthGuard], component: ViewalbumstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewsongstats/:id', canActivate: [ AuthGuard], component: ViewsongstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'songpendingpurchase', canActivate: [ AuthGuard], component: SongpendingpurchaseComponent ,runGuardsAndResolvers: 'always'},
  {path: 'songcompletepurchase', canActivate: [ AuthGuard], component: SongcompletepurchaseComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewsongpurchase/:id', canActivate: [ AuthGuard], component: ViewsongpurchaseComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewpurchase/:id', canActivate: [ AuthGuard], component: ViewpurchaseComponent ,runGuardsAndResolvers: 'always'},
  {path: 'transaction', canActivate: [ AuthGuard], component: TransactionComponent ,runGuardsAndResolvers: 'always'},
  {path: 'songpurchasestats', canActivate: [ AuthGuard], component: SongpurchasestatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'transactionstats', canActivate: [ AuthGuard], component: TransactionstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'activitylog', canActivate: [ AuthGuard], component: ActivitylogComponent ,runGuardsAndResolvers: 'always'},
  {path: 'activitylogstats', canActivate: [ AuthGuard], component: ActivitylogstatsComponent ,runGuardsAndResolvers: 'always'},
  {path: 'postresetpasswd', component:PostresetpasswdComponent},
  {path: 'errorpage', component:ErrorpageComponent},
  {path: 'addtrfbalancereq', canActivate: [ AuthGuard], component: AddtrfbalancereqComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listtrfbalancereq', canActivate: [ AuthGuard], component: ListtrfbalancereqComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewtrfbalancereq/:id', canActivate: [ AuthGuard], component: ViewtrfbalancereqComponent ,runGuardsAndResolvers: 'always'},
  {path: 'pendingtrfbalancereq', canActivate: [ AuthGuard], component: PendingtrfbalancereqComponent ,runGuardsAndResolvers: 'always'},
  {path: 'updatetrfbalancereq/:id', component:UpdatetrfbalancereqComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'admlisttrfbalancereq', canActivate: [ AuthGuard], component: AdmlisttransferbalancereqComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editposttrfbalancereq/:id', component:EditposttransferbalancereqComponent, canActivate:[AuthGuard],runGuardsAndResolvers: 'always'},
  {path: 'addadjustment', canActivate: [ AuthGuard], component: AddadjustmentComponent ,runGuardsAndResolvers: 'always'},
  {path: 'listadjustment', canActivate: [ AuthGuard], component: ListadjustmentComponent ,runGuardsAndResolvers: 'always'},
  {path: 'viewadjustment/:id', canActivate: [ AuthGuard], component: ViewadjustmentComponent ,runGuardsAndResolvers: 'always'},
  {path: 'editadjustment/:id', canActivate: [ AuthGuard], component: EditadjustmentComponent ,runGuardsAndResolvers: 'always'},
  {path: 'pendingadjustment', canActivate: [ AuthGuard], component: PendingadjustmentComponent ,runGuardsAndResolvers: 'always'},
  {path: 'othertransaction', canActivate: [ AuthGuard], component: OthertransactionComponent ,runGuardsAndResolvers: 'always'},
  {path: 'othertransactionstats', canActivate: [ AuthGuard], component: OthertransactionstatsComponent ,runGuardsAndResolvers: 'always'},
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
    PostregisteredComponent,
    UsermgtComponent,
    ViewlabelComponent,
    UpdateemailComponent,
    EmailverificationComponent,
    SongmgtComponent,
    AddconfigComponent,
    AddgroupComponent,
    ListconfigComponent,
    ViewconfigComponent,
    EditconfigfileComponent,
    EditconfigComponent,
    KxInfoDialogComponent,
    ForgotpasswordComponent,
    ResetuserpasswdComponent,
    ArtiststatsComponent,
    AlbumstatsComponent,
    SongstatsComponent,
    LabelstatsComponent,
    ViewlabelstatsComponent,
    ViewartiststatsComponent,
    ViewalbumstatsComponent,
    ViewsongstatsComponent,
    SongpendingpurchaseComponent,
    SongcompletepurchaseComponent,
    ViewsongpurchaseComponent,
    ViewpurchaseComponent,
    TransactionComponent,
    SongpurchasestatsComponent,
    TransactionstatsComponent,
    LabelbalancedialogComponent,
    ActivitylogComponent,
    ActivitylogstatsComponent,
    PostresetpasswdComponent,
    ErrorpageComponent,
    AddtrfbalancereqComponent,
    ListtrfbalancereqComponent,
    ViewtrfbalancereqComponent,
    PendingtrfbalancereqComponent,
    UpdatetrfbalancereqComponent,
    AdmlisttransferbalancereqComponent,
    EditposttransferbalancereqComponent,
    AddadjustmentComponent,
    ListadjustmentComponent,
    ViewadjustmentComponent,
    EditadjustmentComponent,
    PendingadjustmentComponent,
    OthertransactionComponent,
    OthertransactionstatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ce3b3b', 
      secondaryColour: '#ce3b3b', 
      tertiaryColour: '#ce3b3b'
    }),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })
  ],
  entryComponents: [
    KxInfoDialogComponent,
    LabelbalancedialogComponent
  ],
  providers: [ Globals,
    ToastrService, 
    AuthService, 
    AuthGuard, 
    UserService, 
    ArtistService, 
    AlbumService, 
    SongService, 
    DatePipe,
    UsermgtService,
    SongadminService,
    MsconfigService,
    NotifService,
    FiletransferService,
    SongpurchaseService,
    TransactionService,
    ActivitylogService,
    NavbarService,
    TrfbalanceService,
    TrfbalancemgtService,
    AdjustmentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

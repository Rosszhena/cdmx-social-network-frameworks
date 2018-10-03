import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPafeComponent } from './componentes/not-found-pafe/not-found-pafe.component';


import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';


import { environment } from '../environments/environment';

import { AuthService } from './servicios/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ListaComponent } from './componentes/privado-page/lista/lista.component';
import { ListaAddComponent } from './componentes/privado-page/lista-add/lista-add.component';

import { ConexionService } from './servicios/conexion.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPafeComponent,
    ListaAddComponent,
    ListaAddComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

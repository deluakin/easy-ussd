import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAppComponent } from './new-app/new-app.component';
import { AppsComponent } from './apps/apps.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { AppRoutingModule } from './/app-routing.module';

import {FirebaseConfig} from '../environments/environment'
import {AngularFireModule} from '@angular/fire'
import {AngularFirestoreModule} from '@angular/fire/firestore'

import { UssdAppService } from './service/ussd-app.service';
import { MessageService } from './service/message.service';
import { LoadingComponent } from './loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NewAppComponent,
    AppsComponent,
    DeleteAppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.firestore),
    AngularFirestoreModule,
    FontAwesomeModule
  ],
  providers: [UssdAppService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAppComponent } from './new-app/new-app.component';
import { AppsComponent } from './apps/apps.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { AppRoutingModule } from './/app-routing.module';

import {FirebaseConfig} from '../environments/environment'
import {AngularFireModule} from 'angularfire2'
import {AngularFirestoreModule} from 'angularfire2/firestore'

import { UssdAppService } from './service/ussd-app.service';
import { LoadingComponent } from './loading/loading.component';

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
    AngularFirestoreModule
  ],
  providers: [UssdAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

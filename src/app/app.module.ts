import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewAppComponent } from './new-app/new-app.component';
import { AppsComponent } from './apps/apps.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NewAppComponent,
    AppsComponent,
    DeleteAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

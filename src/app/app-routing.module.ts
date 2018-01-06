import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { NewAppComponent } from './new-app/new-app.component';
import { DeleteAppComponent } from './delete-app/delete-app.component';

const routes: Routes = [
  { path: 'apps', component: AppsComponent },
  { path: 'apps/new', component: NewAppComponent },
  { path: 'apps/delete', component: DeleteAppComponent },
  { path: '', redirectTo: '/apps', pathMatch: 'full' }
];

@NgModule({
  imports:  [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }

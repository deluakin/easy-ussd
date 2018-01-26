import { Component, OnInit } from '@angular/core';
import {UssdAppService} from '../service/ussd-app.service';
import { UssdApp } from '../models/ussd-screen';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit, OnDestroy  {

  ussdSubscriber: Subscription;
  ussdApps: UssdApp[];
  appsSubscriber: Observable<UssdApp[]>;
  constructor(private ussdAppService: UssdAppService) { }

  ngOnInit() {
    this.ussdSubscriber = this.ussdAppService.getApps()
      .subscribe(apps => {
        this.ussdApps = apps;
      });
  }

  ngOnDestroy() {
    this.ussdSubscriber.unsubscribe();
  }

}

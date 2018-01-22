import { Component, OnInit } from '@angular/core';
import {UssdAppService} from '../service/ussd-app.service';
import { UssdApp } from '../models/ussd-screen';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit  {

  ussdApps: UssdApp[];
  appsSubscriber: Observable<UssdApp[]>;
  constructor(private ussdAppService: UssdAppService) { }

  ngOnInit() {
    this.ussdAppService.getApps()
      .subscribe(apps => {
        this.ussdApps = apps;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import {UssdAppService} from '../service/ussd-app.service';
import { UssdApp } from '../models/ussd-screen';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit, OnDestroy  {

  ussdSubscriber: Subscription;
  ussdApps: UssdApp[];
  appsSubscriber: Observable<UssdApp[]>;
  constructor(private ussdAppService: UssdAppService, 
    public messageService: MessageService) { 
      this.messageService.showMessage("Loading apps...");
    }

  ngOnInit() {
    this.ussdSubscriber = this.ussdAppService.getApps()
      .subscribe(apps => {
        this.ussdApps = apps;
        this.messageService.hideMessage();
      });
  }

  ngOnDestroy() {
    this.ussdSubscriber.unsubscribe();
  }

  deleteApp(appId){
    this.messageService.showMessage("Deleting...");
    this.ussdAppService.deleteApp(appId);
    this.messageService.showMessage("Deleted");
    this.messageService.hideMessage();
  }

}
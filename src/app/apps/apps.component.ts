import { Component, OnInit } from '@angular/core';
import {UssdAppService} from '../service/ussd-app.service';
import { UssdApp } from '../models/ussd-screen';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit {

  ussdApps: UssdApp[];
  constructor(private ussdAppService: UssdAppService) { }

  ngOnInit() {
    this.ussdAppService.getApps().subscribe(apps => {
      this.ussdApps = apps;
    });
  }

}

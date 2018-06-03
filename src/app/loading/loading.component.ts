import { Component, OnInit, Input } from '@angular/core';
import {MessageService} from '../service/message.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent implements OnInit {

  @Input() Config;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}

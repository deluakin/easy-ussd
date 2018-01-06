import { Component, Renderer, OnInit } from '@angular/core';
import { UssdScreen } from '../models/ussd-screen';

declare var $:any

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.sass']
})
export class NewAppComponent implements OnInit {

  constructor(private renderer: Renderer) { }
  TYPES: string[] = ["Menu", "Input", "Alert"];
  hasScreen: boolean = false;
  screens: UssdScreen[] = [];
  newScreen: UssdScreen = new UssdScreen("", "", "");

  ngOnInit() {
    $(document).foundation();
  }

  addScreen(){
    if(this.newScreen.id.length > 0 && this.newScreen.type.length > 0){
      var newScreen2 = {
        id: this.newScreen.id,
        type: this.newScreen.type,
        message: '',
        menu: ["1. first menu", "2. second menu"]
      };

      this.screens.push(newScreen2);
      this.newScreen = new UssdScreen("", "", "");
      this.hasScreen = true;
    }
  }

  addMenu(array){
    
  }

  editMenu(array, element){

  }

  editMessage(message){

  }

  deleteScreen(screen){

  }

  removeMenu(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
}

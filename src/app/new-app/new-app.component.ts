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
  appName: string = "Untitiled App";
  newScreen: UssdScreen = new UssdScreen();

  ngOnInit() {
    $(document).foundation();
  }

  addScreen(){
    if(this.newScreen.id.length > 0 && this.newScreen.type.length > 0){
      var newScreen2 = {
        id: this.newScreen.id,
        editMessage: false,
        type: this.newScreen.type,
        message: "",
        menu: [{
          text: '1. first option',
          value: '1',
        }, 
        {
          text: '2. second option',
          value: '2',
        }]
      };
      switch(this.newScreen.type){
        case "Menu":
          newScreen2.message = "Choose a Menu";
          break;
        case "Input":
          newScreen2.message = "Enter your Name";
          break;
        case "Alert":
        newScreen2.message = "Thank you, we will get back to you";
          break;
      }

      this.screens.push(newScreen2);
      this.newScreen = new UssdScreen();
      this.hasScreen = true;
    }
  }

  addMenu(array){

  }

  editMenu(array, element){

  }

  updateMessage(screen){
    screen.editMessage = false;
  }

  initEditMessage(screen){
    screen.editMessage = true;
  }

  deleteScreen(screen){
    if(confirm("Are you sure you want to delete screen: " + screen.id + "")){
      this.removeMenu(this.screens, screen);
      if(this.screens.length == 0){
        this.hasScreen = false;
      }
    }
  }

  removeMenu(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
}

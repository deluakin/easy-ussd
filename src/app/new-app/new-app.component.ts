import { Component, Renderer2, OnInit } from '@angular/core';
import { UssdScreen, UssdApp, UssdScreenMenu } from '../models/ussd-screen';
import {UssdAppService} from '../service/ussd-app.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Observable } from 'rxjs/Observable';
 
declare var $:any

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.sass']
})
export class NewAppComponent implements OnInit {

  ussdAppId: string;
  newApp: UssdApp = { 
    Status: "Pending",
    Created: new Date(),
    Endpoint: "http://goo.gl/xLdK03",
  };

  JustUpdate: boolean = false;

  TYPES: string[] = ["Menu", "Input", "Alert"];
  USSD_INSTRUCTION: string[] = ["Goto Screen", 
                                "Send a message", 
                                "Tigger Mobile Money request",
                                "Make a REST call"];
                                
  hasScreen: boolean = false;
  isEdit: boolean = false;
  screens: UssdScreen[] = [];
  appName: string = "Untitiled App";
  editAppName: boolean = false;
  newScreen: UssdScreen = new UssdScreen();
  selectedMenu: UssdScreenMenu = {
    text: "",
    value: ""
  };
  selectedScreen: UssdScreen;
  selectedMenuIndex: number = -1;
  private sub: any;

  constructor(private route: ActivatedRoute, 
    private ussdAppService: UssdAppService,
    public messageService: MessageService) {
      this.messageService.showMessage("Loading...");
  }

  ngOnInit() {
    this.ussdAppId = this.route.snapshot.params['id'];
    if(this.ussdAppId !== undefined){
      this.loadSavedApp(this.ussdAppId);
    }else{
      this.messageService.hideMessage();
    }
    $(document).foundation();
  }

  loadSavedApp(ussdAppId: string){
    var appData = this.ussdAppService.getAppById(ussdAppId);
    appData.subscribe(app => {
      this.appName = app.Name;
      this.screens = app.Screens;
      if(this.screens.length > 0){
        this.hasScreen = true;
      }
      if(!this.JustUpdate)
        this.messageService.hideMessage();
    }, error => console.log(error)
    );
    this.isEdit = true;
  }

  initEditAppName(){
    this.editAppName = true;
  }

  updatetAppName(){
    this.editAppName = false;
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

  initEditMenu(screen, menu){
    var editingMenu = {
      text: (menu == null) ? "" : menu.text,
      value: (menu == null) ? "" : menu.value,
    };
    this.selectedScreen = screen;
    this.selectedMenu = editingMenu;

    var menus = this.selectedScreen.menu
    this.selectedMenuIndex = menus.indexOf(menu);
  }

  updateMenu(){
    if(this.selectedMenu.text.trim().length > 0 && this.selectedMenu.value.trim().length > 0){
      $("#edit-ussd-menu").foundation("close");
      if(this.selectedMenuIndex == -1){
        //new menu
        this.selectedScreen.menu.push(this.selectedMenu);
      }else{
        //update menu
        this.selectedScreen.menu[this.selectedMenuIndex] = this.selectedMenu;
      }
    }
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

  saveApp(){
    this.messageService.showMessage("Saving...");
    this.newApp.Name = this.appName;
    this.newApp.Screens = this.screens;
    if(this.isEdit){
      this.ussdAppService.updateApp(this.newApp, this.ussdAppId);
    }else{
      this.ussdAppId = this.ussdAppService.addApp(this.newApp);
    }
    this.messageService.showMessage("Saved");
    this.isEdit = true;
    this.JustUpdate = true;

    this.messageService.hideMessage();
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private message: string = "";
  private isShown: boolean = false;

  showMessage(message: string){
    this.message = message;
    this.isShown = true;
  }

  isMessageShowing(){
    return this.isShown;
  }

  getMessage(){
    return this.message;
  }

  hideMessage(){
    setTimeout(()=>{
      this.message = "";
    },500);
  }
  
  constructor() { }

}

export class UssdScreen {
    public id: string = "";
    public message: string = "";
    public editMessage: boolean = false;
    public type: string = "";
    public menu: UssdScreenMenu[] = [];
    
    constructor(){ }
}

export class UssdScreenMenu{
    public text: string = "";
    public value: string = "";
}
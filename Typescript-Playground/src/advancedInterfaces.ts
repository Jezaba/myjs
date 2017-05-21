class Control{
    private state:any;
    doStuff(control:SelectableControl):void{
        control.state = "some state";
    }
}

interface SelectableControl extends Control{
    select():void;
}

class CheckBox extends Control{
    select():void{}
}

class Button{
    select():void{}
}

let selectablecontrol:SelectableControl;
selectablecontrol = new CheckBox();




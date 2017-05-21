"use strict";
class Control {
    doStuff(control) {
        control.state = "some state";
    }
}
class CheckBox extends Control {
    select() { }
}
class Button {
    select() { }
}
let selectablecontrol;
selectablecontrol = new CheckBox();

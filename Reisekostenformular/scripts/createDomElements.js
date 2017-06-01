"use strict";
let ele2 = document.createElement('div');
ele2.style.border = "solid 1px green;";
ele2.style.minHeight = "100px;";
ele2.style.minWidth = "300px";
ele2.hidden = false;
ele2.style.backgroundColor = "red;";
ele2.className = "row";
ele2.innerHTML = "OTTOOOOOO";
let ele = document.createElement('div');
ele.style.border = "solid 1px green;";
ele.style.minHeight = "100px;";
ele.style.minWidth = "300px";
ele.hidden = false;
ele.className = "row";
ele.innerHTML = "ele2";
class Row {
    constructor() {
        this.ClassName = "row";
    }
    appendTo() {
        let tbl = document.getElementById(this.TableName);
        document.body.appendChild(this.Elemento);
    }
}
document.body.appendChild(ele);
let tbl = document.getElementById('t4');
if (tbl === null) {
    console.log("tbl is Null", tbl === null);
}
else {
    console.log("Jez is nimma NULL");
}
tbl.appendChild(ele);
ele.onclick = function () {
    ele.innerHTML = "ölkjöljölkj";
    console.log("DOSAMA1");
};
let obj = {
    0: "ölk",
    1: "kkk"
};

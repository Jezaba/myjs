var ele2 = document.createElement('div');
ele2.style.border = "solid 1px green;";
ele2.style.minHeight = "100px;";
ele2.style.minWidth = "300px";
ele2.hidden = false;
ele2.style.backgroundColor = "red;";
ele2.className = "row";
ele2.innerHTML = "OTTOOOOOO";
var ele = document.createElement('div');
ele.style.border = "solid 1px green;";
ele.style.minHeight = "100px;";
ele.style.minWidth = "300px";
ele.hidden = false;
ele.className = "row";
ele.innerHTML = "ele2";
var Row = (function () {
    function Row() {
        this.ClassName = "row";
    }
    Row.prototype.appendTo = function () {
        var tbl = document.getElementById(this.TableName);
        document.body.appendChild(this.Elemento);
    };
    return Row;
}());
document.body.appendChild(ele);
var tbl = document.getElementById('t4');
if (tbl === null) {
    console.log("tblx is Null", tbl === null);
}
else {
    console.log("xJez is nimma NULL");
}
tbl.appendChild(ele);
ele.onclick = function () {
    ele.innerHTML = "ölkjöljölkjx";
    console.log("DOSAMA1");
};
var obj = {
    0: "ölk",
    1: "kkk"
};
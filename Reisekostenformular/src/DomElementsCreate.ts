let ele2:HTMLDivElement = document.createElement('div');
ele2.style.border="solid 1px green;";
ele2.style.minHeight="100px;";
ele2.style.minWidth="300px";
ele2.hidden=false;
ele2.style.backgroundColor="red;"
ele2.className="row";
ele2.innerHTML="OTTOOOOOO";

let ele:HTMLDivElement = document.createElement('div');
ele.style.border="solid 1px green;";
ele.style.minHeight="100px;";
ele.style.minWidth="300px";
ele.hidden=false;
ele.className="row";
ele.innerHTML="ele2";
 
interface IRow{
    Elemento:HTMLDivElement;
    appendTo():void;
}
class Row implements IRow{
    Elemento: HTMLDivElement;
    TableName: string;
    ClassName:string="row";
    appendTo():void {
        let tbl:HTMLDivElement = <HTMLDivElement>document.getElementById(this.TableName);
        document.body.appendChild(this.Elemento);
    }
}


document.body.appendChild(ele);



let tbl:HTMLDivElement = <HTMLDivElement>document.getElementById('t4');
if(tbl===null){
    console.log("tblx is Null", tbl === null);
}else{
    console.log("xJez is nimma NULL");
}


tbl.appendChild(ele);

ele.onclick=function(){ele.innerHTML="ölkjöljölkjx";console.log("DOSAMA1");
};


let obj={
    0:"ölk",
    1:"kkk"
}

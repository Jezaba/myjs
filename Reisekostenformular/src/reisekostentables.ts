export namespace Reisekosten.Tables{

class Cell{
     constructor(className:string="cell", value:string="", isEditable:boolean=false, column?:Column){
        this._className = className;
        this._value = value;
        this._isEditable=isEditable;
        //this._column = new column("aaa","bbb");
        if(column===null){
            this._column=column;
        }
    }
    private _column:Column;
    private _className:string;
    private _value: string;
    private _isEditable:boolean = false;

    public get Value():string{
		return this._value;
    }
    public set Value(value: string){
		 this._value=value;
    }
    public get Column():Column{
        return this._column;
    }
    public set Column(column: Column){
		 this._column=column;
    }
}
class Column{
     constructor(public headerName:string="", public dataType:string="") {
    }
}

class Row{
    Cells:[string];
    Cells2:[Cell];// = new Set();
    Cells3:Cell[]=[];
}

type NumberCallbak = (zahl:number)=>void;
let col:Column = new Column("headernam111","datatype");


let z = new Cell("cell","ein Text",false);
z.Column = col;


let R = new Row();
//x.Column.headerName="AAAA";
R.Cells3[0]= z;

col = new Column("2222","YYYYY");
z.Column = col;
R.Cells3[1]= z;

let y = new Cell("cell2","ein Text333333",false);
col = new Column("33333","YYYYY");
y.Column = col;

R.Cells3[2]=y;

console.log(R.Cells3[0].Column.headerName);
console.log(R.Cells3[1].Column.headerName);
console.log(R.Cells3[2].Column.headerName);



/*R.Cells.push("aaa");
R.Cells[1]="bbb";
*/// R.Cells[0]= x;
// R.Cells[1]= new Cell("cell","ein Value",false,new Column("gggg","hhhh"));
// R.Cells[2]= new Cell("cell","ein Value",false,R.Cells[0].Column);

// console.log ("DOSAMA ------------>",x.Column.headerName);
//console.log(R.Cells[2].Column.headerName);

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reisekosten;
(function (Reisekosten) {
    var Tables;
    (function (Tables) {
        class Cell {
            constructor(className = "cell", value = "", isEditable = false, column) {
                this._isEditable = false;
                this._className = className;
                this._value = value;
                this._isEditable = isEditable;
                //this._column = new column("aaa","bbb");
                if (column === null) {
                    this._column = column;
                }
            }
            get Value() {
                return this._value;
            }
            set Value(value) {
                this._value = value;
            }
            get Column() {
                return this._column;
            }
            set Column(column) {
                this._column = column;
            }
        }
        class Column {
            constructor(headerName = "", dataType = "") {
                this.headerName = headerName;
                this.dataType = dataType;
            }
        }
        class Row {
            constructor() {
                this.Cells3 = [];
            }
        }
        let col = new Column("headernam111", "datatype");
        let z = new Cell("cell", "ein Text", false);
        z.Column = col;
        let R = new Row();
        //x.Column.headerName="AAAA";
        R.Cells3[0] = z;
        col = new Column("2222", "YYYYY");
        z.Column = col;
        R.Cells3[1] = z;
        let y = new Cell("cell2", "ein Text333333", false);
        col = new Column("33333", "YYYYY");
        y.Column = col;
        R.Cells3[2] = y;
        console.log(R.Cells3[0].Column.headerName);
        console.log(R.Cells3[1].Column.headerName);
        console.log(R.Cells3[2].Column.headerName);
        /*R.Cells.push("aaa");
        R.Cells[1]="bbb";
        */ // R.Cells[0]= x;
        // R.Cells[1]= new Cell("cell","ein Value",false,new Column("gggg","hhhh"));
        // R.Cells[2]= new Cell("cell","ein Value",false,R.Cells[0].Column);
        // console.log ("DOSAMA ------------>",x.Column.headerName);
        //console.log(R.Cells[2].Column.headerName);
    })(Tables = Reisekosten.Tables || (Reisekosten.Tables = {}));
})(Reisekosten = exports.Reisekosten || (exports.Reisekosten = {}));

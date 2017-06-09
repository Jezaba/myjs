"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reisekosten;
(function (Reisekosten) {
    var Tables;
    (function (Tables) {
        var Cell = (function () {
            function Cell(className, value, isEditable, column) {
                if (className === void 0) { className = "cell"; }
                if (value === void 0) { value = ""; }
                if (isEditable === void 0) { isEditable = false; }
                this._isEditable = false;
                this._className = className;
                this._value = value;
                this._isEditable = isEditable;
                //this._column = new column("aaa","bbb");
                if (column === null) {
                    this._column = column;
                }
            }
            Object.defineProperty(Cell.prototype, "Value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Cell.prototype, "Column", {
                get: function () {
                    return this._column;
                },
                set: function (column) {
                    this._column = column;
                },
                enumerable: true,
                configurable: true
            });
            return Cell;
        }());
        var Column = (function () {
            function Column(headerName, dataType) {
                if (headerName === void 0) { headerName = ""; }
                if (dataType === void 0) { dataType = ""; }
                this.headerName = headerName;
                this.dataType = dataType;
            }
            return Column;
        }());
        var Row = (function () {
            function Row() {
                this.Cells3 = [];
            }
            return Row;
        }());
        var col = new Column("headernam111", "datatype");
        var z = new Cell("cell", "ein Text", false);
        z.Column = col;
        var R = new Row();
        //x.Column.headerName="AAAA";
        R.Cells3[0] = z;
        col = new Column("2222", "YYYYY");
        z.Column = col;
        R.Cells3[1] = z;
        var y = new Cell("cell2", "ein Text333333", false);
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

//export namespace Reisekosten.Tables{
//type NumberCallbak = (zahl:number)=>void;
module Tables{
    class Cell{
        constructor(value:string=""){
            this._value = value;
        }
        private _className:string="cell";
        private _value: string;

        public get Value():string{
            return this._value;
        }
        public set Value(value: string){
            this._value=value;
        }
        public get ClassName():string{
            return this._className;
        }
        public set ClassName(value: string){
            this._className=value;
        }
    }

     class Row{
        Cells:Array<Cell>;//=[];
        private _className:string="row";
        constructor(...cells:Cell[]) {
            if(this.Cells==null){
                this.Cells = [];
            }
            if(cells!=null){
                this.Cells.push(...cells);
            }
        }
        public get ClassName():string{
            return this._className;
        }
        public set ClassName(value: string){
            this._className=value;
        }
        Row2Html(linebreak:string="\n", intend:string=" "):string{
            let ret;
            ret = intend + "<div"+ ((this.ClassName!="")? " class=\"" + this.ClassName + "\"" :"")+ ">"+linebreak;
            for (let c of this.Cells) {
                ret += intend + intend + `<div` + ((c.ClassName!="")? ` class="` + c.ClassName + `"` :``)+ `>`
                + c.Value 
                + `</div>`+linebreak;
            }
            ret=ret+ intend + "</div>"
            return ret;
        }
    }
    
    class Table{
        Id:string;
        private _className:string="table";
        RowHeaders:Row;
        Rows:Array<Row>=[];
        constructor(id:string="") {
            this.Id=id;
        }
        public get ClassName():string{
            return this._className;
        }
        public set ClassName(value: string){
            this._className=value;
        }
        Table2Html(linebreak:string="\n",intend:string=" "):string{
            let ret:string;
                ret = "<div" + ((this.Id!="")?" Id=\""+ this.Id + "\"" : "") +
                ((this.ClassName!="")? " class=\"" + this.ClassName  + "\"" :"") + 
                 ">"+linebreak; 

            ret += this.RowHeaders.Row2Html(linebreak, intend)+linebreak;

            for(let r of this.Rows){
                ret += r.Row2Html(linebreak, intend) ;
            }
            ret = ret + linebreak + "</div>" ;
            return ret;
        }
    }




    TabelleUndDatensaetzeErstellen();

    function TabelleUndDatensaetzeErstellen():void{
        // TABLE ERSTELLEN
        let TABLE1 = new Table("tbl1");

        //HEADER ROW ERSTELLEN
        let cellH1 = new Cell("Datum");
        let cellH2 = new Cell("Kfz");
        let cellH3 = new Cell("ifs-MA<br />od. Klient");
        let cellH4 = new Cell("Satz");
        let cellH5 = new Cell("Beschreibung");
        let cellH6 = new Cell("KM");
        let cellH7 = new Cell("Kosten");
        let rowHeaders = new Row(cellH1,cellH2,cellH3,cellH4,cellH5,cellH6,cellH7);
        rowHeaders.ClassName = "row header";
        TABLE1.RowHeaders = rowHeaders;

        //NORMALE ROWS ERSTELLEN
        let cell1 = new Cell("08.04.1964");
        let cell2 = new Cell("Motorrad");
        let cell3 = new Cell("Aloisia");
        let cell4 = new Cell("1.42");
        let cell5 = new Cell("Fldk. Termin monatlicher Jourfix ");
        let cell6 = new Cell("31.3");
        let cell7 = new Cell("44.446");
        let row = new Row(cell1,cell2,cell3,cell4,cell5,cell6,cell7);
        TABLE1.Rows.push(row);

        
        console.log("\n\n\n",TABLE1.Table2Html("\n","    "));
        //console.log("\n\n\n",TABLE1.Table2Html("",""));
    }
//MODULE FERTIG
}
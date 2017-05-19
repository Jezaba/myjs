class Car{
    private static _counter:number=0;
    private _seriesnumber:number;
    private _ownerName:string;
    private constructor(public brandName:string) {
        this.brandName=brandName;
        Car._counter++;
        this._seriesnumber = Car._counter;
    }
    public static BuyCar(brandName:string,ownerName:string):Car{
        let car=new Car(brandName);
        car.OwnerName=ownerName;
        return car;
    }
    public startCar():void{
        this._startEnginge();
    }
    private _startEnginge():void{
        console.log("starting engine ...")
    }

    public get SeriesNumber():number{
        return this._seriesnumber;
    }
    public get OwnerName():string{
        return this._ownerName; //if not set it'll be undifined - also mit ? bestücken 
    }
    public set OwnerName(name:string){
        this._ownerName = name;
    }
}

let car =  Car.BuyCar("Mustang","Otto");
car.startCar();
console.log(car.brandName,car.SeriesNumber);

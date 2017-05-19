class Car{
    private static _counter:number=0;
    private _seriesnumber:number;
    constructor(public brandName:string) {
        this.brandName=brandName;
        Car._counter++;
        this._seriesnumber = Car._counter;
    }

    public startCar():void{
        this._startEnginge();
    }
    private _startEnginge():void{
        console.log("starting engine ..")
    }

    public get SeriesNumber():number{
        return this._seriesnumber;
    }
}

let car = new Car("Mustang");
car.startCar();
console.log(car.brandName,car.SeriesNumber);

let car2 = new Car("Mazda");
car2.startCar();
console.log(car2.brandName,car2.SeriesNumber);
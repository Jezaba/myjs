//       typbeof
function logError(error:string|Error):void{
     if(typeof error === 'string'){
        console.log(error);
     }else{
         console.log(error.message);
     }
}
//#################### instanceof

export interface Point{
    x:number;
    y:number;
}


export class Rectangle{
    constructor(public topLeft:Point, public width:number, public height: number){}
}

export class Circle{
    constructor(public center:Point, public radius:number){}
}

function getArea(geometry: Rectangle| Circle):number{
    if(geometry instanceof Circle){
        return Math.PI * Math.pow(geometry.radius,2);
    }else{
        return geometry.height*geometry.width;
    }    
}
//#################### eigener TypeGuard

function isPoint(geometry: any):geometry is Point{
    return typeof geometry.x === 'number' && typeof geometry.y === 'number';
}

function logCenter(geometry:Point|Rectangle|Circle):void{
    if(isPoint(geometry)){
        console.log(geometry.x,geometry.y);
    }else if(geometry instanceof Rectangle){
        console.log(geometry.topLeft.x +geometry.width / 2, geometry.topLeft.y + geometry.height);
    }else{
        console.log(geometry.center);
    }
}





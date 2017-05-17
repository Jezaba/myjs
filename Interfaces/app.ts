interface RectangleOptions{
    width:number;
    length:number;
    height?:number;
}

function drawRectangle(options:RectangleOptions){
    let a=options.width;
    let b=options.length;
    if(options.height){
        let c=options.height;
    }
}

//Aufruf
drawRectangle({width:100, length:50})

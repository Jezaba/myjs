function greet(firstName: string, lastName:string="" ):void{
    console.log("Hello1 " + firstName + " " + lastName);
}
greet("Susi");

class Greeter{
    firstname = "Olga";
    sayHello(){
        setTimeout(function(){
                        // this zeigt nicht mehr auf firsname
                        // sondern auf das Window Objekt,
                        // deshalb Arrowfunction verwenden
                        // siehe sayHello2()
            console.log("Hello2, " + this.firstname);
        }, 500);
    }

    sayHello2(){
        setTimeout(()=>{
            console.log("Hello3, " + this.firstname)
        },500);
    }
}
let g = new Greeter();
g.sayHello();
g.sayHello2();

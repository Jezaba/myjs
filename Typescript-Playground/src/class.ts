
class Person{
    constructor(name){
        this.name=name;

    }
    static staticMethod(){
        console.log("Static Method");

    }
    greetPerson(){
        console.log("Hello "+ this.name);
        
    }
}
let p:Person = new Person("Otto");
Person.staticMethod();


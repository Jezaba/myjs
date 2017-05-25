let dogName = "Spotty";

export function changeDogName(newName:string){
    dogName = newName;
}
export function logDogName(){
    console.log('dogModuleA',dogName);
}
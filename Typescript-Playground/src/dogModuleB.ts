let dogName = "Coco";

export function changeDogName(newName:string){
    dogName = newName;
}
export function logDogName(){
    console.log('dogModuleB',dogName);
}
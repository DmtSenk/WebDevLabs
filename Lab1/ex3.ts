//string
let Name: string = "George";
console.log("Your name is: "+Name)
//int
let Age: number = 20;
console.log("Your age is: "+Age)
//boolean
let Female: boolean = false;
console.log("Female: "+Female);
//any
let smoker: any = "Smoking for " + 2 + " years";
console.log("Any type :"+smoker);
//array
let myArray: Array<number> = [2,4,6];


for( let i = 0; i < myArray.length; i++){
    console.log("Element: "+myArray[i]);
}

myArray.forEach(function(element){
    console.log("Element: "+element)
})

myArray.forEach((element)=>{
    console.log("Element: "+element)
})

let unKown: any = "sdsd";
console.log("the values of unKown is:"+unKown);
//An array of strings.
let arrayString: string[] = ["apple","dog"];

addTask("test");
listAllTasks();
deleteTask("test")
listAllTasks();
//An addTask function
function addTask(task:string):number{   //It receives a string as a parameter called task.
    arrayString.push(task)  //It adds the task to the array

    console.log("Text : "+task+" was added"); //It prints a message in the console indicating the insertion.

    let numOfElements: any = arrayString.length;
    numOfElements = console.log(numOfElements);
    return numOfElements;   //It returns the number of elements in the array after the insertion.
}

//A listAllTasks function:
function listAllTasks():void{
    for(let i: number = 0; i<arrayString.length;i++ ){ // It iterates over all the tasks in the array.
        console.log(arrayString[i]);    //It prints each array item in the console.
    }

    // or 

    arrayString.forEach(
        (Element) =>{
            console.log(Element+" is in list");
        }
    )
}

//A deleteTask function:
function deleteTask(task:string): number{ // It receives a string as a parameter called task.
    arrayString.splice(2);  //It removes that string from the array.
    console.log("Text : "+task+" was deleted");    //It prints in console a message indicating the deletion.
    return arrayString.length;  //It returns the number of elements in the array after the deletion.

    // or
    let index:number = arrayString.indexOf(task);
    if(index > 0){
        arrayString.splice(index,1);
        console.log(task+"was removed");
    }else{
        console.log(task+"isn't in list");
    }
    //return arrayString.length;
}


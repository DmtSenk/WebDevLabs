interface test{ //interface 
    stringArray: string[]; //An array of strings.   
    addTask(text:string): void; //An addTask function
    listAll():void; //An listAll function
    deleteTask(text:string):number; //A deleteTask function
}

class main implements test{
    stringArray: string[] = ["First","Second","Third"]; //An array of strings.
    
    addTask(text){   //Recieves a string as a parameter.
        this.stringArray.push(text);
        console.log("Text : "+text+" was added"); //Prints a message in the console indicating the insertion.

        let numOfElements: number = this.stringArray.length;
        console.log("Number of elements is: "+numOfElements); //Returns the number of elements in the array after the insertion.
        return numOfElements;
    }
    listAll(): void {
        this.stringArray.forEach(   //Prints in the console all the tasks of the list.
            (Element) => {
                console.log(Element);
            }
        )
    }
    deleteTask(text: string): number {      //Recieves a string as a parameter.
        let index: number = this.stringArray.indexOf(text);
        if(index > 0){
            this.stringArray.splice(index,1); //removes item in index position 
            console.log(text+" was removed");    //Prints a message in the console indicating the deletion.
        }else{
            console.log(text+" isn't in the list");
        }
        return this.stringArray.length; //Returns the number of elements in the array after the deletion.
    }
}

const prog = new main();
prog.addTask("Fourth");
prog.listAll();
prog.deleteTask("Fourth");







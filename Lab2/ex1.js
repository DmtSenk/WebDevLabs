//An array of strings.
var arrayString = ["apple", "dog"];
addTask("test");
listAllTasks();
deleteTask("test");
listAllTasks();
//An addTask function
function addTask(task) {
    arrayString.push(task); //It adds the task to the array
    console.log("Text : " + arrayString[2] + " was added"); //It prints a message in the console indicating the insertion.
    var numOfElements = arrayString.length;
    numOfElements = console.log(numOfElements);
    return numOfElements; //It returns the number of elements in the array after the insertion.
}
//A listAllTasks function:
function listAllTasks() {
    for (var i = 0; i < arrayString.length; i++) { // It iterates over all the tasks in the array.
        console.log(arrayString[i]); //It prints each array item in the console.
    }
}
//A deleteTask function:
function deleteTask(task) {
    arrayString.splice(2);
    var numOfElements = arrayString.length;
    numOfElements = console.log(numOfElements);
    return arrayString.length;
}

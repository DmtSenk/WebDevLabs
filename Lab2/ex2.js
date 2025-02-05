var main = /** @class */ (function () {
    function main() {
        this.stringArray = ["First", "Second", "Third"]; //An array of strings.
    }
    main.prototype.addTask = function (text) {
        this.stringArray.push(text);
        console.log("Text : " + text + " was added"); //Prints a message in the console indicating the insertion.
        var numOfElements = this.stringArray.length;
        console.log("Number of elements is: " + numOfElements); //Returns the number of elements in the array after the insertion.
        return numOfElements;
    };
    main.prototype.listAll = function () {
        this.stringArray.forEach(//Prints in the console all the tasks of the list.
        function (Element) {
            console.log(Element);
        });
    };
    main.prototype.deleteTask = function (text) {
        var index = this.stringArray.indexOf(text);
        if (index > 0) {
            this.stringArray.splice(index, 1); //removes item in index position 
            console.log(text + " was removed"); //Prints a message in the console indicating the deletion.
        }
        else {
            console.log(text + " isn't in the list");
        }
        return this.stringArray.length; //Returns the number of elements in the array after the deletion.
    };
    return main;
}());
var prog = new main();
prog.addTask("Fourth");
prog.listAll();
prog.deleteTask("Fourth");

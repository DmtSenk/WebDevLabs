console.log(CalcNum(" test 1 "));
function CalcNum(test) {
    return test.length;
}
console.log(ExSpaces(" test 1 "));
function ExSpaces(test) {
    return test.trim().length;
}
console.log(Combined(" test 1 ", true));
console.log(Combined(" test 1 ", false));
function Combined(test, spaces) {
    var num;
    if (spaces) {
        num = test.length;
    }
    else {
        num = test.trim().length;
    }
    return num;
}
console.log(Combined2(" test 1 "));
console.log(Combined2(" test 1 "));
//? makes it optional
function Combined2(test, spaces) {
    var num;
    if (spaces) {
        num = test.length;
    }
    else {
        num = test.trim().length;
    }
    return num;
}

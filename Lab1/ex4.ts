
console.log(CalcNum(" test 1 "));
function CalcNum( test: string):number{
    return test.length;
    
}


console.log(ExSpaces(" test 1 "));
function ExSpaces( test: string):number{
    return test.trim().length;
}


console.log(Combined(" test 1 ", true));
console.log(Combined(" test 1 ", false));
function Combined( test: string, spaces:boolean):number{
    let num:number;
    if(spaces){
        num = test.length;
    }else{
        num = test.trim().length;
    }
    return num;
}


console.log(Combined2(" test 1 "));
console.log(Combined2(" test 1 "));
//? makes it optional
function Combined2( test: string, spaces?:boolean):number{
    let num:number;
    if(spaces){
        num = test.length;
    }else{
        num = test.trim().length;
    }
    return num;
}


// git init put files safe make an empthy repository
//git add  .
//git commit -m "lab1"


//remote repo => github

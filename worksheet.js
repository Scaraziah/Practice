"use strict";

let myColor = ["Black", "Pink"];

function printColor(colorNum){
    var result
    result = myColor[colorNum];
    return result
}
myColor.push("Blue", "Red", "White", "Green", "Yellow");
console.log(myColor);
console.log(printColor(prompt("Color Number")-1));


let matchColor = prompt("Enter Color")
let colorSize = myColor.push("Purple")

for(let i = 0; i < 7; i++){
    if(myColor[i] === matchColor){
        console.log("You found my chosen color!");
    }
        else{       
            console.log(`${matchColor} is the wrong color at index ${i} of our array`);
    }
}


function addTwoNumber(num1, num2){ 
    let addTwo = num2 + num1;
	return addTwo;
}

let numOne = parseInt(prompt("Number One"));
let numTwo = parseInt(prompt("Number Two"));
console.log(addTwoNumber(numOne,numTwo));
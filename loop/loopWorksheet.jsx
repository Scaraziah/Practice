"use strict";
//to run just double click HTML file in folder

//Write a for loop that will run five times and print “hello!” to the console five times
for(let i = 0; i < 5; i++){
    console.log("Hello")
}


//Write a for loop that counts from 0 to 10, with each number being print to the console one at a time
let endNumber = 10;
let startNumber = 0;
let numberCouter = true

while(numberCouter === true){
    if(startNumber === endNumber){
    console.log(startNumber)
    numberCouter = false
    }else{
        console.log(startNumber)
        startNumber++
    }
}
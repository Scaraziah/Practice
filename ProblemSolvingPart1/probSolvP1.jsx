"use strict";

// 1. Reverse a string
//     a. Write code that takes a string as input and returns the string reversed
//     b. i.e. “Hello” will be returned as “olleH”

function revString(){
    for(let i= revArr.length -1 ; i >= 0; i--){
        let newArr = revArr.charAt(i);
        let myWord = newArr;
        console.log(myWord);
    }
}
let revArr = prompt("Enter word in reverse.")
revString(revArr)
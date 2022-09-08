"use strict";

// 1. Reverse a string
//     a. Write code that takes a string as input and returns the string reversed
//     b. i.e. “Hello” will be returned as “olleH”

function revString(){
    for(let i= revArr.length; i >= 0; i--){
        let newArr = revArr.charAt(i);
        console.log(newArr);
    }
}
let revArr = prompt("Enter word in reverse.")
revString(revArr)
"use strict";

// 1. Reverse a string
//     a. Write code that takes a string as input and returns the string reversed
//     b. i.e. “Hello” will be returned as “olleH”

// function revString(){
//     for(let i= revArr.length -1 ; i >= 0; i--){
//         let newArr = revArr.charAt(i);
//         let myWord = newArr;
//         console.log(myWord);
//     }
// }
let revArr = prompt("Enter word in reverse.")
// revString(revArr)

let joinArray;
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
}
console.log(reverseString(revArr))

// 2. Capitalize letter
//   a. Write code that takes a string as input and capitalize the first letter of each word. Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase("hello world"));
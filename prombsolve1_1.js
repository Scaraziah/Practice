"use strict";

for(let i = 0; i < 100; i++){
        var printNumbers = i + 1; 
    if(printNumbers % 3 == 0 && printNumbers % 5 == 0){
         console.log("fizzbuzz");
    }
    else if(printNumbers % 3 == 0){
        console.log("fizz");
    }
    else if(printNumbers % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log(printNumbers);
    }
}


let greetWord = "olleH";
    
for (let i = greetWord.length; i >= 0; i--){
     console.log(greetWord.charAt(i));
}

// let newWord = prompt("Enter Word");
// function newRevWord(str){
//     let someWord = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         someWord = someWord+str[i];
//     }      
//     return someWord
// }

// console.log(newRevWord(newWord))


// // function toTitleCase(str) {
// //     return str.replace(/\w\S*/g, function(txt){
// //         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// //     });
// // }
// // console.log(toTitleCase("hello world"));


// let rLongNum = "aaabbbbbccccaacccbbbaaabbbaaa";
// for(let i = 0; i < rLongNum.length; i++){
//     console.log(rLongNum.charAt(i))


// function reverseString(str) {
//     var splitString = str.split(""); 
//     var reverseArray = splitString.reverse(); 
//     var joinArray = reverseArray.join("");;
//     return joinArray; 

// let rLongNum = "aaabbbbbccccaacccbbbaaabbbaaa";
// for(let i = 0; i < rLongNum.length; i++){
//     let j = rLongNum.charAt(i);
//     let k = j.concat(k);
//     console.log(k);
// }
let joinArray;
function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; 
}
console.log(reverseString("Good Gally"))

// let myWord = prompt("Enterword")
// let myRevWord = reverseString(myWord)
// if(myWord === myRevWord){
//     console.log("This is a Palindrome!")
// }
// else{
//     console.log("This is not a Palindrome.")
// }

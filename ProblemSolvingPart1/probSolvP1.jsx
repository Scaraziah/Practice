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
// revString(revArr)

let revArr = prompt("Enter word in reverse.")

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

// The / Is the beginning of a regex (regular expression). 
// The \w looks for all word characters in a string. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. 
// Now the \S is any character that is NOT a whitespace character. You were confusing it with \s(lowercase) which is for whitespace characters. 
// The * is a character that says to look for n zero or more times, where n is the metacharacter(the backslash tokens in the regex) in the regex.

// If you need more help go to: http://www.w3schools.com/jsref/jsref_obj_regexp.asp

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase("hello world"));


// 3. Compress a string of characters
//     a. For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

let rLongNum = "aaabbbbbccccaacccbbbaaabbbaaa";

function compNumb(str){
    let result = "";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        count++
        if(str[i] != str[i + 1]){
            result = result + str[i] + count;
            count = 0;
        }
    }
    console.log(result)
}

compNumb(rLongNum)


// 4.BONUS CHALLENGE: Palindrome
//     a. A word, phrase, or sequence that reads the same backward as forward i.e. madam
//     b. Write code that takes a user input and checks to see if it is a Palindrome and reports the result

let palArr = prompt("Enter word to check for Palindrome.")

let palJoinArray;
function palReverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var palJoinArray = reverseArray.join("");
    if(palArr == palJoinArray){
        console.log(palArr + " is a Palindrome!")
    }else{
        console.log(palArr + " isn't a Palidrome!")
    }
}
palReverseString(palArr)
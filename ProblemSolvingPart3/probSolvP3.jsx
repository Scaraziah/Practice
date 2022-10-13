"use strict";

// 1. Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//         a. Use Case:
//                 i. Given numbers in an array: [5, 17, 77, 50] 
//                 ii. Target: 55

let firstNumb = 0;
let secondNub = 0;
function givenTarget(n,m){
        for(let i = 0; i <= n.length; i++){
                for(let x = 0; x <= n.length; x++){
                        if(n[i] + n[x] === m){
                                // console.log( n[i], n[x]);
                                firstNumb = n[i];
                                secondNub = n[x];                               
                        };
                };
        };
        console.log(firstNumb, secondNub)
};
let arrOfNumb = [5, 17, 77, 50];
let targNumb = 55;
givenTarget(arrOfNumb, targNumb);

// 2. Palindrome is a word, phrase, or sequence that reads the same backward as forward i.e. madam. Write code that takes a user input and checks to see 
// if it is a Palindrome and reports the result. You must handle spaces. 

let revArr = prompt("Enter word in reverse.")
let joinArray = reverseString(revArr);
function reverseString(str) {
        let splitString = str.split(""); 
        let reverseArray = splitString.reverse(); 
        let joinArray = reverseArray.join("");
        return joinArray; 
}

let myWord = revArr
function palidromeWord(n,m){
        if( n === m){
                return true
        }else{
                return false
        }
};
console.log(palidromeWord(myWord, joinArray));



// 3. Given a list of integers, return a bool that represents whether or not all integers in the list can form a sequence of incrementing integers
//         Use case: 
//                 i. {5, 7, 3, 8, 6} 🡪 false (no 4 to complete the sequence)
//                 ii. {17, 15, 20, 19, 21, 16, 18} 🡪 true

let arrNumb = [17, 15, 20, 19, 21, 16, 18];
arrNumb.sort(function(a , b){
        return a - b;
});
function seqInt(str){
        for(let i = 0; i <= str.length; i++){
                if(str[i] + 1 === str[i+1]){
                        return true;
                }else{
                        return false;
                }
        };
};
let bolSeqInt = seqInt(arrNumb)
console.log(bolSeqInt);


// 4.Create a method that takes an array of positive and negative numbers. Return an array where the first element is the count of the positive numbers and the second element is the sum of negative numbers. 
//         a. Use case: [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]

let n = 0;
let x = 0;
let myStr = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21];
function addPosNegNumb(str){
        for(let i = 0; i <= str.length; i++){
                if(str[i] >= 0){
                        n = str[i] + n; 
                }else if(str[i] < 0){
                        x = str[i] - x;
                }
        }
        console.log(n, x)
}
addPosNegNumb(myStr);

// 5. Create a method that accepts a string of space separated numbers and returns the highest and lowest number as a string
//         a. Use case: “3 9 0 1 4 8 10 2” 🡪 “0 10”
let highNumb = null;
let lowNumb = null;

function numbRang(str){
        for(let i = 0; i<= str.length; i++){
                if(str[i] >= highNumb){
                        highNumb = str[i]
                }else if(str[i] <= lowNumb){
                        lowNumb = str[i]
                        }
                }
                console.log(lowNumb, highNumb)
}

let myRang = [3, 9, 0, 1, 4, 8, 10, 2];
numbRang(myRang);

// 6. Create a method that accepts a string, check if it’s a valid email address and returns either true or false 
// depending on the valuation. Think about what is necessary to have a valid email address.
//         a. Use case:
//                 i. “mike1@gmail.com” 🡪 true
//                 ii. “gmail.com” 🡪 false

function TOrFEmail(email){
        let myTest = /\S+@\S+\.\S+/;
        if(email.match(myTest)){
                return true;
        }else{
                return false;
        }
};
let myEmail = prompt("Enter email address!");
let testing = TOrFEmail(myEmail);
console.log(testing);



// 7. Create a method that takes in a string and replaces each letter with its appropriate position in the alphabet and returns the string
//         a. Use case:
//                 i. “abc” 🡪 “1 2 3”
//                 ii. “coding is fun” 🡪 “3 15 4 9 14 7 9 19 6 21 14”









// 8. A briefcase has a four-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards. 
// Write a method that returns the smallest number of turns it takes to transform the lock from current combination to the target combination. 
// One turn is equivalent to rolling a number forwards or backwards by one. 
//         a. Use case: 
//                 i. Current lock: 3893
//                 ii. Target lock: 5296
// 9. Happy Numbers
//         a. A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum 
//         of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
// 10. Given a number, return the reciprocal of the reverse of the original number, as a double. 
//         a. Use case: If given 17, return 0.01408 (1/71)

"use strict";

// 1. Write a function that has one parameter: array
//     a. Print to the console the value at the 0 index of the array
//     b. Return the value at the 0 index of the array
function NewArray(myArray){
    console.log(myArray[0]);
}
let ogArray = ["Pink", "Black"]
NewArray(ogArray);

// 2. Create an array and push the following values into the array: “blue”, “red”, “white”, “green”, “yellow”
//     a. Prompt the user to enter a color.
//     b. Iterate over the array. If the user inputted color matches any of the colors in the array, print to the console “You found my chosen color!”

ogArray.push("Blue", "Red", "White", "Green", "Yellow");
console.log(ogArray)

function promptColor(e){
    let myColor = prompt("Enter Color")
    for(let i = 0; i< e.length; i++){
        if(myColor === e[i]){
            console.log("You found my chosen color!");
        }else{
            console.log(`${myColor} is the wrong color at index ${i} of our array`);
        }
    }
}

promptColor(ogArray)

// 3. Write a function that has one parameter: an array
//     a. The array that is passed in needs to be an array of numbers
//     b. Find the most frequent value in the array and return that value
// function frequentNumbers(numberList){
//     let count = 0
//     let counter = 1
//     let mostUsed
//     for(let i = 0; i<numberList.length; i++){
//         for(let j=i; j<numberList.length; j++){
//             if(numberList[i] == numberList[j])
//             count++;
//                 if(counter<count)
//                     counter < count;
//                     counter = count
//                     mostUsed = numberList[i];
//         }
//         console.log(`${mostUsed} (${counter})`);
//     } 
//     count = 0
// }

// let arrayList = [3, 2, 3, 3, 2, 4, 9, 3]
// frequentNumbers(arrayList)



let rLongNum = "aaabbbbbccccaacccbbbaaabbbaaa";
for(let i = 0; i < rLongNum.length; i++){
    let j = rLongNum.charAt(i);
    let k = j.concat(k);
    console.log(k);
}

// const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let mf = 1;
// let m = 0;
// let item;
// for (let i=0; i<arr1.length; i++){
//         for (let j=i; j<arr1.length; j++){
//                 if (arr1[i] == arr1[j])
//                  m++;
//                 if (mf<m){
//                   mf=m; 
//                   item = arr1[i];
//                 }
//         }
//         m=0;
// }
// console.log(`${item} ( ${mf} times ) `) ;
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

let arr = [100,100,200,200,200,300,300,300,400,400,400,400];
let counts = {}, max = 0, res;
    for (var v in arr) {
      counts[arr[v]] = (counts[arr[v]] || 0) + 1;
      if (counts[arr[v]] > max) { 
        max = counts[arr[v]];
        res = arr[v];
      }

    }
let results = [];
    for (var k in counts){
      if (counts[k] == max){
        console.log(k + " occurs " + counts[k] + " times");
        results.push(k);
      }
    }
    console.log(results);



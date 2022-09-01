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


function freqNumber(){
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++){
        for (let j=i; j<arr1.length; j++)        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;
}

const arr1=[3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3];
freqNumber(arr1)


// 4.	Write a function that has one parameter: an array
  // a.	The array that is passed in needs to be an array of numbers
  // b.	Iterate over the array and add up all of the numbers inside of it
  // c.	If the sum of the numbers is even, return string “Even” from the function
  // d.	If the sum of the numbers is odd, return string “Odd” from the function

  function addNumb(){
    let addedNumb = 0;
    let oddNumb = "Odd";
    let evenNumb = "Even";
    for (let i = 0; i<arr2.length; i++){
      let numbToAdd = arr2[i]
      addedNumb = addedNumb + numbToAdd;
    }
    if(addedNumb % 2 == 0){
      console.log(addedNumb +" is " + evenNumb)
    }
    else{
    console.log(addedNumb +" is " + oddNumb)
    }
  }

const arr2=[3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3, 1];
addNumb(arr2)

// 5. Write a function that has two parameters: an array, a number
//   a. The array that is passed in needs to be an array of numbers
//   b. Iterate over the array and print to the console each value in the array that is greater than the number parameter

function higherNumb(arr3, myNumb){
  for(let i =0; i < arr3.length; i++){
    let testNumb = arr3[i];
    if(testNumb > myNumb){
    console.log(testNumb);
    }
  }
}

const arr3 = [3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3, 1];
let myNumb = 2;

higherNumb(arr3, myNumb);

// 6. Write a function that has one parameter: an array
//   a. The array that is passed in needs to be an array of numbers
//   b. Compute the average of the numbers inside the array
//   c. Any numbers in the array that are less than the computed average will be pushed into a separate array. That array will then be returned from the function.

function advNumb(){
  let adverage = 0;
  for(let i = 0; i < arr4.length; i++){
    let currentNumb = arr4[i];
    adverage += currentNumb;
  }
  adverage = adverage / arr4.length;
  console.log("The adverage is " + adverage);
  let m = [];
  for(let j = 0; j < arr4.length; j++){
    let newNumb = arr4[j]
    if(newNumb <= adverage){
      m.push(newNumb);
    }
  }
  console.log("These numbers are below adverage " + m);
}

const arr4 = [3, 10, 10, 10, 2, 3, 10, 3, 10, 2, 4, 9, 3, 1];
advNumb(arr4);


// 7. Write a function that has two parameters: an array, a number
//   a. Return the value in the array at the index represented by the number parameter
//   b. If there is no value at the specified index, print to the console “No value here!”

function chooseNumb(){
  let chosenNumb = prompt("Enter Number")
  for(let i=0; i < arr5.length; i++){
    if(chosenNumb == arr5[i]){
      console.log("The number chosen matches " + chosenNumb + " at index " + i)
    }else if (chosenNumb == ""){
      console.log("No value here!");
    }else{
    }
  }
}

const arr5 = [3, 10, 2, 4, 9, 1];
chooseNumb(arr5);

"use strict";

// for(let i = 0; i < 100; i++){
//         var printNumbers = i + 1; 
//     if(printNumbers % 3 == 0 && printNumbers % 5 == 0){
//          console.log("fizzbuzz");
//     }
//     else if(printNumbers % 3 == 0){
//         console.log("fizz");
//     }
//     else if(printNumbers % 5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(printNumbers);
//     }
// }

let numbers = [8, 5, 6, 16, 5];
let left = 1; 
let right = 3;
function boundRatio(numbers, left, right) {
    let b = numbers.map((el, i) => {
        let bounded = false;
        for (let x = left; x <= right; x++){
            if((i + 1) * x == el) {
                bounded = true;
                break;
            }
        }
        return bounded;
    })
    return b;
}
console.log(boundRatio(numbers, left, right));
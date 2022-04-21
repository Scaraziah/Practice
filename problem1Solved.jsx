// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] 
// = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example

// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

// let numbers = [8, 5, 6, 16, 5]


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



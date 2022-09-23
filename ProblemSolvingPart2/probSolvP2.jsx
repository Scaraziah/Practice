"use strict";

// 1. Happy Numbers
//     a.https://en.wikipedia.org/wiki/Happy_number
//     b. A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, 
        // and repeat the process until the number equals 1. An example of a happy number is 19
//     c. Write a method that determines if a number is happy or sad
let numb = prompt("Enter Number");
function isHappy(n){
        let map ={};
        while (n !== 1){
                let current = n;
                let sum = 0;
                while (current !== 0){
                        sum += ( current % 10)**2;
                        current = Math.floor(current/10);
                }
                if (map[sum]){
                        return false
                }
                map[sum] = true
                n = sum;
        }
        return true
};

console.log(isHappy(numb))

// 2. Prime Numbers
//     a. A prime number is a number that is only divisible by one and itself.
//     b. Write a method that prints out all prime numbers between 1 and 100 

function isPrime( n)
{
      // since 0 and 1 is not prime return false.
      if(n == 1 || n == 0) return false;
    
      // Run a loop from 2 to n-1
      for(var i = 2; i < n; i++)
      {
        
        // if the number is divisible by i, then n is not a prime number.
        if(n % i == 0) return false;
      }
      // otherwise, n is prime number.
      return true;
}
  
  
// Driver code
var N = 100;
  
// check for every number from 1 to N
  for(var i = 1; i <= N; i++)
  {
      // check if current number is prime
      if(isPrime(i)) {
        console.log( i );
      }
}
console.log(isPrime(N));









// 3. Fibonacci
//     a. A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
//     b. Write a method that does the Fibonacci sequence starting at 1
//     c. HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs

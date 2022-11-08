"use strict";


// To be a good problem solver, it is important to be able to break problems down. One way to go about this is to write out the steps it will take to solve the problem. 
// These steps are written down in English in a manner that are easily explainable to someone who may not be technical. The idea is that in order to code something out, you first need to have 
// a good understanding of what it is you are attempting to solve.
// For each of the problem solving problems below, write out the steps it will take to go about solving the problem. For example, once you are done writing out the steps for 
// the leap years problem, you would then write out the code to solve the problem. You would then repeat the process for each ensuing problem. Ideally, 
// this will be a good habit that you will develop and carry forward with you for all problems you encounter at devCodeCamp and beyond.

// 1. Write a method that prints the next 20 leap years.
// 2024 is the next leap year
//if years is a multiple of 4 and years is not evenly divisible by 100
//or years is evenly divisible by 100 and evenly divisible by 400
//it is a leap year

var year = prompt("please input a year to find out the next 20 leap years");
var counter = 20;
//no need for a result variable

//can have two arguments, first is the year entered by user
//second is how many leap years to display
function leapyear(years, num) {
    //convert years to integer
    years = parseInt(years);
    //cache reference to original number of leap years to be shown
    //for use in return statement
    var origNum = num;
    //add 1 to years just in case current year is leap year
    years++;
    //this string will hold all of the leap years
    var leapYears = '';
    //while num is above 0
    while (num > 0) {
        //if years is a multiple of 4 and years is not evenly divisible by 100
        //or years is evenly divisible by 100 and evenly divisible by 400
        //it is a leap year
        if (years % 4 === 0 && (years % 100 !== 0 || ( years % 100 === 0 && years % 400 === 0))) {
            //if at the last year
            if (num === 1) {
                //add a period to end
                leapYears += years + ".";
            }
            else {
                //otherwise, add a comma and space for other years
                leapYears += years + ", ";
            }
            //increase years
            years++;
            //decrease num
            num--;
        }
        else {
            //if not a multiple of 4, just add to years
            years++;
        }
    }
    //returns sentence after while loop is done
    return "The next " + origNum + " leap years are " + leapYears;
}

//write to document the result of running leapyear
document.write(leapyear(year, counter));
//or
//alert result of running leapyear
// alert(leapyear(year, counter));



// 2. Write a method that finds the longest palindromic substring of a given string.


// 3. Write a method to convert a given number to hours and minutes.



// 4. Write a method to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference



// 5. Write a method to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.



// 6. Write a method to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.



// 7. Write a method to check if a given string contains equal number of p's and t's present.



// 8. Write a method to compute the sum of all digits that occur in a given string. 




// 9. Write a method to check whether a given fraction is proper or not.  
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator 
// is less than the denominator, and improper otherwise.







// 10. Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.




// Problem Solving With Arrays
// 11. Write a method that returns the largest element in an array.





// 12. Write a method that rotates a list by k elements. You input a value for k that represents how many places in the array you want to rotate by. 
// For example, if k is rotated by 2, [1,2,3,4,5,6] becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the array. How many swap or move operations do you need?





// 13. Write methods that add, subtract, and multiply two numbers in their digit-array representation (and return a new digit list). If you’re ambitious you can implement Karatsuba 
// multiplication. Try different bases. What is the best base if you care about speed?














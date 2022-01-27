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
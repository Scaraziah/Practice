"use strict";

//Array
let progLanguages = ['Javascript', 'C#'];
progLanguages.push('Java');
progLanguages[8] = 'Swift';

console.log(progLanguages)

//'Javascript', 'C#', 'Java', <5 empty items>, 'Swift'
//length is 9. 

let progLanguages2 = ['Javascript', 'C#'];
progLanguages2.push('Java');
progLanguages2[3] = 'Swift';

let capturedResult = progLanguages2.pop()
console.log(capturedResult)

//Swift 

let progLanguages3 = [];
progLanguages3.push = ['C++']

console.log(progLanguages3)

//push: [ 'C++' ] 
//Example function: 
function DisplayName(name){
	console.log(name); //this is the logic of the function
}

//The above function takes in a variable, known as the parameter.
//In this example, that variable is name.
//The function then prints to the console the value that is passed in 

DisplayName("Mike");
DisplayName("Ian");
DisplayName("Nevin");

//Example 2
function AddOneToNumber(number){ 
	let numberOne = 1;
	let addOne = number + numberOne;
	return addOne;
}

let result = AddOneToNumber(30);

//Above we are now calling the function. This means using the function that we wrote.
//Here we are passing in an actual value. In this case, the value is "mike"


//Problem 1
//Write a function that takes in two numbers
//The logic of the function should add those two numbers together and return a sum
//Capture the returned value in a variable and print it to the console
function SumOneToNumber(numberOne, numberTwo){ 
	let addNumbers = numberOne + numberTwo;
	console.log(addNumbers)
	return addNumbers;
}
SumOneToNumber(2,4)

//Problem 2
//Write a function that takes in two strings
//The logic of the function should concatenate those two strings together and return the concatenated result
//Capture the returned value in a variable and print it to the console
function TwoStrings(firstSting, SecondString){
	let comboSting = firstSting + " " + SecondString;
	console.log(comboSting);
}

TwoStrings("Larry","Hatcher");

//Problem 3
//Write a function that takes in a string
//The logic of the function should print each character of the string one at a time to the console
//HINT: for loop is one way to do this
function StringOrder(newString){
	for(let i = 0; i < newString.length; i++){
		console.log(newString.charAt(i));
	}
}
StringOrder("Scary")

//Problem 4
//Write a function that takes in a string
//The logic of the function should print the string to the console but only if that string has three or more characters in it
//If it is less than three characters, then print to the console "we need a larger string to print!"
function BigWords(word){
	if(word.length >= 3){
		console.log(word)
	}else{
		console.log("We need a larger string to print!")
	}
}
BigWords("Bumblebee Tuna")
BigWords("Bu")
BigWords("Bum")
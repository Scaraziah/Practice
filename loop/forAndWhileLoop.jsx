//for Loop
for(let i = 0; i< 4; i++){
    console.log(i);
}

// 0
// 1
// 2
// 3


//while Loop
let favNumber = 3;
let counter = 0;
let continueInteration = true;

while(continueInteration === true){
    if(counter === favNumber){
        console.log("We found my fav number!");
        continueInteration = false;
    }else{
        console.log(counter);
        counter++;
    }
}

// 0
// 1
// 2
// We found my fav number!
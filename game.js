//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
alert(guess);
//check if guess is right 
if(Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT");
}
//check if guess is higher 
else if(Number (guess) > secretNumber){
    alert("Too high. Guess again!")
}

else{
    alert("Too low. Guess Again!");
}
//otherwise, check if lower
// Number Guessing Game
// the computer will generate a random number between 1 and 10
// the user will guess the number
// the program will tell if the guess is too high or too low
// finally it will show the number of attempts

console.log("Welcome to the Number Guessing Game!");
console.log("Try to guess a number between 1 and 10.");

let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let userGuess;

while(true){

    let userInput = prompt("Enter your guess:");

    userGuess = Number(userInput);

    attempts++;

    if(userGuess > randomNumber){
        console.log("Too High! Try again.");
    }

    else if(userGuess < randomNumber){
        console.log("Too Low! Try again.");
    }

    else if(userGuess === randomNumber){
        console.log("🎉 Congrats! You guessed the number in " + attempts + " attempts.");
        break;
    }

    else{
        console.log("Invalid input! Enter a number.");
    }

}
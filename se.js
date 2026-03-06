// Number Guessing Game

function numberGuessingGame(){

    console.log("Welcome to the Number Guessing Game!");

    // computer random number
    let randomNumber = Math.floor(Math.random()*10) + 1;

    let attempts = 0;
    let guess;

    while(true){

        guess = prompt("Enter a number between 1 and 10:");

        let userGuess = Number(guess);

        attempts++;

        if(userGuess < randomNumber){
            console.log("Too Low! Try again.");
        }

        else if(userGuess > randomNumber){
            console.log("Too High! Try again.");
        }

        else if(userGuess === randomNumber){
            console.log("Correct Guess!");
            console.log("Total Attempts: " + attempts);
            break;
        }

        else{
            console.log("Invalid Input!");
        }
    }
    const playAgainPrompt = prompt("Do you want to play again? (yes or no):");
    const playAgain =playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if(playAgain === "yes"){
        numberGuessingGame();
    }
    else{
        console.log("Thank you for playing! Goodbye!");
    }


}

// start the game
numberGuessingGame();
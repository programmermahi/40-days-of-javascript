//the rock ,the paper, the scissors game
//this is a game between the user and the computer.once the user clicks on one of the three options, the computer will randomly select one of the three options and the winner will be determined based on the rules of the game.
//the rules of the game are as follows:
//rock beats scissors
//scissors beats paper  
//paper beats rock
//if both the user and the computer select the same option, the game is a tie.
function rockPaperScissorsGame(){
    console.log("Welcome to the Rock, Paper, Scissors Game!");
    let userChoice = prompt("Please enter your choice (rock, paper, or scissors):");

    let userChoiceLower = userChoice.toLowerCase();
    let computerChoice ;

    let randomNumber = Math.floor(Math.random() * 3)+1;

    if(randomNumber === 1){
        computerChoice = "rock";
    }
    else if(randomNumber === 2){
        computerChoice = "paper";
    }   
    else if(randomNumber === 3){
        computerChoice = "scissors";
    }
    console.log("User's choice: " , userChoiceLower);
    console.log("Computer's choice: " , computerChoice);

    if(userChoiceLower === computerChoice){
        console.log("It's a tie!");
    }
    else if((userChoiceLower === "rock" && computerChoice === "scissors") ||
            (userChoiceLower === "scissors" && computerChoice === "paper") ||
            (userChoiceLower === "paper" && computerChoice === "rock")){    
        console.log("Congratulations! You win!");
    }
    else if ((userChoiceLower === "rock" && computerChoice === "paper") ||
             (userChoiceLower === "scissors" && computerChoice === "rock") ||
             (userChoiceLower === "paper" && computerChoice === "scissors"))    
                
    {
        console.log("Sorry! computer win!");
    }
    else{
        console.log("Invalid input! Please enter rock, paper, or scissors.");
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes or no):");
    const playAgain =playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if(playAgain === "yes"){
        rockPaperScissorsGame();
    }
    else{
        console.log("Thank you for playing! Goodbye!");
    }

}
//
//start the game
rockPaperScissorsGame();

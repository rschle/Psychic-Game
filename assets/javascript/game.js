
// Creates an array that lists out all of the options (letters of the alphabet)
 var computerChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//link the id's in the html code to variables so that we can 
// allow these to change with the variable

var wins = 0;
var losses = 0;
var guessRemain = 8;
// creating an empty array to log the user's guesses so far
userGuessesArray = [];


    

// Function that is  run whenever the user presses a key
document.onkeyup = function(event){

var totalWins = document.getElementById("win-count");
totalWins.textContent = wins;

var totalLosses = document.getElementById("loss-count");
totalLosses.textContent = losses;

var moreGuesses = document.getElementById("guess-count");
moreGuesses.textContent = guessRemain;

var pastGuesses = document.getElementById("previous-guesses");




    // Determines which key was pressed
    var userInput = event.key;
    console.log(userInput);
    //pastGuesses.textContent = userInput;
    
    

    // Randomly selects a letter from the option from the alphabet (Computer's Random Choice)
    var computerSelect = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerSelect[0]);


    

    //If the letter we type matches the computer's letter
    if(userInput === computerSelect){
        wins++;
        totalWins.textContent = wins;
        //have to figure out to clear guesses
        userGuessesArray = [];
        
    }

    // if you guess the wrong letter but still have guesses left greater than 0
    else if(userInput !== computerSelect && guessRemain > 0){
        guessRemain--;
        
        
        
    }

    //guess the wrong letter and have no guesses left
    else if(userInput!== computerSelect && guessRemain <= 0){
        guessRemain = 9;
        losses++;
        totalLosses.textContent = losses;
        userGuessesArray = [];
        //have to figure out how to return guesses left back to 9
    }

    userGuessesArray.push(userInput);
    pastGuesses.textContent = userGuessesArray;
    console.log(userGuessesArray);
    
}


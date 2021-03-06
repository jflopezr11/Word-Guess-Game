//reference
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

// Create variables for game
var wordBank = ['MF DOOM', 'Andre 3000', 'Ghostface Killah', 'Method Man','Lauryn Hill', 'King Los', 'Mos Def', 'Eminem','Redman', 'Nas']
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];


// Create a new game funtion
function newGame() {
    // Resets the game
    gameRunning = true;
    guessesLeft = 10;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderArr = [];
    //picking a new word
    pickedWord = wordBank [Math.floor(Math.random() * wordBank.length)];
    // placeholders for new pickedWord
    for (var i = 0; i < pickedWord.length; i++) {
        if(pickedWord[i] === ' ') {
            pickedWordPlaceholderArr.push (' ');
        } else {
            pickedWordPlaceholderArr.push ('_');
        }
    }

    //Dom
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    $guessedLetters.textContent = incorrectLetterBank;

}

//letterGuess- gets all letters that were guessed. 

function letterGuess(letter) {
    console.log (letter);

    if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        guessedLetterBank.push(letter);

        for (var i = 0; i < pickedWord.length; i++) {
            //Converting letters to lowercase
            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if it matches, it'll change it to what the placeholder actually has. 
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        $placeholders.textContent = pickedWordPlaceholderArr.join('');
        checkIncorrect(letter);

    }
    else {
        if(!gameRunning) {
            alert("Click on New Game Button to start a New Game");
        } else{
            alert ("You've used this letter already, try a new letter");
        }
    }
}

// checking for incorrect letters
function checkIncorrect(letter) {
    if (pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && 
    pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) ===-1) {
        guessesLeft--;
        incorrectLetterBank.push(letter);
        $guessedLetters.textContent = incorrectLetterBank.join(' ');
        $guessesLeft.textContent = guessesLeft;
    }
    checkLoss();
}

// checking if losing
function checkLoss() { 
    if(guessesLeft === 0) {
        losses ++;
        gameRunning = false;
        $losses.textContent = losses;
        $placeholders.textContent = pickedWord;

    }
    checkWin();
}
// check if winning
function checkWin() {
    if(pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase())
    {
        wins++;
        gameRunning === false;
        $wins.textContent = wins;
    }
}

// new game button
$newGameButton.addEventListener('click' , newGame);


// add onkeyup event to trigger letterGuess
document.onkeyup = function(event) {
    if (event.keyCode >= 48 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}
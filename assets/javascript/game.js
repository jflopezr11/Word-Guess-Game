// Create an array of Words
const word = ['MFDOOM', 'Andre3000', 'GhostfaceKilla', 'MethodMan','LaurynHill', 'KingLos', 'MosDef', 'Eminem','Redman', 'Nas']
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum]
let underScore = [];
console.log(choosenWord);
// Create underscores based on lenght of word
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// Get Users guesses
document.addEventListener('keypress', (event) => {   
    let keyword = String.fromCharCode (event.keyCode);
    console.log(keyword);

});
// Check if guess is right
// if right push to right array
// if incorrect push to wrong array
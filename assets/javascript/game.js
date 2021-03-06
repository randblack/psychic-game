var wins = 0;
var losses = 0;
var lives = 10;
var incorrectGuesses = "";
var notAllowed = 1234567890;
// random number generator
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function random() {
  return letter[Math.floor(Math.random() * letter.length)]
}
var secretLetter = random();
// game code
function runGame() {
  var guess = event.key;
  var key = window.event.keyCode;
  
// previous guesses validation
if ((key==49) || (key==50) || (key==51) || (key==52) || (key==53) || (key==54) || (key==55) || (key==56) || (key==57) || (key==48)) {
  return false;
}
  for (i = 0; i < incorrectGuesses.length; i++) {
    if (guess === incorrectGuesses[i]) {
      alert("You've already guessed that letter");
      return false;
    }
  }


  if (guess == secretLetter) {
    wins++;
    secretLetter = random();
    alert("You got it!");
    incorrectGuesses = "";
    lives = '10';
    random();
  } else {
    incorrectGuesses = incorrectGuesses + guess + " ";
    document.getElementById("incorrectGuesses").innerHTML = incorrectGuesses;
    lives--;
  }
  if (lives < 1) {
    losses++;
    lives = '10';
    secretLetter = random();
    incorrectGuesses = "";
    alert("I win!");
    random();
  }

// code to display game stats in document
  var currentWins = window.document.getElementById('wins');
  currentWins.innerText = wins;
  var currentLosses = window.document.getElementById('losses');
  currentLosses.innerText = losses;
  var guesses = window.document.getElementById('guesses');
  guesses.innerText = lives;
  var wrongAnswers = window.document.getElementById('incorrectGuesses');
  wrongAnswers.innerText = incorrectGuesses;
}

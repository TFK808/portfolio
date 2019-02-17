//-- Game variables --//
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;

var losses = 0;

var attempts = 10;

var usedLetters = [];


      //-- .onkeyup/down captures the players input as userGuess --//
document.onkeydown = function (event) {
      
      //-- User input --//
      var userGuess = event.key;

      //-- Generate a random letter --//
      var compGuess = compChoices [Math.floor (Math.random() * compChoices.length)];
      
      //-- Handling of Correct Guesses --//
      if (userGuess === compGuess) {
            wins++;
            attempts = 10;
            usedLetters = [];
      }

      //-- Handling of Incorrect Guesses --//
      if (userGuess !== compGuess) {
            attempts --;
            usedLetters = [];
      }

      //-- When remaining attempts equals 0, "var losses" incrimented by 1; --//
      //-- attempts are reset to 10, and usedLetters array is cleared. --//
      if (attempts === 0) {
            losses++;
            attempts = 10;
            usedLetters = [];
      }

      //-- Handling Incorrect Guesses - Output --//
      //-- prevents a letter selected a 2nd time from being written to the usedArray again. --//
      if (usedLetters.indexOf(userGuess) >= 0) {
            
      }
      else {
      //-- PUSHES the players incorrect guess to the usedLetters --//
            usedLetters.push(userGuess);
      }

      //-- OUTPUT To HTML --//
      //-- these statements write the values/scores generated to the HTML --//

      document.getElementById("won").innerHTML =  wins;
      document.getElementById("lost").innerHTML = losses;
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("playerGuess").innerHTML = usedLetters; 

};
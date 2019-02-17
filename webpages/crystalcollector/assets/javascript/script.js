//-- Main Function/Game --//
$(document).ready(function() {

    //-- Variables --//
    var wins = 0;
    $("#wins").text(wins);

    var losses = 0;
    $("#losses").text(losses);

    var userScore = 0;

    //-- List of Random Numbers = compChoices --//
    //--JS-- var compChoices = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]; --//

    var compChoices = Math.floor(Math.random()*101+19);

    //-- "compnumber"/compGuess Output to HTML --//
    //--JS-- document.getElementById("compnumber").innerHTML =  compGuess; --//
    $("#compnumber").text(compChoices);

    //-- compGuess random number generator from compChoices array --//
    //--JS-- var compGuess = compChoices[Math.floor (Math.random() * compChoices.length)]; --//

    //-- Random number generator for each crystal --//
    var crys01 = Math.floor(Math.random()*11+1);
    var crys02 = Math.floor(Math.random()*11+1);
    var crys03 = Math.floor(Math.random()*11+1);
    var crys04 = Math.floor(Math.random()*11+1);


    //-- Game Reset --//
    function reset() {
        compChoices = Math.floor(Math.random()*101 + 19);
        $("#compnumber").text(compChoices);
        crys01 = Math.floor(Math.random()*11+1);
        crys02 = Math.floor(Math.random()*11+1);
        crys03 = Math.floor(Math.random()*11+1);
        crys04 = Math.floor(Math.random()*11+1);
        userScore = 0;
        $("#totalscore").text(userScore);
    }

    //-- When the User Wins function --//
    function forTheWin () {
        alert("You Win!");
        wins++;
        //--"wins"/wins Output to HTML --//
        //--JS-- document.getElementById("wins").innerHTML = wins; --//
        $("#wins").text(wins);
        reset();
    }

    //-- When the User Loses function --//
    function forTheLoss () {
        alert("You lose.");
        losses++;
        //-- "losses"/losses Output to HTML
        //--JS-- document.getElementById("losses").innerHTML = losses; --//       
        $("#losses").text(losses);
        reset();
    };

    //-- When user clicks on crystal01/crys01 --//
    $("#crystal01").on("click", function() {
        userScore = userScore + crys01;
        //-- console.log("New userScore = " + userScore)
        $("#totalscore").text(userScore);

        //-- Win/Lose "if/else if" conditions--//
        if (userScore == compChoices) {
            forTheWin ();
        } else if (userScore > compChoices) {
            forTheLoss ();
        }
    })
    
    //-- When user clicks on crystal02/crys02 --//
    $("#crystal02").on("click", function() {
        userScore = userScore + crys02;
        //-- console.log("New userScore = " + userScore)
        $("#totalscore").text(userScore);

        //-- Win/Lose "if/else if" conditions--//
        if (userScore == compChoices) {
            forTheWin ();
        } else if (userScore > compChoices) {
            forTheLoss ();
        }
    })

    //-- When user clicks on crystal03/crys03 --//
    $("#crystal03").on("click", function() {
        userScore = userScore + crys03;
        //-- console.log("New userScore = " + userScore)
        $("#totalscore").text(userScore);

        //-- Win/Lose "if/else if" conditions--//
        if (userScore == compChoices) {
            forTheWin ();
        } else if (userScore > compChoices) {
            forTheLoss ();
        }
    })

    //-- When user clicks on crystal04/crys04 --//
    $("#crystal04").on("click", function() {
        userScore = userScore + crys04;
        //-- console.log("New userScore = " + userScore)
        $("#totalscore").text(userScore);

        //-- Win/Lose "if/else if" conditions--//
        if (userScore == compChoices) {
            forTheWin ();
        } else if (userScore > compChoices) {
            forTheLoss ();
        }
    })
});
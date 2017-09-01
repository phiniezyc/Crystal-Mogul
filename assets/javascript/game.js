// Global Variables =================================================
/* We get our random numbers by pushing random numbers between 1 and 12 into an array 4 times.*/
var fourRandomPointsToBeAssigned = [];
var targetScoreNumber = 0;

var gem1PointValue = 0;
var gem2PointValue = 0;
var gem3PointValue = 0;
var gem4PointValue = 0;

//How many times each button pushed total
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

var userPoints = 0;
var wins = 0;
var losses = 0;


// Functions =============================================


function generateRandomPointsForButtons() {
    /* Each button has a preassigned index position, so it just gets whatever random number is in that position */
    for (var i = 0; i < 4; i++) {
        fourRandomPointsToBeAssigned.push(Math.floor(Math.random() * 12) + 1);
            gem1PointValue = fourRandomPointsToBeAssigned[0];
            gem2PointValue = fourRandomPointsToBeAssigned[1];
            gem3PointValue = fourRandomPointsToBeAssigned[2];
            gem4PointValue = fourRandomPointsToBeAssigned[3];
    }
    console.log(fourRandomPointsToBeAssigned);
    console.log(gem1PointValue);
}

function generateTargetScore() {
    targetScoreNumber = (Math.floor(Math.random() * 120) + 19);
    document.getElementById("targetScoreNumber").innerHTML = targetScoreNumber;
}

function addButtonClickToUserPoints() {
        gem1 = document.getElementById("gem1");
        gem1.onclick = function () {
            userPoints += gem1PointValue;
            console.log("Testing", userPoints);
            evaluateRound();
            document.getElementById("userTotalScoreSection").innerHTML = userPoints;


        };

        gem2 = document.getElementById("gem2");
        gem2.onclick = function () {
            userPoints += gem2PointValue;
            console.log("Testing", userPoints);
            evaluateRound();
            document.getElementById("userTotalScoreSection").innerHTML = userPoints;

        };

        gem3 = document.getElementById("gem3");
        gem3.onclick = function () {
            userPoints += gem3PointValue;
            console.log("Testing", userPoints);
            evaluateRound();
            document.getElementById("userTotalScoreSection").innerHTML = userPoints;
        };

        gem4 = document.getElementById("gem4");
        gem4.onclick = function () {
            userPoints += gem4PointValue;
            console.log("Testing", userPoints);
            evaluateRound();
            document.getElementById("userTotalScoreSection").innerHTML = userPoints;
        };
}



function evaluateRound() {
    if (userPoints === targetScoreNumber) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        console.log("Summer");
        reset();
    } else if (userPoints > targetScoreNumber) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        reset();
    }
};

function reset() {
    userPoints = 0;
    generateTargetScore();
    generateRandomPointsForButtons();

}


// App Mechanics =============================================
generateRandomPointsForButtons();
addButtonClickToUserPoints();
generateTargetScore()
evaluateRound();




















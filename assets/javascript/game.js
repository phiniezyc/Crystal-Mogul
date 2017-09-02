// Global Variables =================================================
/* We get our random numbers by pushing random numbers between 1 and 12 into an array 4 times.*/
var fourRandomPointsToBeAssigned = [];
var targetScoreNumber = 0;
//How many points each button gets/round
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
}

function generateTargetScore() {
    targetScoreNumber = (Math.floor(Math.random() * 120) + 19);
    $("#targetScoreNumber").html(targetScoreNumber);
}

function addButtonClickToUserPoints() {
    $("#gem1").click(function () {
        userPoints += gem1PointValue;
        evaluateRound();
        $("#userTotalScoreSection").html(userPoints);
    });

    $("#gem2").click(function () {
        userPoints += gem2PointValue;
        evaluateRound();
        $("#userTotalScoreSection").html(userPoints);
    });
    $("#gem3").click(function () {
        userPoints += gem3PointValue;
        evaluateRound();
        $("#userTotalScoreSection").html(userPoints);
    });
    $("#gem4").click(function () {
        userPoints += gem4PointValue;
        evaluateRound();
        $("#userTotalScoreSection").html(userPoints);
    });
}

function evaluateRound() {
    if (userPoints === targetScoreNumber) {
        wins++;
        reset();
        $("#wins").html("Wins: " + wins);
    } else if (userPoints > targetScoreNumber) {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    }
}

function reset() {
    userPoints = 0;
    generateTargetScore();
    generateRandomPointsForButtons();
}

// JQuery ========================================================
$(document).ready(function () {
    // Is this necessary since I linked instead of directly in html?
});

// App Mechanics =============================================

generateRandomPointsForButtons();
addButtonClickToUserPoints();
generateTargetScore()
evaluateRound();




















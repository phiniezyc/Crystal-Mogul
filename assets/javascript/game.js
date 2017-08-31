

/* Generates Random Gem Point Value
============================================================================ */

//var userScore = [];
/* We get our random numbers by pushing random numbers between 1 and 12 into an array 4 times.*/
var fourRandomPointsToBeAssigned = [];
/* Each button has a preassigned index position, so it just gets whatever random number is in that position */
for (var i = 0; i < 4; i++) {
    fourRandomPointsToBeAssigned.push(Math.floor(Math.random() * 12) + 1)
    var gem1PointValue = fourRandomPointsToBeAssigned[0];
    var gem2Pointvalue = fourRandomPointsToBeAssigned[1];
    var gem3PointValue = fourRandomPointsToBeAssigned[2];
    var gem4PointValue = fourRandomPointsToBeAssigned[3];
};
console.log(fourRandomPointsToBeAssigned);

/* Adding total points by using the individual button points as our parameter */
/*function addTotalScore(button1Points, button2Points, button3Points, button4Points) {
    button1Points + button2Points + button3Points + button4Points;
}*/

// since it's automatically set to undefined just set it empty to pass values to it; var UserPoints = 0


var userPoints = 0;

//CODE DOESN'T WORK BECAUSE IT'S INSIDE FUNCTION THAT CONSOLE.LOG CAN'T READ INSIDE!
var gem1 = document.getElementById("gem1")
gem1.onclick = function () {
    userPoints += gem1PointValue;
    //console.log(userPoints);
};

var get2 = document.getElementById("gem2")
gem2.onclick = function () {
    userPoints += gem2Pointvalue;
    //console.log(userPoints);
};

var gem3 = document.getElementById("gem3")
gem3.onclick = function () {
    userPoints += gem3PointValue;
    //console.log(userPoints);
};

var gem4 = document.getElementById("gem4")
gem4.onclick = function () {
    userPoints += gem4PointValue;
    console.log(userPoints);
};


document.getElementById("gem1").innerHTML = gem1PointValue;
//document.getElementById("gem2").onclick = "addToUserScore(gem2Pointvalue)";

//document.getElementById("gem3").onclick(yellow());
document.getElementById("gem4").innerHTML = gem4PointValue;


/* User total score
========================================================================= */


document.getElementById("userTotalScoreSection").innerHTML = userPoints;


/* Generate Random Target Score Number
=============================================================================== */

var targetScoreNumber = (Math.floor(Math.random() * 120) + 19);
document.getElementById("targetScoreNumber").innerHTML = targetScoreNumber;




/* Logic added to Win/Loss Secection
================================================================================ */


var wins = 0;
var losses = 0;

if (userPoints >= targetScoreNumber) {
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;

}


















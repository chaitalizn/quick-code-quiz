// JavaScript Document
var strButtonEl = document.querySelector("#start-btn");
var displayScoresEl = document.querySelector("#displayScores");
var allScores;

function displayAllScores() {
	allScores = JSON.parse(localStorage.getItem('scores'));

for (var i = 0; i < allScores.length; i++) {
	var displayLine = document.createElement("li");
	displayLine.textContent = allScores[i].user + " scored " + allScores[i].score;
	displayScoresEl.appendChild(displayLine);
	}

findHighestScore()

}

strButtonEl.addEventListener("click", retakeQuiz);

function retakeQuiz(){
  location.href = "index.html";
}

// find the highest score
function findHighestScore() {
	var highest = 0;
	var userNameHighest;

    for (var i=0; i<allScores.length; i++) {
    if (allScores[i].score > highest) {
        highest = allScores[i].score;
		userNameHighest = allScores[i].user;
		
	var displayHighest = document.querySelector("#highest");
	displayHighest.textContent = "highest score is " + highest + " by " + userNameHighest;

    }
}
}

displayAllScores();

//loop through the 'scores' key in local storage and render a row for each index of the array
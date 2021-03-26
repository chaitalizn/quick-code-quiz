

var questions = [
    {question: "Inside which HTML element do we put the JavaScript?",
    option1: "<script>",
    option2: "<scripting>",
    option3: "<javascript>",
    answer: "A"
},
    {question: "How to write an IF statement in JavaScript?",
    option1: "if i =! 5 then",
    option2: "if (i <> 5)",
    option3: "if (i != 5)",
    answer: "C"
},
    {question: "Where is the correct place to insert a JavaScript?",
    option1: "The <body> section",
    option2: "Both the <head> & the <body> section are correct",
    option3: "The <head> section",
    answer: "B"
},
    {question: "How does a WHILE loop start?",
    option1: "while i = 1 to 10",
    option2: "while (i <= 10)",
    option3: "while (i <= 10) i++",
    answer: "B"
},
    {question: "How does a FOR loop start?",
    option1: "for (i <= 5; i++)",
    option2: "for (i = 0; i <=5)",
    option3: "for (i=0; i <= 5; i ++)",
    answer: "C"
},
    {question: "How do you round the number 7.25, to the nearest integer?",
    option1: "Math.round(7.25)",
    option2: "Math.rnd(7.25)",
    option3: "round(7.25)",
    answer: "A"
}
]

var strButtonEl = document.querySelector("#start-btn");
var mainContainerEl = document.querySelector("#main-container")
var timerEl = document.querySelector("#time");
var timeLeft = 60;
var questionNumber = 0;
var endContainerEl = document.querySelector(".end-container");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var userName = document.querySelector("#username");
var userScore = 0;
var displayScoreEl = document.querySelector("#high-score");
var answer;
var storeScore;
var allScores = [];

//timer function


function countdown() {

    setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = "Remaining Time: " + timeLeft;
        }
        else {
            mainContainerEl.remove();
            endContainerEl.style.display = "block"; 
        }
    }, 1000);
}

strButtonEl.addEventListener("click", startQuiz);

function startQuiz() {
    
    countdown();
    
    displayQuestion();
    
}

function displayQuestion() {
	
	var quizIntro = document.querySelector(".quiz-intro");
	quizIntro.style.display = "none";
	strButtonEl.style.display = "none";

    var questionEl = document.querySelector("#questions");
	questionEl.style.display = "block";
	questionEl.textContent = questions[questionNumber].question;
 
	var optionOne = document.querySelector("#option-1");
	optionOne.style.display = "block";
    optionOne.value = "A";
    optionOne.textContent = questions[questionNumber].option1;
    
    var optionTwo = document.querySelector("#option-2");
	optionTwo.style.display = "block";
    optionTwo.value = "B";
    optionTwo.textContent = questions[questionNumber].option2;

    var optionThree = document.querySelector("#option-3");
	optionThree.style.display = "block";
    optionThree.value = "C";
    optionThree.textContent = questions[questionNumber].option3;
 
    mainContainerEl.addEventListener("click", optionButtonHandler);
}

var optionButtonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".option-btn")) {
        answer = event.target.value;
        checkAnswer();
        questionNumber++;       
        //next question
        if(questionNumber >= questions.length){
            mainContainerEl.remove();
            endContainerEl.style.display = "block"; 
        }
        else{
            displayQuestion();
        }
    }
}; 

function checkAnswer() {
    if (answer === questions[questionNumber].answer) {
        userScore += 10;
        var answerResultEl = document.querySelector("#answer-result");
		answerResultEl.style.display = "block";
		answerResultEl.textContent = "Correct!";
   
    } else {
        timeLeft -= 10;
        answerResultEl = document.querySelector("#answer-result");
		answerResultEl.style.display = "block";
		answerResultEl.textContent = "Wrong! You lost 5s from your remaining time";
        
    }
}



    
saveScoreBtn.addEventListener("click", saveScore);

function saveScore(){
    if (userName.value) {
    var yourScore = document.createElement("h2");
    yourScore.textContent = userName.value + " scored " + userScore;
	yourScore.className = "score-text";
    endContainerEl.appendChild(yourScore);
		
		
	storeScore = {
			user: userName.value,
			score: userScore
	};
	allScores = JSON.parse(localStorage.getItem('scores')) || [ ];
	allScores.push(storeScore);
	localStorage.setItem("scores", JSON.stringify(allScores));	
	
    } else {
        alert("Please enter your name!");
    }
}

displayScoreEl.addEventListener("click", highScore);

function highScore() {
   
	displayScoreEl.setAttribute("href", "highscore.html");
	
}


	


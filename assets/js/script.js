

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
    option3: "if (i != 5)'",
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
    option3: "while (i <= 10; i++",
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

var buttonEl = document.querySelector("#start-btn");
var quizIntro = document.querySelector("#quiz-intro");
var mainEl = document.querySelector("#main");
//var questionsAnswered = 0;
var timerEl = document.querySelector(".time");
var score = 0;
var timeLeft = 30;
var displayScoreEl = document.querySelector("#high-score");
var questionEl = document.querySelector("#present-q");
var finalScoreBoardEl = document.querySelector(".end-container");
var questionNumber = 0;
var saveButton = document.getElementById("saveScoreBtn");
var savedScore = localStorage.getItem("score");
var username = document.querySelector("#username");
var formContainer = document.querySelector("#form-container");
buttonEl.addEventListener("click", startQuiz);

function startQuiz() {
    //quizIntro.remove();
    countdown();
    
    displayQuestion();
    
}

function displayQuestion() {

    quizIntro.innerHTML = "";
    quizIntro.innerHTML = "<h2>" + questions[questionNumber].question + "</h2>";
    //quizIntro.appendChild(question);
// question.className = "main-flex";

    var optionButton1 = document.createElement("button");
    optionButton1.value = "A";
    optionButton1.textContent = questions[questionNumber].option1;
    quizIntro.appendChild(optionButton1);
    optionButton1.className= "option-btn";

    var optionButton2 = document.createElement("button");
    optionButton2.value = "B";
    optionButton2.textContent = questions[questionNumber].option2;
    quizIntro.appendChild(optionButton2);
    optionButton2.className= "option-btn";

    var optionButton3 = document.createElement("button");
    optionButton3.value = "c";
    optionButton3.textContent = questions[questionNumber].option3;
    quizIntro.appendChild(optionButton3);
    optionButton3.className= "option-btn";

    //questionsAnswered++;

    quizIntro.addEventListener("click", optionButtonHandler);
}

var optionButtonHandler = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".option-btn")) {
        answer = event.target.value;
        checkAnswer();
        questionNumber++;
        console.log(questionNumber);

        //next question
        if(questionNumber >= questions.length){
            quizIntro.remove();
            finalScoreBoardEl.style.display = "block"; 
        }
        else{
            displayQuestion();
        }
    }
}; 

function checkAnswer() {
    if (answer === questions[questionNumber].answer) {
        score += 10;
        localStorage.setItem("score", score);
        //var result = document.createElement("h2");
        //result.textContent = "Correct!";
        //mainEl.appendChild(result);
        //result.className = "result-style";
   
    } else {
        timeLeft -= 10;
        //var result = document.createElement("h2");
        //result.textContent = "Wrong! You lost 10s from remaining time.";
        //mainEl.appendChild(result);
        //result.className = "result-style";
        
    }
};



function countdown() {

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.textContent = "Remaining Time: " + timeLeft;
        }
        else {
            quizIntro.remove();
            finalScoreBoardEl.style.display = "block"; 
        }
    }, 1000);
};


displayScoreEl.addEventListener("click", highScore);

function highScore() {
    formContainer.innerHTML = "";
    var scoreOne = document.createElement("h2");
    scoreOne.textContent = "Your Score " + savedScore;
    formContainer.appendChild(scoreOne);
    scoreOne.className = "result-style";

    var startAgain = document.createElement("button");
    startAgain.textContent = "Retake Quiz";
    startAgain.className = "btn";
    formContainer.appendChild(startAgain);
    

    startAgain.addEventListener("click", function(){
        window.location.reload();
    });
}


    
saveScoreBtn.addEventListener("click", saveScore);

function saveScore(){
    if (username.value) {
    var yourScore = document.createElement("h2");
    yourScore.textContent = username.value + " scored " + score;
    formContainer.appendChild(yourScore);
    yourScore.className = "result-style";
    
    localStorage.setItem("Name", username.value);
    } else {
        alert("Please enter your name!");
    }
}

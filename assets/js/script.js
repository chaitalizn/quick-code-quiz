
var questions = [
    {question: "Inside which HTML element do we put the JavaScript?",
    option1: "<script>",
    option2: "<scripting>",
    option3: "<javascript>",
    answer: "<script>"
},
    {question: "What is the correct JavaScript syntax to change the content of this <p id='demo'>This is a demonstration.</p> HTML element?",
    option1: "document.getElementName('p').innerHTML = 'Hello World!'",
    option2: "document.getElement('p').innerHTML = 'Hello World!'",
    option3: "document.getElementById('demo').innerHTML = 'Hello World!'",
    answer: "document.getElementById('demo').innerHTML = 'Hello World!'"
},
    {question: "Where is the correct place to insert a JavaScript?",
    option1: "The <body> section",
    option2: "Both the <head> section and the <body> section are correct",
    option3: "The <head> section",
    answer: "Both the <head> section and the <body> section are correct"
}
]

var buttonEl = document.querySelector("#start-btn");
var quizIntor = document.querySelector("#quiz-intro");
var mainEl = document.querySelector("#main");



buttonEl.addEventListener("click", startQuiz);

function startQuiz() {
    quizIntor.remove();
    displayQuestion();
}

function displayQuestion() {
    for (i = 0; i < questions.length; i++) {
    var question = document.createElement("h2");
    question.textContent = questions[i].question;
    mainEl.appendChild(question);
    question.className = "main-flex";

    var optionButton1 = document.createElement("button");
    optionButton1.textContent = questions[i].option1;
    question.appendChild(optionButton1);
    optionButton1.className= "option-btn";

    var optionButton2 = document.createElement("button");
    optionButton2.textContent = questions[i].option2;
    question.appendChild(optionButton2);
    optionButton2.className= "option-btn";

    var optionButton3 = document.createElement("button");
    optionButton3.textContent = questions[i].option3;
    question.appendChild(optionButton3);
    optionButton3.className= "option-btn";

}
}



/*
4 How do you create a function in JavaScript?
function:myFunction()
A function myFunction()
function = myFunction()

5 How to write an IF statement in JavaScript?
if i == 5 then
if i = 5
A if (i == 5)

6 How to write an IF statement for executing some code if "i" is NOT equal to 5?

if i =! 5 then
if (i <> 5)
A if (i != 5)

7 How does a WHILE loop start?
while i = 1 to 10
A while (i <= 10)
while (i <= 10; i++)

8 How does a FOR loop start?
for (i <= 5; i++)
for (i = 0; i <=5)
A for (i=0; i <= 5; i ++)

9 What is the correct way to write a JavaScript array?
A var color = ["red", "green", "blue"]
var color = 1 = ("red"), 2 = ("green"), 3 = ("blue")
var color = (1:"red", 2:"green", 3:"blue")

10 How do you round the number 7.25, to the nearest integer?
A Math.round(7.25)
Math.rnd(7.25)
round(7.25)

*/
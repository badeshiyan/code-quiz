// code quiz questions
console.log("Hello World");

var quizquestions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition of an if / else statement is enclosed within _______.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store ________.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is.",
    options: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

var timer = document.querySelector(".time");
var question = document.querySelector(".question");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //   timer.textContent = " ";
      alert("Your time is up!");
    }
  }, 1000);
}
function myTest() {
  setTime();
  for (var i = 0; i < quizquestions.length; i++) {
    question.textContent = quizquestions[i].question;
    btn1.textContent = quizquestions[i].options[0];
    btn2.textContent = quizquestions[i].options[1];
    btn3.textContent = quizquestions[i].options[2];
    btn4.textContent = quizquestions[i].options[3];
  }
}
myTest();
btn1.addEventListener("click", null);
btn2.addEventListener("click", null);
btn3.addEventListener("click", null);
btn4.addEventListener("click", null);

// code quiz questions
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

// var timer = document.querySelector(".timer");
var main = document.querySelector(".main");
var secondsLeft = 75;
var index = 0;

/*
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
*/

function startQuiz() {
  // clear any html code that may already exist
  // re-initialize main variables, in case you are re-running the quiz again

  var quizHeader = document.createElement("p");
  quizHeader.textContent = "Coding Quiz Challenge";

  var instructions = document.createElement("p");
  instructions.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

  var startQuizBtn = document.createElement("button");
  startQuizBtn.textContent = "Start Quiz";

  main.appendChild(quizHeader);
  main.appendChild(instructions);
  main.appendChild(startQuizBtn);

  startQuizBtn.addEventListener("click", function () {
    displayQuiz();
  });
}

function displayQuiz() {
  main.innerHTML = "";
  if (index == quizquestions.length) {
    recordScore();
  } else {
    var question = document.createElement("p");
    question.textContent = quizquestions[index].question;
    main.appendChild(question);

    for (var i = 0; i < quizquestions[index].options.length; i++) {
      var answerBtn = document.createElement("button");
      answerBtn.textContent = quizquestions[index].options[i];
      main.appendChild(answerBtn);

      answerBtn.addEventListener("click", function () {
        checkAnswer();
        index++;
        displayQuiz();
      });
    }
  }
}

function checkAnswer() {
  alert("answer");
}

function recordScore() {
  alert("quiz over");
}

startQuiz();
// additional comments go here

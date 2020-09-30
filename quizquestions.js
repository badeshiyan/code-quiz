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

var timer = document.querySelector(".timer");
var scoreElement = document.querySelector(".score");
var main = document.querySelector(".main");
var answeralert = document.querySelector(".answeralert");
var secondsLeft = 75;
var index = 0;
var score = 0;
var scoreArray = [];

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Your time is up!");
      recordScore();
    }
  }, 1000);
}

function startQuiz() {
  main.innerHTML = "";
  secondsLeft = 75;
  index = 0;
  score = 0;

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
    setTime();
    scoreElement.textContent = "Score: " + score;
    displayQuiz();
  });
}

function displayQuiz() {
  main.innerHTML = "";

  setTimeout(function () {
    answeralert.textContent = "";
  }, 2000);

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
        checkAnswer(this.textContent);
        index++;
        displayQuiz();
      });
    }
  }
}

function checkAnswer(answer) {
  if (quizquestions[index].answer === answer) {
    score++;
    scoreElement.textContent = "Score: " + score;
    answeralert.textContent = "Correct";
  } else {
    answeralert.textContent = "Wrong";
    secondsLeft -= 10;
  }
}

function recordScore() {
  main.innerHTML = "";

  setTimeout(function () {
    scoreElement.textContent = "";
  }, 0);

  var scoreHeader = document.createElement("p");
  scoreHeader.textContent = "All Done!";

  var finalScore = document.createElement("p");
  finalScore.textContent = "Your final score is " + score;

  var initialsLabel = document.createElement("label");
  initialsLabel.textContent = "Enter initials:";

  var initialsBox = document.createElement("input");
  initialsBox.id = "UserInitials";

  var submitInitialsBtn = document.createElement("button");
  submitInitialsBtn.textContent = "Submit";

  main.appendChild(scoreHeader);
  main.appendChild(finalScore);
  main.appendChild(initialsLabel);
  main.appendChild(initialsBox);
  main.appendChild(submitInitialsBtn);

  submitInitialsBtn.addEventListener("click", function () {
    var scoreObject = {
      objInitials: document.getElementById(initialsBox.id).value,
      objScore: score,
    };

    scoreArray.push(scoreObject);
    showHighScores();
  });
}

function showHighScores() {
  main.innerHTML = "";

  // sort the array of scoreObjects in descending order (i.e. largest to smallest)

  var highScoresHeader = document.createElement("p");
  highScoresHeader.textContent = "Highscores";
  main.appendChild(highScoresHeader);

  var ol = document.createElement("ol");
  main.appendChild(ol);

  for (var i = 0; i < scoreArray.length; i++) {
    var highScoresList = document.createElement("li");
    highScoresList.textContent =
      scoreArray[i].objInitials + " - " + scoreArray[i].objScore;
    ol.appendChild(highScoresList);
  }

  var goBackBtn = document.createElement("button");
  goBackBtn.textContent = "Go Back";

  var clearHighScoresBtn = document.createElement("button");
  clearHighScoresBtn.textContent = "Clear High Scores";

  main.appendChild(goBackBtn);
  main.appendChild(clearHighScoresBtn);

  goBackBtn.addEventListener("click", function () {
    startQuiz();
  });

  clearHighScoresBtn.addEventListener("click", function () {
    scoreArray = [];
    showHighScores();
  });
}

startQuiz();

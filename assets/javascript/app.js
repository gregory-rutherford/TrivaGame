var correctCounter = 0;
var incorrectCounter = 0;
var incorrectAnswers = 0;
var count;
var counter = 15;
var questionIndex = 0;
var question;
var answers;
var correctAnswer;
var pic;

var questionsAnswers = [
  {
    question: "Who was the original creator of Ziggy?",
    answers: ["Tom Wilson", "Charles Schulz", "Jim Davis", "Kathy Guisewite"],
    correctAnswer: "Tom Wilson",
    pic: "<img src='assets/images/tomwilson.webp'>"
  },
  {
    question: "What is the name of Ziggy's pet dog?",
    answers: ["Buzz", "Fuzz", "Poochy", "Samuel"],
    correctAnswer: "Fuzz",
    pic: "<img src ='assets/images/fuzz.jpeg'>"
  },
  {
    question: "What is the name of Ziggy's christmas special?",
    answers: [
      "Ziggy's Gift",
      "Ziggy Christmas Special",
      "The Grinch featuring Ziggy",
      "Ziggy's Big Christmas"
    ],
    correctAnswer: "Ziggy's Gift",
    pic: "<img src ='assets/images/gift.jpeg'>"
  },
  {
    question: "What kind of pants does Ziggy wear?",
    answers: ["Blue Jeans", "Khakis", "Courdoroys", "No Pants!"],
    correctAnswer: "No Pants!",
    pic: "<img src ='assets/images/pants-on-ziggy.gif'>"
  },
  {
    question: "What year was the first Ziggy comic launched in?",
    answers: ["2001", "1992", "1987", "1971"],
    correctAnswer: "1971",
    pic: "<img src ='assets/images/firstzig.png'>"
  }
];

$("#startButton").on("click", function() {
  $(this).hide();
  countDown(counter);
  questionDom();
  $("#questionFrame").show();
  $("#answersFrame").show();
  $("#timerFrame").show();
});

//timer that begins at each new question
function countDown(x) {
  $("#timerFrame").html(
    "<h2>Time Remaining: " + x + " " + "<i class='fas fa-bomb'></i></h2>"
  );
  count = setInterval(function() {
    x--;
    if (x === -1) {
      incorrectDom();
      incorrectCounter++;
      setTimeout(nextQuestion, 3000);
      return clearInterval(count);
    }
    $("#timerFrame").html(
      "<h2>Time Remaining: " + x + " " + "<i class='fas fa-bomb'></i></h2>"
    );
  }, 1000);
}
// writes the question and answers to the page
function questionDom() {
  $("#questionFrame").text(questionsAnswers[questionIndex].question);
  $("#answersFrame").html(
    "<p class='answer'>" +
      questionsAnswers[questionIndex].answers[0] +
      "</p>" +
      "<p class='answer'>" +
      questionsAnswers[questionIndex].answers[1] +
      "</p>" +
      "<p class='answer'>" +
      questionsAnswers[questionIndex].answers[2] +
      "</p>" +
      "<p class='answer'>" +
      questionsAnswers[questionIndex].answers[3] +
      "</p>"
  );
}
//makes each answer clickable, compares the correct answers and calls the correct or incorrect dom functions
$(document).on("click", ".answer", function() {
  setTimeout(nextQuestion, 3000);
  if ($(this).text() === questionsAnswers[questionIndex].correctAnswer) {
    correctDom();
    correctCounter++;
    clearInterval(count);
  } else {
    incorrectDom();
    incorrectCounter++;
    clearInterval(count);
  }
});
//hides the question and answer elements and displays the correct answer screen
function correctDom() {
  $("#questionFrame").hide();
  $("#answersFrame").hide();
  $("#winFrame").show();
  $("#winFrame").html("<p>Correct!</p>" + questionsAnswers[questionIndex].pic);
}
// same as above but shows the incorrect screen
function incorrectDom() {
  $("#questionFrame").hide();
  $("#answersFrame").hide();
  $("#loseFrame").show();
  $("#loseFrame").html(
    "<p> You guessed wrong! The correct answer is: " +
      questionsAnswers[questionIndex].correctAnswer +
      "</p>" +
      questionsAnswers[questionIndex].pic
  );
}
// hides the results and moves onto the next question
function nextQuestion() {
  $("#winFrame").hide();
  $("#loseFrame").hide();
  questionIndex++;
  if (questionIndex < questionsAnswers.length) {
    countDown(counter);
    questionDom();
    $("#questionFrame").show();
    $("#answersFrame").show();
  } else {
    $("#resultsFrame").show();
    $("#resultsFrame").html(
      "<h1>Thanks for playing! Here are your results: " +
        "<br/>" +
        correctCounter +
        " correct " +
        "<br/>" +
        incorrectCounter +
        " incorrect </h1>" +
        "<button id='restart'> Click to try again!</button>"
    );
  }
}

//restarts the game
$(document).on("click", "#restart", function() {
  correctCounter = 0;
  incorrectCounter = 0;
  questionIndex = 0;
  $("#resultsFrame").hide();
  $(this).hide();
  countDown(counter);
  questionDom();
  $("#questionFrame").show();
  $("#answersFrame").show();
  $("#timerFrame").show();
  clearTimeout(hardRestart);
});

$(this).ready();

var correctCounter = 0;
var incorrectCounter = 0;
var incorrectAnswers = 0;
var count;
var counter = 5;
var questionIndex = 0;

var questionsAnswers = [
  {
    question: "What is ",
    answers: ["answer 1", "answer 2", "answer3", "answer4"],
    correctAnswer: "answer 1",
    pic: "<img>"
  },
  {
    question: "second question!",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: "answer2",
    pic: "<img>"
  }
];
startGame();
function startGame() {
  $("#startButton").on("click", function() {
    $(this).hide();
    countDown(counter);
    questionDom();
    clickAnswer();
  });
}
//timer that begins at each new question
function countDown(x) {
    count = setInterval(function() {
    $("#timerFrame").html(
      "<h2>Time Remaining: " + x + "</h2>",
      x-- || clearInterval(count)
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
function clickAnswer() {
  $(".answer").click(function() {
    console.log("you clicked me");
    if ($(this).text() === questionsAnswers[questionIndex].correctAnswer) {
      console.log("the correct guess has been clicked");
      correctDom();
      correctCounter++;
      clearInterval(count);
    } else {
      incorrectDom();
      incorrectCounter++;
      clearInterval(count);
      //set timeout for the next question function
    }
  });
}

//hides the question and answer elements and displays the correct answer screen
function correctDom() {
  $("#questionFrame").hide();
  $("#answersFrame").hide();
  $("#winFrame").text("Correct");
}
//same as above but for the incorrect answers
function incorrectDom() {
    $("#questionFrame").hide();
    $("#answersFrame").hide();
    $("#loseFrame").text("ya guessed wrong bitch!");
}


// function nextQuestion(){
//     questionIndex++;
//     countDown();
//     questionDom();
// }

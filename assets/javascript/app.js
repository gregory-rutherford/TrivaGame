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
// startGame();
// function startGame() {
  $("#startButton").on("click", function() {
    $(this).hide();
    countDown(counter);
    questionDom();
  });
// }
//timer that begins at each new question
function countDown(x) {
    $("#timerFrame").html(
        "<h2>Time Remaining: " + x + "</h2>")
    count = setInterval(function() {
        x--;
        if (x === -1){
            correctDom();
            setTimeout(nextQuestion, 5000);
            return clearInterval(count);
        }
    $("#timerFrame").html(
      "<h2>Time Remaining: " + x + "</h2>",
    );
  }, 1000);
}
// writes the question and answers to the page
function questionDom() {
    console.log(questionsAnswers[questionIndex].question);
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
    console.log("you clicked me");
    setTimeout(nextQuestion, 5000);
    if ($(this).text() === questionsAnswers[questionIndex].correctAnswer) {
        console.log("the correct guess has been clicked");
        correctDom(true);
        correctCounter++;
        clearInterval(count);
    } else {
        correctDom(false);
        incorrectCounter++;
        clearInterval(count);    
    }
});


//hides the question and answer elements and displays the correct answer screen
function correctDom(userAnswer) {
  $("#questionFrame").hide();
  $("#answersFrame").hide();
  if (userAnswer === true){
  $("#winFrame").text("Correct");
  }
  else if (userAnswer === false) {
    $("#loseFrame").text("ya guessed wrong!");
  } else {
      $("#loseFrame").text("you ran out of time");
  }
}
function nextQuestion(){
    $("#winFrame").hide();
    $("#loseFrame").hide();
    questionIndex++;
    if (questionIndex < questionsAnswers.length) {
    countDown(counter);
    questionDom();
    $("#questionFrame").show();
    $("#answersFrame").show();
    setTimeout(nextQuestion(), 5000);
    } else {
        //end game function here
    }
}

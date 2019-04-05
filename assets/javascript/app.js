$(this).ready();

var correctCounter = 0;
var incorrectCounter = 0;
var incorrectAnswers = 0;
var count;
var counter = 5;
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
    answers: ["Ziggy's Gift", "Ziggy Christmas Special", "The Grinch featuring Ziggy", "Ziggy Xmas"],
    correctAnswer: "Ziggy's Gift",
    pic: "<img>"
  }
];

  $("#startButton").on("click", function() {
    $(this).hide();
    countDown(counter);
    questionDom();
    $("#questionFrame").show();
    $("#answersFrame").show();
  });

//timer that begins at each new question
function countDown(x) {
    $("#timerFrame").html(
        "<h2>Time Remaining: " + x + "</h2>")
    count = setInterval(function () {
        x--;
        if (x === -1) {
            incorrectDom();
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
        correctDom();
        correctCounter++;
        clearInterval(count);
    } else {
        console.log("the wrong guess has been clicked.");
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
    $("#loseFrame").html("<p> You guessed Wrong! The correct answer is: " 
    + questionsAnswers[questionIndex].correctAnswer + "</p>"
    + questionsAnswers[questionIndex].pic);
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
        $("#resultsFrame").html("<h1>Thanks for playing! Here are your results: "
        + "<br/>"  
        + correctCounter + " correct " + "<br/>" 
        + incorrectCounter + " incorrect </h1>");
        setTimeout(reset, 5000); 
    }
}

function reset () {
    correctCounter = 0;
    incorrectCounter = 0;
    questionIndex = 0;
    $("#resultsFrame").hide();
    $("#startButton").show();
    $("#timerFrame").hide();
    
}
$(this).ready();
//display start screen with "begin" button
//click the button, hide the start div and call the game function.
//clicks begin
//new question is displayed
//store all relevant info in arrays as objects
var correctAnswers = 0;
var incorrectAnswers = 0;
var counter = 5;

var questionsAnswers = [
    {
        question: "What is blablabla",
        answers: ["answer 1", "answer 2", "answer3", "answer4"],
        correctAnswer: "answer 1",
        pic: "<img>"
    }
//it displays the question
//it displays each answer as a button
//the correct answer has a value that produces the correct screen
//the incorrect answers have a value that produce the incorrect screen


]
startGame();
function startGame() {
    $("#startButton").on("click", function () {
        $(this).hide();
        //call countdown timer here 
        // countDown(counter);
        //call playGame function here
        playGame();
    })
}

function countDown(x) {
    var count = setInterval(function () {
        $("#timerFrame").html("<h2>Time Remaining: </h2>" + x, x-- ||
            clearInterval(count))
    }, 1000)
}

function playGame() {
    countDown(counter);
    for (var i = 0; i < questionsAnswers.length; i++) {
        $("#questionFrame").html(questionsAnswers[i].question);
    }

}


//the question is displayed with 4 choices and a timer with a 30 sec countdown
//when a choice is selected
//the right or wrong screen is displayed,
//while stopping the timer and displaying a cool image
//after all the questions have been answered a new screen is displayed
//screen contains number of correct answers and incorrect answers 
// and a restart button


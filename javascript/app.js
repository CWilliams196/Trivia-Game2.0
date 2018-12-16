$("#startBtn").on("click", function(){
    $("#startBtn").remove();
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#reset", function() {
    game.reset();
});

var questions = [{
    
    question: "What type of animal did the stampede consist of?",
    answers: ["lions", "pigs", "wildebeest", "deer"],
    correctAnswer: "wildebeest",
    image: ""},
        {
          question: "Who was Simba's girlfriend?",
    answers: ["nala", "lara", "susan", "sydney"],
    correctAnswer: "nala",
    image: ""},
                  {
          question: "Who killed Simba's father?",
    answers: ["kovu", "scar", "mufasa", "zazu"],
    correctAnswer: "mufasa",
    image: ""},
               
                  {
          question: "Who sang the song 'The Circle Of Life'?",
    answers: ["drake", "journey", "elton john", "janet jackson"],
    correctAnswer: "elton john",
    image: ""},
               
                  {
          question: "What was the name of the bird that protected Simba?",
    answers: ["tweety", "polly", "daffy", "zazu"],
    correctAnswer: "zazu",
    image: ""
    }];

var game = {
    questions: questions,
    currentQuestion: 0,
    unanswered: 0,
    counter: 30,
    correct: 0,
    inncorrect: 0,
    countdown: function(){
        clearInterval(timer);
        game.counter--;
        $("#timer").html("<h2> Time Remaining: " + game.counter + " Seconds </h2>");
        if (game.counter <= 0) {
            console.log("Times Up!");
            game.timeUp();
        };
    },
    loadQuestion: function(){
        clearInterval(timer);
        timer =  setInterval(game.countdown, 1000);
        $("#game").html("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#game").append("<button class='answer-button' id='button- " + i + "' data-name='" + questions[game.currentQuestion].answers[i]+"'> " + questions[game.currentQuestion].answers[i] + "</button>")
        };
    },
    nextQuestion: function(){
        game.counter = 30;
        $("#timer").html("<h2> Time Remaining: " + game.counter + " Seconds </h2>");
        game.currentQuestion++;
        game.loadQuestion();        
    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#game").html("<h2> Out Of Time! </h2>");
        $("#game").append("<h3> The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
         if (game.currentQuestion === questions.length -1){
            setTimeout(game.results, 1000 * 3)
        } else {
            setTimeout(game.nextQuestion, 1000 * 3);
        };
    },
    results: function(){
        clearInterval(timer);
        $("#game").html("<h2> ALL DONE! </h2>");
        $("#game").append("<h3> Correct: " + game.correct + "</h3>");
        $("#game").append("<h3> Incorrect: " + game.inncorrect + "</h3>");
        $("#game").append("<h3> Unanswered: " + game.unanswered + "</h3>");
        $("#game").append("<button id='reset'>RESET</button>");
    },
    clicked: function(e){
        clearInterval(timer);
        if ($(e.target).data("name") === questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly(); 
        }

    },
    answeredCorrectly: function(){
        console.log("right");
        clearInterval(timer);
        game.correct++;
        $("#game").html("<h2> You Got It Right! </h2>");
        if (game.currentQuestion === questions.length -1){
            setTimeout(game.results, 1000 * 3)
        } else {
            setTimeout(game.nextQuestion, 1000 * 3);
        };
    },
    answeredIncorrectly: function(){
        console.log("wrong");
        clearInterval(timer);
        game.inncorrect++;
        $("#game").html("<h2> You Got It Wrong! </h2>");
        if (game.currentQuestion === questions.length -1){
            setTimeout(game.results, 1000 * 3)
        } else {
            setTimeout(game.nextQuestion, 1000 * 3);
        };
        
    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.inncorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();
    }
};



























//$("#startBtn").on("click", startTimer);
//
//
//var intervalId;
//var seconds = 30;

//
//function startTimer() {
//        clearInterval(intervalId);
//    intervalId = setInterval(decrement, 1000);
//    $("#startBtn").hide();
//    $(".quest").hide();
//    nextQuest();
//};
//
//
//function nextQuest() {
//    showQuest1();
//    setTimeout(showQuest2, 1000 * 30);
//    setTimeout(showQuest3, 2000 * 30);
//    setTimeout(showQuest4, 3000 * 30);
//    setTimeout(showQuest5, 4000 * 30);
//};
//
//function decrement() {
//    seconds--;
//    $("#timer").html("<h2> Time Remaining: " + seconds + " Seconds </h2>");
//};
//
//function showQuest1() {
//   $("#quest1").show();
//};
//
//function showQuest2() {
//   $("#quest1").hide();
//   $("#quest2").show();
//};
//
//function showQuest3() {
//   $("#quest1").hide();
//   $("#quest2").hide();
//   $("#quest3").show();
//};
//
//function showQuest4() {
//   $("#quest1").hide();
//   $("#quest2").hide();
//   $("#quest3").hide();
//   $("#quest4").show();
//};
//
//function showQuest5() {
//   $("#quest1").hide();
//   $("#quest2").hide();
//   $("#quest3").hide();
//   $("#quest4").hide();
//   $("#quest5").show();
//};
//
//












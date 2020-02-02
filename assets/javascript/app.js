var card = $("#quiz-area");

// Question set
var questions = [
    {
        question: "What band sings the song Helena?",
        answers: ["Fall Out Boy", "My Chemical Romance", "Blink-182", "Weezer"],
        correctAnswer: "My Chemical Romance"
    },
    {
        question: "Which song does Hayley Williams now hate to sing from the 2000's?",
        answers: ["Misery Business", "Decode", "Crush Crush Crush", "Only Exception"],
        correctAnswer: "Misery Business"
    },
    {
        question: "Who sings the song Sugar We're Going Down Swinging?",
        answers: ["Panic! at the Disco", "Blink-182", "Gym Class Heros", "Fall Out Boy"],
        correctAnswer: "Fall Out Boy"
    },
    {
        question: "Which group released the hit song, I Write Sins, Not Tragedies?",
        answers: ["Fall Out Boy", "Fueled By Ramen", "Panic! at the Disco", "No Doubt"],
        correctAnswer: "Panic! at the Disco"
    },
    {
        question: "Who was the original lead singer of Escape The Fate?",
        answers: ["Ronnie Radke", "Pete Wentz", "Gerard Way", "Craig Mabbit"],
        correctAnswer: "Ronnie Radke"
    },
    {
        question: "Who sang the song, Situations?",
        answers: ["Escape the Fate", "Bless the Fall", "My Chemical Romance", "The Cab"],
        correctAnswer: "Escape the Fate"
    },
    {
        question: "What record label did Fall Out Boy and Gym CLass Heros belong to?",
        answers: ["Fueled by Ramen", "Universal", "Themselves", "Warner Brothers"],
        correctAnswer: "Fueled by Ramen"
    },
    {
        question: "What band sang The Anthem?",
        answers: ["Good Charlotte", "Simple Plan", "Green Day", "Blink-182"],
        correctAnswer: "Good Charlotte"
    }
];

// Variable that will hold the setInterval
var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);

        $("#sub-wrapper").prepend(
            "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
        );

        $("#start").remove();

        for (var i = 0; i < questions.length; i++) {
            card.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }

        card.append("<button id='done'>Done</button>");
    },

    done: function () {
        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }
        this.result();
    },

    result: function () {
        clearInterval(timer);

        $("#sub-wrapper h2").remove();

        card.html("<h2>All Done!</h2>");
        card.append("<h3>Correct Answers: " + this.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

// CLICK EVENTS

$(document).on("click", "#start", function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});

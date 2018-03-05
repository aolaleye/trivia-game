$('.modal').modal({
    keyboard: false
})

function randomColor(){
    var r = Math.floor(Math.random() * (150));
    var g = Math.floor(Math.random() * (200));
    var b = Math.floor(Math.random() * (200));
    var rgbColor = 'rgb(' + r + ','+ g + ',' + b + ')'; 
    $('.list-group-item').css('background-color', rgbColor);
    $('.display-4').css('color', rgbColor);
}
randomColor();

var quiz = {
    1: {
        question: 'Of the five "Transformers" movie installments, how many starred actor Shia LaBeouf?',
        options: ['Two', 'Three', 'Four', 'Five'],
        answer: 1 //<--- index number of options[] 
        },
    2: {
        question: "What is the name of the Big Bang Theory's character played by actor Jim Parsons?",
        options: ['Leonard', 'Rahj', 'Sheldon', 'Howard'],
        answer: 2
        },
    3: {
        question: 'The motion picture "The Devil Wears Prada" stars which actress?',
        options: ['Anne Hathaway', 'Minka Kelly', 'Julia Roberts', 'Jennifer Lawrence'],
        answer: 0
        },
    4: {
        question: 'Which of these movies did NOT star actress Lindsay Lohan?',
        options: ['Herbie Fully Loaded', 'Mean Girls', 'The Parent Trap', "She's the Man"],
        answer: 3
        },
    5: {
        question: 'The character Captain Jack Sparrow was played by which actor in the "Pirates of the Carribean" movie series?',
        options: ['Orlando Bloom', 'Johnny Depp', 'Matthew McConaughey', 'Armie Hammer'],
        answer: 1
        }
}

var score = 0;
var answerRevealed = false;
var maxQuestionTime = 26;


function printQuiz(ObjectKey) {

    $(".question").text(quiz[ObjectKey].question);

    var questionTimer = setInterval(decrement, 1000);

    function decrement() {
        maxQuestionTime--;
        $(".time").text(maxQuestionTime);

        if (maxQuestionTime === 0 && answerRevealed === false) {
            $(".no-time").show();
            $(".question").hide();
            $(".list-group-item").hide();
            $("." + quiz[ObjectKey].answer + "").show();
            answerRevealed = true;
            clearInterval(questionTimer);
        }
    }
    
    for (i = 0; i < quiz[ObjectKey].options.length; i++) {
        $("." + i + "").text(quiz[ObjectKey].options[i]); 

        if (i === quiz[ObjectKey].answer) {
            $("." + i + "").on("click", function() {
                if (answerRevealed === false) {
                    $(".you-win").show();
                    $(".question").hide();
                    $(".list-group-item").hide();
                    $("." + quiz[ObjectKey].answer + "").show();
                    score++;
                    clearInterval(questionTimer);
                }
            });
        } else if (i !== quiz[ObjectKey].answer) {
            $("." + i + "").on("click", function() {
                $(".you-lose").show();
                $(".question").hide();
                $(".list-group-item").hide();
                $("." + quiz[ObjectKey].answer + "").show();
                answerRevealed = true;
                clearInterval(questionTimer);
            });
        } 
    }

}
printQuiz("1");






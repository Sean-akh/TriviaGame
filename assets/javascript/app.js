(function(){

//START of Questions Array
    var myQuestions = [
        
        {
            question: "Do you find yourself very knowledgable about food? If Yes let's find out!", 
            answers: {a: "Yes", b: "No"},
            correctAnswer: "a"
        },
        {
            question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
            answers: {
                a: "Appetizer", b: "Whisky", c: "Wine",d: "Salad"
            },
            correctAnswer: "c"
        },
        {
            question: "What is sushi traditionally wrapped in??",
            answers: {
                a: "Paper", b: "Seaweed", c: "Cucomber Skin", d: "nothing"
            },
            correctAnswer: "b"
        },
        {
            question: "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
            answers: {
                a: "Apples", b: "Oranges", c: "Pears", d: "Peaches"
            },
            correctAnswer: "a"
        },

        {
            question: "What is allspice alternatively known as?",
            answers: {
                a: "Oregano", b: "Tamarind", c: "Chinees Cinnamon", d: "Pimento" 
            },
            correctAnswer: "d"
        },
        {
            question: "What colour is Absynthe?",
            answers: {a: "Red", b: "Yellow-Green", c: "Green", d: "Pink"},
            correctAnswer: "c"
        },
        {
            question: "What flavour is Cointreau?",
            answers: {a: "Orange", b: "Sour", c: "sweet", d: "Almond"},
            correctAnswer: "a"
        },
        {
            question: "If you were to cut a hare into pieces, marinate it in wine and juniper berries then stew this slowly in a sealed container, what would this recipe be called?",
            answers: {a: "Juniper Hare", b: "Stew Hare", c: "Jugged Hare", d: "Wine Hare"},
            correctAnswer: "c"
        },
         {
            question: "Fried tarantulas, eggs boiled just before they're due to hatch, live octopus, and puffin hearts eaten raw when still-warm are all traditional foods—true or false?",
            answers: {a: "True", b: "False"},
            correctAnswer: "a"
         },
         {
            question: "How many crocus flowers does it take to make a pound of saffron?",
            answers: {a: "750", b: "750,000", c: "7,500", d: "75,000"},
            correctAnswer: "d"
         },
         {
            question: "What is the name of chocolate truffle, costing about $2600 per pound and made by Knipschildt?",
            answers: {a: "Bounty", b: "Carlos V", c: "Chocopologie", d: "Maestro"},
            correctAnswer: "c"
         }
    ];
//END of Questions

//*********** FUNCTIONS  **************//
////Build the quiz ////
function buildQuiz() {
    var output = [];

    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            
            //store list of answer selection to evaluate later
            var answers = [];

            //for each answer
            for(letter in currentQuestion.answers){

                //radio button option
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            //adding question and answers to var output
            output.push(
                `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>
                 </div>`
            );
        }
    );
    //combine the output into one place
    quizContainer.innerHTML = output.join('');
}
////// END of buildQuiz() //////

function showResults() {
    //collect results from answer container
    var answerContainers = quizContainer.querySelectorAll(".answers");
    
    //Keep track of player's answer
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
            //Find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            //if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

            //change the color of answer blue
            answerContainers[questionNumber].style.color = '#0072bc';

            }
            else {
                //change the color to red
                answerContainers[questionNumber].style.color = '#c4161c';
            }
        });
        // show number of correct answers out of total
        resultsContainer.innerHTML = '<h2> You have ' + numCorrect + ' correct answers</h2><h4> out of ' + myQuestions.length + ' answers</h4>';
}
///////// END of showResult() //////////////
////////////////////////////////////////////
///////////////////// Timet() //////////////
    
        var number = 46;
        var intervalId;


            function decrement() {
                number--;
                $("#timeBox").html("<h2>" + number + "</h2>");

                if (number === 0) {
                    stop();
                    //  Alert the user that time is up.
                    alert("Time Up!");
                    }
            }

            $("#next").on("click", function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);
                number = 46;
            })
            $("#submit").on("click", function stop() {
                clearInterval(intervalId);
                number = 46;
            });

//////////////// END of time() //////////////


////////////////////////////////////////////
//function slide
function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }  
}
//////// END of showSlid() ////////////////

function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  // display quiz
  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

})();
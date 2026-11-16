// Declare array for quizes
let quizes = [
    {
        typeOfQuiz: "math",
        questions: [
            {
                question: "What is the derivative of x^2?",
                correct: "2x",
                incorrect: ["3x", "x^2", "4x"]
            },

            {
                question: "What is the integral of 1/x?",
                correct: "ln|x| + C",
                incorrect: ["2xdx", "x^3/3 + C"]
            },

            {
                question: "What is the value of pi to 3 decimal places?",
                correct: "3.142",
                incorrect: ["3.141", "3.140", "3.13159"]
            },

            {
                question: "What is the square root of 16?",
                correct: "4",
                incorrect: ["2", "8", "16"]
            },

            {
                question: "Is the series of 1/n^2 convergent or divergent?",
                correct: "convergent",
                incorrect: ["divergent", "oscillating", "alternating"]
            },

            {
                question: "What is the value of e to 2 decimal places?",
                correct: "2.72",
                incorrect: ["2.71", "3.14", "1.61"]
            },

            {
                question: "What is the limit of (1 + 1/n)^n as n approaches infinity?",
                correct: "e",
                incorrect: ["0", "1", "undefined"]
            },

            {
                question: "What is the value of sin(90 degrees)?",
                correct: "1",
                incorrect: ["0", "-1", "undefined"]
            },

            {
                question: "What is the value of cos(0 degrees)?",
                correct: "1",
                incorrect: ["0", "-1", "undefined"]
            },

            {
                question: "What is the value of tan(45 degrees)?",
                correct: "1",
                incorrect: ["-1", "undefined", "0"]
            }
        ]
    },

    {
        typeOfQuiz: "cs",
        questions: [
            {
                question: "What does CPU stand for?",
                correct: "Central Processing Unit",
                incorrect: ["Computer Personal Unit", "Central Processor Unit", "Computer Processing Unit"]
            },

            {
                question: "What is the time complexity of binary search?",
                correct: "O(log n)",
                incorrect: ["O(n)", "O(n log n)", "O(1)"]
            },

            {
                question: "What is this Binary number 1011101 in Decimal?",
                correct: "93",
                incorrect: ["91", "95", "97"]
            },

            {
                question: "What will be the last number in this for loop for (let i = 0; i < 10; i++) { console.log(i); }",
                correct: "9",
                incorrect: ["10", "8", "0"]
            },

            {
                question: "what will this output print? console.log(2 + '2');",
                correct: "22",
                incorrect: ["4", "NaN", "undefined"]
            },

            {
                question: "In python, what does print('Hello World') do?",
                correct: "Prints 'Hello World' to the console",
                incorrect: ["Prints 'Hello World' to a file", "Prints 'Hello World' to the screen", "Prints 'Hello World' to the terminal"]
            },

            {
                question: "What is the time complexity of bubble sort?",
                correct: "O(n^2)",
                incorrect: ["O(n log n)", "O(n)", "O(log n)"]
            },

            {
                question: "What is the time complexity of quick sort?",
                correct: "O(n log n)",
                incorrect: ["O(n^2)", "O(n)", "O(log n)"]
            },

            {
                question: "What does malloc do in C?",
                correct: "Allocates memory on the heap",
                incorrect: ["Allocates memory on the stack", "Frees memory on the heap", "Frees memory on the stack"]
            },

            {
                question: "What output does this code produce? console.log(typeof NaN);",
                correct: "number",
                incorrect: ["NaN", "undefined", "object"]
            }
        ]
    },

    {
        typeOfQuiz: "history",
        questions: [
            {
                question: "Who was the first president of the United States?",
                correct: "George Washington",
                incorrect: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"]
            },

            {
                question: "In what year did World War II end?",
                correct: "1945",
                incorrect: ["1944", "1946", "1947"]
            },

            {
                question: "Who was the first man to walk on the moon?",
                correct: "Neil Armstrong",
                incorrect: ["Buzz Aldrin", "Michael Collins", "Yuri Gagarin"]
            },

            {
                question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
                correct: "Mayflower",
                incorrect: ["Santa Maria", "Pinta", "Niña"]
            },

            {
                question: "Who was the first African-American president of USA?",
                correct: "Barack Obama",
                incorrect: ["John F. Kennedy", "Ronald Reagan", "George H.W. Bush"]
            },

            {
                question: "In what year did the US civil war end?",
                correct: "1865",
                incorrect: ["1864", "1866", "1867"]
            },

            {
                question: "When was womens rights to vote passed in the US?",
                correct: "1920",
                incorrect: ["1919", "1921", "1922"]
            },

            {
                question: "Who was the second president of the United States?",
                correct: "John Adams",
                incorrect: ["Thomas Jefferson", "Abraham Lincoln", "George Washington"]
            },

            {
                question: "In what year did the American Civil War begin?",
                correct: "1861",
                incorrect: ["1860", "1862", "1863"]
            },

            {
                question: "What year did the US join World War I?",
                correct: "1917",
                incorrect: ["1916", "1918", "1919"]
            }
        ]
    },

    {
        typeOfQuiz: "physics",
        questions: [
            {
                question: "What is the unit of velocity?",
                correct: "m/s",
                incorrect: ["m/s^2", "m", "nothing"]
            },

            {
                question: "What is the unit of force?",
                correct: "N",
                incorrect: ["kg", "m/s^2", "J"]
            },

            {
                question: "What is the unit of energy?",
                correct: "J",
                incorrect: ["N", "kg", "m/s^2"]
            },

            {
                question: "What is gravity?",
                correct: "A force that attracts objects towards each other",
                incorrect: ["A force that repels objects away from each other", "A force that keeps objects in motion", "A force that slows down objects"]
            },

            {
                question: "What is the number for gravity on Earth?",
                correct: "9.8 m/s^2",
                incorrect: ["9.8 m/s", "9.8 N", "9.8 kg"]
            },

            {
                question: "What is the formula for kinetic energy? K=...",
                correct: "1/2 mv^2",
                incorrect: ["mv", "mgh", "Fd"]
            },

            {
                question: "What is the formula for potential energy? U=...",
                correct: "mgh",
                incorrect: ["1/2 mv^2", "Fd", "mv"]
            },

            {
                question: "Newton's second law states that F=ma. What does F here stand for?",
                correct: "Force",
                incorrect: ["Mass", "Acceleration", "Momentum"]
            },

            {
                question: "What is the unit of pressure?",
                correct: "Pa",
                incorrect: ["N", "J", "kg"]
            },

            {
                question: "What does Static mean in physics?",
                correct: "At rest",
                incorrect: ["In motion", "Changing", "Constant"]
            }
        ]
    }
];

//Section started by Riley
const selectedType = new URLSearchParams(window.location.search).get("type");
const selectedQuiz = quizes.findIndex(item => item.typeOfQuiz === selectedType);

let questionIndex = 0;

function startQuiz() {
    questionIndex = 0;
    correctAnswers = 0;
    answers = [];

    $(".quiz-result").prop("hidden", true);
    $(".quiz").show();
    printQuiz(selectedQuiz, questionIndex);
}

$(".restart").on("click", startQuiz);

$(function () {
    // Clicking a selection button opens the quiz page with its type in the URL.
    $(".main-menu button").on("click", function () {
        const type = findQuiz(this.className);
        window.location.href = "quiz/index.html?type=" + encodeURIComponent(type);
    });

    // On the quiz page, use that type to show the first question.
    if ($(".question").length) {
        const type = new URLSearchParams(window.location.search).get("type");
        const quizIndex = quizes.findIndex(item => item.typeOfQuiz === type);

        if (quizIndex >= 0) {
            printQuiz(quizIndex, 0);
        } else {
            window.location.href = "../index.html";
        }
    }
});
// Section end

//declare Variables
let quiz = '';
let correctAnswers = 0;
let answers = [];
let clickedQuiz = '';

//Main Function//

clickedQuiz = $()


//Functions Used//

function getRandom() {
  return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
}

console.log(getRandom());

function findQuiz (quizClass) {
    let value = '';
    switch (quizClass) {
        case "quiz-math":
            value = "math";
            break;
        case "quiz-cs":
            value = "cs";
            break;
        case "quiz-history":
            value = "history";
            break;
        case "quiz-physics":
            value = "physics";
            break;
        default:
            value = "unknown";
    }
    return value;
}

function printQuiz(findQuiz, i) {
    let index = [];
    $(".question h1").text(quizes[findQuiz].questions[i].question);

    let randomIndex = getRandom();
    index[0] = randomIndex;
    $(".answer-" + randomIndex).text(quizes[findQuiz].questions[i].correct);

    for (let j = 0; j < quizes[findQuiz].questions[i].incorrect.length; j++) {

        randomIndex = getRandom();
        let ifInArray = false;

        for (let k = 0; k < index.length; k++) {
            if(randomIndex === index[k]){
               ifInArray = true;
                break;
            }
        }

        if(!ifInArray) {
            index.push(randomIndex);
            $(".answer-" + randomIndex).text(quizes[findQuiz].questions[i].incorrect[j]);
        }
        else {
            j--;
        }
    }
}

// timer by Riley
function timer(){
    var sec = 300;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            // add something to submit the quiz, may need to test.
        }
    }, 1000);
}

function checkForCorrectAnswers(findQuiz) {
    for (let i = 0; i < quizes[findQuiz].questions.length; i++) {
        if(answers[i] === quizes[findQuiz].questions[i].correct) {
            correctAnswers++;
        }
    }

    return correctAnswers;
}

//function printResults() {}

//function checkIfTryAgain() {}


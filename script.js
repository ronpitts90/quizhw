

var question = document.getElementById("main");
var beginQuiz;
var textArea = document.getElementById("textarea");


function startquiz() {

    textArea.style.visibility = "hidden"

    beginQuiz = document.createElement("BUTTON");
    beginQuiz.innerHTML = "Begin";
    document.body.children[4].appendChild(beginQuiz);
    beginQuiz.addEventListener("click", function () {
        question1();
    });
}
startquiz();

///Timer 

var timeLeft;
var totaltime = 100;
var timer = document.getElementById("timer");

function countdown() {
    timeLeft = setInterval(function() {
        totaltime --;
    timer.textContent = "Time left: " + totaltime;
        if (totaltime <= 0) {
            clearInterval (totaltime);
            totaltime = 0;
            timer.textContent = "Times up"
            postquiz();

        }
        


    }, 1000);
}



// function to subtract 15 seconds when question is answered incorrectly.

function wrong() {
    totaltimegiven -=15;
}


var a1;
var a2;
var a3;
var a4;

//Questions 
function question1() {
    beginQuiz.remove();
    countdown();
    question.textContent = "Q1-) Which tag is self-closing?";
        
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "paragraph tag";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a2 = document.createElement("BUTTON");
    a2.innerHTML = "img tag";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question2();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "h1 tag";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question2();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "getElementById";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question2();
        wrong();

    });
}


function question2() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q2-) Which CSS element centers text?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "text-align: middle";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question3();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "text-align: center";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question3();
        correct();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "text-center: align";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question3();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "text-align: varies";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question3();
        wrong();
    });
}


function question3() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q3-) What kind of tag is used to connect to a Javascript file";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Script tag";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question4();
        correct();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Play tag";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question4();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Style tag";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question4();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "HTML tag";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question4();
        wrong();
    });
}


function question4() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q4-) In Javascript, which is used to run through an array?";
       
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Search and Destroy";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
        
        question5();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Functions";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        question5();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Object";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        question5();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "For Loops";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        question5();
        correct();
    });
}


function question5() {
    a1.remove();
    a2.remove();
    a3.remove();
    a4.remove();
    question.textContent = "Q5-) Which of these gives a random number in Javascript between 0 and 1?"
    a1 = document.createElement("BUTTON");
    a1.innerHTML = "Math.getElementById;";
    document.body.children[4].appendChild(a1);
    a1.addEventListener("click", function () {
       
        postquiz();
        wrong();
    });
 
    a2 = document.createElement("BUTTON");
    a2.innerHTML = "Gimme some random numbers!";
    document.body.children[4].appendChild(a2);
    a2.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a3 = document.createElement("BUTTON");
    a3.innerHTML = "Random.Math();";
    document.body.children[4].appendChild(a3);
    a3.addEventListener("click", function () {
        
        postquiz();
        wrong();
    });

    a4 = document.createElement("BUTTON");
    a4.innerHTML = "Math.random();";
    document.body.children[4].appendChild(a4);
    a4.addEventListener("click", function () {
        
        postquiz();
        correct();
        
    });
}
///function to add score
var score = 0
function correct() {
    score += 20;
}
var highscore = document.getElementById("textarea")

function postquiz() {
    
    timer.remove();
    
    a1.remove(); 
    a2.remove();
    a3.remove();
    a4.remove();
    textArea.style.visibility = "visible";
    question.textContent = "Quiz Complete! Your score is " +score+ "/100. Enter Initials."
    
    submitButton = document.createElement("BUTTON");
    submitButton.innerHTML = "Submit";
    document.body.children[4].appendChild(submitButton);
    submitButton.addEventListener("click", function () {
        localStorage.setItem("user", highscore.value);
        localStorage.setItem("score", score);
        scorepage();
    });
}



var mainText = document.getElementById("main");
var banner = document.getElementById("banner");


function scorepage() {
    submitButton.remove();
    
    highscore.style.visibility = "hidden";
    banner.textContent = "Scores"
    
    mainText.textContent = localStorage.getItem("user") + ": " + localStorage.getItem("score");
    
    Restart = document.createElement("BUTTON");
    Restart.innerHTML = "Restart Quiz";
    document.body.children[4].appendChild(Restart);
    Restart.addEventListener("click", function () {
        location.reload();
    });

    clearScore = document.createElement("BUTTON");
    clearScore.innerHTML = "Clear Scores";
    document.body.children[4].appendChild(clearScore);
    clearScore.addEventListener("click", function () {
        localStorage.clear();
        question.textContent = "";
    });
}
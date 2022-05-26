/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var delayInMilliseconds = 1000; //1 second

const toggleBtn = document.getElementById("night_theme_toogle");
const theme = document.documentElement.getAttribute("data-theme");
let darkMode = localStorage.getItem("dark");





const enableDarkMode = () => {
  document.documentElement.setAttribute("data-theme","dark");
  toggleBtn.checked= false;
  localStorage.setItem("dark", "enabled");
};

const disableDarkMode = () => {
  document.documentElement.setAttribute("data-theme","light");
  toggleBtn.checked= true;
  localStorage.setItem("dark", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
  
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    
    

    burger.addEventListener('click',() => {nav.classList.toggle('nav-active');
    
        //Animation of links
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation ='';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        }
    });
//      //Burger animation
    burger.classList.toggle('toggle');
        
});



};



navSlide();





function show(id) {
    var text="";
    
    switch(id)
    {
        case 2: text += showQuizStartPage();break;
        
        case 3: text += showGamePage();
            setTimeout(function() {
                runQuizGame();
  //your code to be executed after 1 second
}, delayInMilliseconds);


                
            
            break;
            
        default: text+= showStartPage();break;
    }
    
    document.getElementById("content").innerHTML = text;
}


function showStartPage(){
    var text="";
    return text;
}


function showQuizStartPage(){
    var text="";
    
    text+='        <div class="container">'+
            '<div class="quizdiv flex-center flex-column">'+
                '<h1>Quick Quiz</h1>'+
                '<a class="btn" href="#" onclick="show(3)" > Play </a>'+
                '<a class="btn" href="highscores.html"> High Score </a>'+


            '</div>'+
        '</div>';
    
    return text;
}


function showGamePage(){
    var text="";
    
    text+= `
<div class="container">
        <div id="game" class="guizdiv justify-center flex-column">
            <div id="hud">
                <div id="hud-item">
                    <p class="hud-prefix">
                    Question
                    </p>
                    <h1 class="hud-main-text" id="questionCounter">
                    
                    </h1>
                </div>

    
   
                <div id="hud-item">
                    <p class="hud-prefix">
                    Score
                    </p>
                    <h2 class="hud-main-text" id="score">
                    0
                    </h2>
                </div>
            
        </div>
        
            <h2 id="question"> What is the answer to this questions?</h2>
    
            <div class="choice-container">
                <p class="choice-prefix">A</p>
                <p class="choice-text" data-number="1" > Choice 1 </p>
            </div>
    
           <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text" data-number="2"> Choice 2 </p>
            </div>
    
            <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text" data-number="3" > Choice 3 </p>
            </div>
    
            <div class="choice-container">
                <p class="choice-prefix">D</p>
                <p class="choice-text" data-number="4" > Choice 4 </p>
            </div>
    
    
    
        </div>
    </div>
    
`;
    
    return text;
}


//Util












//QuizGameTech

runQuizGame = () => {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const questionCounterText= document.getElementById('questionCounter');
    const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
    }
];


//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
//    operator rozdzielenia
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
//        tu jest zakonczenie quizu
    }
    questionCounter++;
//    questionCounterText.innerText = questionCounter+ "/" + MAX_QUESTIONS;
    questionCounterText.innerText =` ${questionCounter}/${MAX_QUESTIONS} `;
    
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
//        console.log(selectedAnswer == currentQuestion.answer);
          const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
          
          if(classToApply==='correct'){
              incrementScore(CORRECT_BONUS);
          }
          
          
//          sypnie bledem czy nie sypnie?
          
          
          selectedChoice.parentElement.classList.add(classToApply);
          
          
        setTimeout(function() {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
                        //your code to be executed after 1 second
            }, delayInMilliseconds);
          
          
         
   
        
        
        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
    
    
};





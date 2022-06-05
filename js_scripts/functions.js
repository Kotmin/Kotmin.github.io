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
        case 4: text += showEndGamePage();
                    setTimeout(function() {
                runEndofQuizGame();
  //your code to be executed after 1 second
}, delayInMilliseconds);

            break;
        case 5: text += showHighScores();
            
            
                setTimeout(function() {
                              runQuizHighScores();
               //your code to be executed after 1 second
             }, delayInMilliseconds);
            
            
        break;
        
        case 6: text +=showLearnMorePage();
        break;
            
        default: text+= showStartPage();break;
    }
    
    document.getElementById("content").innerHTML = text;
}


function showStartPage(){
    var text="";
    
    text+= `
        <div class="container fade-in overflow_hidden">
            <div class="spinning-sphere"> </div>
            <div class="quizdiv flex-center flex-column">
                <h1 class="right-alligner"> Gamification in serve of learning</h1>
                <a class="btn" href="#" onclick="show(6)" > Learn more </a>
            </div>
            </div>
    
`;
    
    
    
    return text;
}


function showWorkInProggressPage(){
    var text="";
    
    text+= `
        <div class="quizdiv container fade-in overflow_hidden">
            <div class=" flex-center flex-column">
                <h1> Work in progress</h1>
 
                <a class="btn" href="#" onclick="show(3)" > Try now </a>
            </div>
            </div>
    
`;
    
    
    
    return text;
}

//img on licence https://www.pexels.com/photo/woman-about-to-write-on-paper-574285/

function showLearnMorePage(){
    var text="";
    
    text+= `
        <div class="container fade-in overflow_hidden">
            <div class="flex-center flex-column ">
                
                <article>
                <h1> Gamification does it work?</h1>
                <img src="src/img/pexels-tirachard-kumtanom-574285.jpg" alt="A girl studying with a sheet of paper and a laptop"/>
 I think we all agree that somehow it is so easy for us to play a mobile game than a quantum physics textbook. In the field of chemistry known as chemical kinetics, the concept of this notion of how energy will be. It is about energy, which lends itself to whether the chemical activity takes place successfully or not. Are you starting to understand? </article>
               
            </article>
            

            
                <a class="btn" href="#" onclick="show(3)" > Try it yourself </a>
            </div>
            </div>
    
`;
    
    
    
    return text;
}


function showQuizStartPage(){
    var text="";
    
    text+='        <div class="container">'+
            '<div class="quizdiv flex-center flex-column fade-in">'+
                '<h1>Quick Quiz</h1>'+
                '<a class="btn" href="#" onclick="show(3)" > Play </a>'+
                '<a class="btn" href="#" onclick="show(5)"> High Score </a>'+

//                    '<button class="btn" onclick="show(3)" > Play </a>'+
//                    '<button class="btn" > High Score </a>'+


            '</div>'+
        '</div>';
    
    return text;
}


function showGamePage(){
    var text="";
    
    text+= `
<div class="container">
    <div id="loader"></div>
        <div id="game" class="quizdiv justify-center flex-column hidden">
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
        
            <h2 id="question"></h2>
    
            <div class="choice-container">
                <p class="choice-prefix">A</p>
                <p class="choice-text" data-number="1" ></p>
            </div>
    
           <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text" data-number="2"></p>
            </div>
    
            <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text" data-number="3" ></p>
            </div>
    
            <div class="choice-container">
                <p class="choice-prefix">D</p>
                <p class="choice-text" data-number="4" ></p>
            </div>
    
    
    
        </div>
    </div>
    
`;
    
    return text;
}


function showEndGamePage(){
    var text="";
    
    text+= `
<div class="container">
      <div id="end" class="quizdiv flex-center flex-column">
        <h1>Your Score</h1>
        <h2 id="finalScore"></h2>
        <form onsubmit="validateFinalScore()">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            autocomplete="on" 
            pattern="[a-zA-Z0-9.-_]"
          required>
    
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            autocomplete="on" 
            pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
          required>
    
          <button
            type="submit"
            class="btn"
            id="saveScoreBtn"
            onclick="saveHighScore(event)"
            disabled
          >
            Save
          </button>
        </form>
        <a class="btn" onclick="show(3);"  href="#">Play Again</a>
        <a class="btn" href="#" onclick="show(2)">Go Home</a>
      </div>
    </div>
`;
    
    return text;
}


function showHighScores(){
    var text="";
    
    text+= `
<div class="container">
    <div id="loader"></div>
      <div id="highScores" class="quizdiv flex-center flex-column hidden">
        <h1 id="finalScore">High Scores</h1>
        <ul id="highScoresList"></ul>
        <a class="btn" href="#" onclick="show(2)">Go Home</a>
      </div>
    </div>
`;
    
    return text;
}





runEndofQuizGame = () => {
const username = document.getElementById('username');
const saveScoreBtn= document.getElementById('saveScoreBtn');

const email = document.getElementById('email');


const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');



//localStorage.setItem("highScores",JSON.stringify([]));
//console.log(JSON.parse(localStorage.getItem("highScores")));


const MAX_HIGH_SCORES = 5;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



finalScore.innerText = mostRecentScore;









username.addEventListener("keyup", (e) => {

    saveScoreBtn.disabled = !username.value && !email.value;
    
});



validateFinalScore = () =>{
    var user= document.getElementById('username').value;
    var regex = /^[a-zA-Z0-9@$]{1,40}$/;
    
    var email=document.getElementById('email').value;
    var regex2 = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;
//    console.log("Hello");
//    console.log(`${user}`);
    if(!regex.test(user)){
        alert("Unproper username!!!");
        return false;
    }
    if(!regex2.test(email)){
        alert("Unproper e-mail address!!!");
        return false;
    }
    
    return true;
};



saveHighScore= e => {
    e.preventDefault();
    
    
    const score =  {
        score: mostRecentScore,
        name: username.value,
        email: email.value
            
    };
    if(validateFinalScore()){
        
    
    highScores.push(score);
    
    
    highScores.sort((a,b) => b.score - a.score);
//        If b is bigger than a, put b before a 
    highScores.splice(MAX_HIGH_SCORES);
    
    
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
//    window.location.assign("/"); like goto root site
            show(2);

//UTIL
//    console.log(highScores);
    }
};
    
};






//Util












//QuizGameTech

runQuizGame = () => {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const questionCounterText= document.getElementById('questionCounter');
    const scoreText = document.getElementById('score');
    
    const loader = document.getElementById('loader');
    const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

//https://opentdb.com/




fetch
(
//        "src/Questions/questions.json"
          "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
)
        .then(res=> {
            return res.json();
}).then(loadedQuestions => {
    console.log(loadedQuestions);
    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
          question: loadedQuestion.question  
        };
        
        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random()*3) +1;
        answerChoices.splice(formattedQuestion.answer -1,0,
        loadedQuestion.correct_answer);
        
        
        answerChoices.forEach((choice,index) =>{
            formattedQuestion["choice"+ (index+1)] = choice;
        });
        
        
        return formattedQuestion;
    });
//    questions = loadedQuestions;
//pozostalosc po pobieraniu pytan z lokalnego pliku zmieniajac dwie linijki, a wlasciwie odkomentowujac je mozemy powrocic do tego stanu
    startGame();
    
})
        .catch(err => {
            console.error(err);
//    try catch
});

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
//    operator rozdzielenia
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
//        return window.location.assign('/end.html');
//        tu jest zakonczenie quizu
//            showEndGamePage();
            localStorage.setItem("mostRecentScore",score);
            show(4);
            return;
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

//startGame();
    
    
};


runQuizHighScores = () => {
    const highScoresList = document.getElementById("highScoresList");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    const loader = document.getElementById('loader');
    const highs = document.getElementById('highScores');
    
    
    highScoresList.innerHTML = highScores.map(
            score => {
                return `<li class="high-score">${score.name} - ${score.score}</li>`;
            }).join("");
    
    highs.classList.remove("hidden");
    loader.classList.add('hidden');
    
    
};


//overflow hidden w css
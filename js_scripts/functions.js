/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



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
        
        case 3: text += showGamePage();break;
            
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
<div class="container>
        <div id="game" class="guizdiv justify-center flex-column">
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


//const app = ()=>{
    
//};

//navSlide();


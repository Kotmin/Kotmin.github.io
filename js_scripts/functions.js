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

//function switch_theme(){
//darkMode = localStorage.getItem("dark"); // update darkMode when clicked
//  if (darkMode === "disabled") {
//    enableDarkMode();
//  } else {
//    disableDarkMode();
//  }
//}




//Here is the end of copypasterinio
//
//
//
//function dark_theme(){
//    document.documentElement.setAttribute("data-theme","dark");
//}
//
//function light_theme(){
//    document.documentElement.setAttribute("data-theme","light");
//}
//
//
//
//function switch_theme(){
//    var currentTheme = document.documentElement.getAttribute("data-theme");
//    var switchToTheme = currentTheme === "dark" ? "light" : "dark" ;
//    
//    document.documentElement.setAttribute("data-theme",switchToTheme);
//    
//    
//}
//
//function set_proper_theme(){
//    const currentTheme = document.documentElement.getAttribute("data-theme");
//    const currSwitchPosition=document.document.getElementbyId("night_theme_toogle");
//    if(currentTheme === "dark")
//    {
//        document.documentElement.setAttribute("data-theme","light");
//        currSwitchPosition.prop('checked',false);
//    }
//    else{
//        currSwitchPosition.prop('checked',true);
//    }
//    
//    
//}


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

//const app = ()=>{
    
//};

//navSlide();

//function dark_theme(){
//    document.addEventListener("DOMContentLoaded",function(event) {
//        document.documentElement.setAttribute("data-theme","dark");
//    });
//}



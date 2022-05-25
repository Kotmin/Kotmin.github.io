/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function dark_theme(){
    document.documentElement.setAttribute("data-theme","dark");
}


function switch_theme(){
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var switchToTheme = currentTheme === "dark" ? "light" : "dark" ;
    
    document.documentElement.setAttribute("data-theme",switchToTheme);
    
    
}


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

//const app = ()=>{
//    navSlide();
//};

navSlide();

//function dark_theme(){
//    document.addEventListener("DOMContentLoaded",function(event) {
//        document.documentElement.setAttribute("data-theme","dark");
//    });
//}



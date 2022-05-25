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


//function dark_theme(){
//    document.addEventListener("DOMContentLoaded",function(event) {
//        document.documentElement.setAttribute("data-theme","dark");
//    });
//}



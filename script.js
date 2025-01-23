//Menu navbar
var menu = document.getElementById("menu")
var navbar = document.querySelector(".menuNavbar")
var closeBar = document.querySelector(".navclose")

menu.addEventListener("click", function () {
    navbar.style.display = "block"
})

closeBar.addEventListener("click", function () {
    navbar.style.display = "none"
})

//Typed Js
const typed = new Typed(".section__text__p2",{
    strings : ['Full Stack Developer','Core Java Developer','Front End Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backdelay: 1000,
    loop: true
})

//Tab-contents

var experience = document.getElementById("experience")
var education = document.getElementById("education")
var expContent = document.getElementById("exp-content")
var eduContent = document.getElementById("edu-content")

experience.addEventListener("click", function(){
    experience.classList.add("active-link")
    expContent.classList.add("active-tab")
    education.classList.remove("active-link")
    eduContent.classList.remove("active-tab")
})

education.addEventListener("click", function(){
    experience.classList.remove("active-link")
    expContent.classList.remove("active-tab")
    education.classList.add("active-link")
    eduContent.classList.add("active-tab")
})
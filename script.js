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

const typed = new Typed(".section__text__p2",{
    strings : ['Full Stack Developer','Core Java Developer','Front End Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backdelay: 1000,
    loop: true
})
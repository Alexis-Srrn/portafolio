 function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");
    if (menuBth.className === "nav__menu"){
        menuBth.className += " responsive";
    }else{
        menuBth.className =  "nav__menu";
    }
 }

 /*----Dark mode---*/
 const body = document.querySelector("body");
 const toggleSwitch = document.getElementById("toggle-switch");

 toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
 });


 /*---Efecto de tipeo---*/

 var typingEffect = new Typed(".typedText", {
    strings: ["Desarrollador", "Web", "Alexis"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 200
 });

/*-----Scroll-----*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1500,
    reset: true,
});

sr.reveal(".featured__name", {delay: 100});
sr.reveal(".text__info", {delay:200});
sr.reveal(".text__btn", {delay:200});
sr.reveal(".social__icons", {delay:200});
sr.reveal(".featured__image", {delay:250});

sr.reveal(".project__box", {interval: 200});
sr.reveal(".technology__box", {interval: 200});


sr.reveal(".top__header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 1500,
    reset: true,
});

srLeft.reveal(".about__info", {delay: 100});
srLeft.reveal(".contact__info", {delay: 100});


const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", {delay:100});
srRight.reveal(".skill__box", {delay:100});

/*----ACTIVE LINK----*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active__link");
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active__link");
        }   

    });
}


window.addEventListener("scroll", scrollActive);

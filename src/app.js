let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelector(".nav-link");
let body = document.querySelector("body");


menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });

});


function openNav() {

    document.getElementById("side-panel").style.width = "250px";
}

function closeNav() {

    document.getElementById("side-panel").style.width = "0";
}

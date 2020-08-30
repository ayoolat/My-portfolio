
const navbar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");
const hamCon = document.querySelector("ham-con");
const hamElement1 = document.querySelector(".ham-element1");
const hamElement = document.querySelector(".ham-element");
const navCollapse = document.querySelector("nav-Collapse");
console.log(hamElement);

ham.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    navbar.classList.toggle("showNav");
    hamElement.classList.toggle("last");
    hamElement1.classList.toggle("first");
}

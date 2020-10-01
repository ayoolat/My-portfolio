
// loader
window.addEventListener('load', (event) => {
    // alert('page is fully loaded');
    document.getElementById("loader").style.display = "none"
  });

const navbar = document.querySelector(".navbar");
const ham = document.querySelector(".ham");
const hamCon = document.querySelector("ham-con");
const hamElement1 = document.querySelector(".ham-element1");
const hamElement2 = document.querySelector(".ham-element2");
const hamElement = document.querySelector(".ham-element");
const navCollapse = document.querySelector("nav-Collapse");

ham.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    hamElement.classList.toggle("open");
    hamElement1.classList.toggle("open");
    hamElement2.classList.toggle("open");
}

function showFullNav(){
  let fullPageNav = document.getElementById("hamburger-nav")
  if (fullPageNav.style.display == "block"){
    fullPageNav.style.display = "none"
  }else{
    fullPageNav.style.display = "block"
  }
}

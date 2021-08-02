import toggleNav from "./navbar.js";

const hamburger = document.querySelectorAll(".hamburger_menu");
const sidenav = document.querySelector(".sidenav");

hamburger.forEach((el) => {
  el.addEventListener("click", () => {
    toggleNav(el, sidenav);
    console.log(el, sidenav);
  });
});

console.log(hamburger);

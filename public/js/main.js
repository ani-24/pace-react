import toggleNav from "./navbar.js";

const hamburger = document.querySelector(".hamburger_menu");
const sidenav = document.querySelector(".sidenav");

hamburger.addEventListener("click", () => {
  toggleNav(hamburger, sidenav);
});

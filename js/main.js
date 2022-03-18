"use strict";

const menuToggle = document.querySelector("#mobileToggle");
const navMenu = document.querySelector(".navbar-panel");
const navbar = document.querySelector("nav");
const home = document.getElementById("home");

const overlay = document.querySelector(".overlay");

// const homePage = document.getElementById('home');
const sections = document.querySelectorAll(".link-section");
const links = document.querySelectorAll(".navbar-item__link");
const body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
  showOverlay();

  if (!navMenu.classList.contains("show")) {
    changeNavState();
  } else {
    navbar.classList.remove("sticky");
  }
});

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));

  // add the active class if within visible height
  if (window.scrollY - sections[index].offsetHeight < sections[index].offsetTop)
    links[index].classList.add("active");
}

function getDeviceType() {
  return window.innerWidth;
}

function setNavOffset(val) {
  return window.scrollY + val > home.offsetTop + home.offsetHeight;
}

function isPastHomePage(device) {
  if (device < 768) return setNavOffset(600);
  else return setNavOffset(400);
}

function changeNavState() {
  if (isPastHomePage(getDeviceType())) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
}

function disableScrolling(elem) {
  if (elem) body.style.overflowY = "hidden";
  else body.style.overflowY = "auto";
}

function showOverlay() {
  overlay.classList.toggle("overlay-active");

  overlay.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("show");
    changeNavState();
    // changeNavState();
    overlay.classList.remove("overlay-active");
    body.style.overflowY = "auto";
  });

  disableScrolling(overlay.classList.contains("overlay-active"));
}

changeLinkState();
window.addEventListener("scroll", () => {
  changeLinkState();
  changeNavState();
});

AOS.init({
  offset: 0,
  duration: 450,
  easing: "ease-in-out-cubic",
  delay: 50,
  anchor: "top-center",
});

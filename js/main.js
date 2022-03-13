const menuToggle = document.querySelector("#mobileToggle");
const navMenu = document.querySelector(".navbar-panel");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
  // navMenu.classList.toggle("animate__bounce");
});

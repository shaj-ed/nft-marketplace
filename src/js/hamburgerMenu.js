const menuButton = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  nav.classList.toggle("open");
});

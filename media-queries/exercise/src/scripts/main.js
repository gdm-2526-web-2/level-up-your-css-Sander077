import '../styles/main.css';


const $toggleButton = document.querySelector("#toggle-color-mode");
const $body = document.querySelector("body");

$toggleButton.addEventListener("click", () => {
  $body.classList.toggle("dark-mode");
  });
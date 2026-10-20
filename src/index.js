import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./style.css";
home();

const button = document.querySelectorAll(".headerBtn");
const content = document.querySelector("#content");
button.forEach((btn) => {
  console.log(btn.textContent);

  btn.addEventListener("click", () => {
    if (btn.textContent == "Home") {
      content.innerHTML = "";
      home();
    }
    if (btn.textContent == "Menu") {
      content.innerHTML = "";
      menu();
    }

    if (btn.textContent == "About") {
      content.innerHTML = "";
      about();
    }
  });
});

console.log("Hello!!!");

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
    content.innerHTML = "";
    if (btn.textContent == "Home") {
      home();
    }
    else if (btn.textContent == "Menu") {
      menu();
    }

    else if (btn.textContent == "About") {
      about();
    }
  });
});

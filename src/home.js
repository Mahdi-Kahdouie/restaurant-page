// import restaurant from "./images/restaurant.jpg";
import steak from "./images/steak.jpg";

export function home() {
  const content = document.querySelector("#content");
  const image = document.createElement("img");

  const textContain = document.createElement("div");
  textContain.classList.add("homeText");
  const welcome = document.createElement("p");
  welcome.innerText = "welcome";
  welcome.classList.add("welcome");
  textContain.appendChild(welcome);
  const p2 = document.createElement("p");
  p2.innerText = " to the";
  p2.classList.add("welcome");
  textContain.appendChild(p2);
  const p3 = document.createElement("p");
  p3.innerText = "Steak House";
  p3.classList.add("welcome");
  textContain.appendChild(p3);
  content.appendChild(textContain);
  image.src = steak;
  image.classList.add("backImage");
  content.appendChild(image);
}

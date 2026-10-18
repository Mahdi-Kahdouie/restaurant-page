import restaurant from "./images/restaurant.jpg";

export function image() {
  const content = document.querySelector("#content");

  const image = document.createElement("img");
  image.src = restaurant;
  image.width = 1000;
   content.appendChild(image);
}

export function menu() {
  const content = document.querySelector("#content");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");
  content.appendChild(menuCard);

  const menuText = document.createElement("p");
  menuText.innerText = "Menu";
  menuText.classList.add("menuText");
  menuCard.appendChild(menuText);

  const dishes = [
    {
      name: "Classic Ribeye Steak",
      description: "350g prime cut, wood-fired with garlic herb butter.",
      price: "$38",
    },
    {
      name: "Filet Mignon",
      description: "230g tenderloin, pan-seared with red wine reduction.",
      price: "$45",
    },
    {
      name: "Smoked Tomahawk",
      description: "680g bone-in ribeye, served with truffle fries.",
      price: "$65",
    },
  ];

  dishes.forEach((dish) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.innerText = dish.name;
    title.classList.add("dishTitle");

    const desc = document.createElement("p");
    desc.innerText = dish.description;
    desc.classList.add("dishDesc");

    const price = document.createElement("span");
    price.innerText = dish.price;
    price.classList.add("dishPrice");

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(price);

    menuCard.appendChild(card);
  });
}
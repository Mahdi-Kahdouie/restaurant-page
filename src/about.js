export function about() {
  const content = document.querySelector("#content");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");
  content.appendChild(menuCard);

  const menuText = document.createElement("p");
  menuText.innerText = "About us";
  menuText.classList.add("menuText");
  menuCard.appendChild(menuText);

  const dishes = [
    {
      name: "Our Story",
      description:
        "Founded in 1998, Steak House has been dedicated to the art of wood-fired grilling.",
    },
    {
      name: "Opening Hours",
      description: "Every day : 5:00 PM – 10:00 PM",
    },
    {
      name: "Contact Us",
      description:
        "Address: 742 Evergreen Terrace, Downtown\nEmail: reservations@steakhouse.com\n",
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

    card.appendChild(title);
    card.appendChild(desc);

    menuCard.appendChild(card);
  });
}

const createMenuPage = () => {
  const content = document.querySelector("#content");
  
  const menu = document.createElement("h1");
  menu.textContent = "Menu";
  content.appendChild(menu);

  const lobster = document.createElement("p");
  lobster.textContent = "lobster";
  content.appendChild(lobster);

  const pizza = document.createElement("p");
  pizza.textContent = "pizza";
  content.appendChild(pizza);

  const burgers = document.createElement("p");
  burgers.textContent = "burgers";
  content.appendChild(burgers);

  const steak = document.createElement("p");
  steak.textContent = "steak";
  content.appendChild(steak);
}

export default createMenuPage;
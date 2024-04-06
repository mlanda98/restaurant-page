const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  
  const image = document.createElement("img");
  image.src = "/restaurant-page/restaurant-pic-4.avif";
  image.height = "300";
  content.appendChild(image);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to out restaurant!";
  content.appendChild(headline);

  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town. Come and taste it!";
  content.appendChild(copy);
}

export default createRestaurantHomePage;
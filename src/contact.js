const createContactPage = () => {
  const content = document.querySelector("#content");
  
  const headline = document.createElement("h1");
  headline.textContent = "Contact Page";
  content.appendChild(headline);

  const copy = document.createElement("p");
  copy.textContent = "Contact us at @email.com";
  content.appendChild(copy);
}

export default createContactPage;
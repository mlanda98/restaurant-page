import createContactPage from "./contact";
import createMenuPage from "./menu";



const createButtons = () => {
   const mbutton = document.querySelector(".menu-button");
   mbutton.addEventListener("click", () => {
    clearContent();
    createMenuPage();
   });


   const cbutton = document.querySelector(".contact-button");
   cbutton.addEventListener("click", () => {
    clearContent();
    createContactPage();
   });


  function clearContent(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
  }
}

export default createButtons;
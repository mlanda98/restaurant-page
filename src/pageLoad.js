import createRestaurantHomePage from './restaurant';
import createMenuPage from './menu';
import createContactPage from './contact';
import createButtons from './tabs';

function initialLoad(){
  createButtons();
  createRestaurantHomePage();
  createMenuPage();
  createContactPage();
}

export default initialLoad;

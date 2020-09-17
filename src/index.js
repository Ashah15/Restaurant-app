import navPage from './navbar';
import mainImage from './homepage';
import contactPage from './contact';
import menuPage from './menu';

const navShow = navPage();
const landingPage = mainImage();
const showContact = contactPage();
const showMenu = menuPage();

const content = document.querySelector('#content');


const show = (section) => {
  content.innerHTML = '';
  content.appendChild(navShow);
  content.appendChild(section);
};

show(landingPage);

const homeMain = document.getElementById('home');

const menuMain = document.getElementById('menu');
const contactMain = document.querySelector('#contact-us');

const displaySection = (x) => {
  if (x.target === homeMain) {
    show(landingPage);
  } else if (x.target === menuMain) {
    show(showMenu);
  } else {
    show(showContact);
  }
};


homeMain.addEventListener('click', displaySection);
menuMain.addEventListener('click', displaySection);
contactMain.addEventListener('click', displaySection);
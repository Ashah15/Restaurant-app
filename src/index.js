import './styles.css';
import Contact from './contact';
import Menu from './menu';
import spaghettiImg from './spaghetti.jpg';
import foodImg from './food.jpg';
import beansImg from './beans.jpg';
import initialLoad from './load';
import navPage from './navbar';

const setBackground = (image) => {
  document.body.style.backgroundImage = `url(${image})`;
};
setBackground(spaghettiImg);

const content = document.getElementById('content');
content.appendChild(initialLoad());

document.querySelectorAll('.navbar-btn').forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    content.innerHTML = '';

    if (e.target.textContent === 'Home') {
      content.appendChild(initialLoad());
      setBackground(spaghettiImg);
    }
    if (e.target.textContent === 'Menu') {
      content.appendChild(Menu());
      setBackground(foodImg);
    }
    if (e.target.textContent === 'Contact') {
      content.appendChild(Contact());
      setBackground(beansImg);
    }
  });
});

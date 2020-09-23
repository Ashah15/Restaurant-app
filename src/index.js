import './styles.css';
import Contact from './contact';
import Menu from './menu';
import spaghettiImg from './spaghetti.jpg';
import foodImg from './food.jpg';
import beansImg from './beans.jpg';

const initialLoad = () => {
  const headerInfo = document.createElement('div');
  headerInfo.classList.add('row', 'header__info');

  const headerTextContent = document.createElement('div');
  headerTextContent.classList.add('col', 'header__text-content');

  const headerTitle = document.createElement('h2');
  headerTitle.classList.add('header__title');
  headerTitle.textContent = 'Ashahs Eatery';

  const headerContent = document.createElement('p');
  headerContent.classList.add('header__content');
  headerContent.textContent = 'Satisfying people’s hunger for life’s simple pleasures';

  headerTextContent.appendChild(headerTitle);
  headerTextContent.appendChild(headerContent);

  const headerImgContent = document.createElement('div');
  headerImgContent.classList.add('col', 'header__img-content');

  headerInfo.appendChild(headerTextContent);

  return headerInfo;
};

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

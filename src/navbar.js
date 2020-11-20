const navPage = () => {
  const navDiv = document.getElementById('tabs');
  const homeButton = document.createElement('button');
  homeButton.className = 'navbar-btn home';
  homeButton.innerText = 'Home';

  const menuButton = document.createElement('button');
  menuButton.className = 'navbar-btn menu';
  menuButton.innerText = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.className = 'navbar-btn contact';
  contactButton.innerText = 'Contact';

  navDiv.appendChild(homeButton);
  navDiv.appendChild(menuButton);
  navDiv.appendChild(contactButton);

  return navDiv;
};

export default navPage;
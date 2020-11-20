const navPage = () => {
  const navDiv = document.createElement('div');

  const homeLink = document.createElement('li')
  homeLink.className = 'navbar-btn nav-link home active'
  homeLink.innerText = "Home"

  const menuLink = document.createElement('li')
  menuLink.className = 'navbar-btn nav-link menu'
  menuLink.innerText = "Menu"

  const contactLink = document.createElement('li')
  contactLink.className = 'navbar-btn nav-link contact'
  contactLink.innerText = "Contact"

  navbar.appendChild(homeLink)
  navbar.appendChild(menuLink)
  navbar.appendChild(contactLink)

  return navDiv;
};

export default navPage;
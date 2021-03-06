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

export default initialLoad;
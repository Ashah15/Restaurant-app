import './CSS/styles.css';
import HeaderImg from './headerimg.png';
import Contact from './contact';
import Menu from './menu';


const initialLoad = () => {
      // Make parent div and give it classes
      const headerInfo = document.createElement("div")
      headerInfo.classList.add("row", "header__info");

      const headerTextContent = document.createElement("div");
      headerTextContent.classList.add("col", "header__text-content");

      const headerTitle = document.createElement("h2");
      headerTitle.classList.add("header__title");
      headerTitle.textContent = "A Premium And Authentic Steakhouse";

      const headerContent = document.createElement("p");
      headerContent.classList.add("header__content");
      headerContent.textContent = "We've been running for over 20 years and have become a habit of over 2000 customers";

      const headerBtn = document.createElement("button");
      headerBtn.classList.add("header__btn");
      headerBtn.textContent = "Menu"

      headerTextContent.appendChild(headerTitle);
      headerTextContent.appendChild(headerContent);
      headerTextContent.appendChild(headerBtn);

      const headerImgContent = document.createElement("div");
      headerImgContent.classList.add("col", "header__img-content");

      const headerImg = document.createElement("img");
      headerImg.setAttribute("alt", "Marvy restaurant");
      headerImg.src = HeaderImg;

      headerImgContent.appendChild(headerImg);
      

      headerInfo.appendChild(headerTextContent);
      headerInfo.appendChild(headerImgContent);
      
      return headerInfo;

}

const content = document.getElementById("content");
content.appendChild(initialLoad());

document.addEventListener("click", function(e){  
    content.innerHTML = "";

    if(e.target.textContent === "Home"){
        content.appendChild(initialLoad());
    }
    if(e.target.textContent === "Menu"){
        // console.log(Menu())
        content.appendChild(Menu());
    }
    if(e.target.textContent === "Contact"){
        content.appendChild(Contact());
    }
      
})
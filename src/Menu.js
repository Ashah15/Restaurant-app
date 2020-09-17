import appetizerImg from './appetizer.png';
import mainDishImg from './maindish.png';
import desertImg from './desert.png';
import sideDishImg from './sidedish.png';

const foodItems = [
    {
        mealType: "Appetizer",
        detail: "Start with our fresh baked bread with an egg and basil on top",
        img: appetizerImg
    },
    {
        mealType: "Main Dish",
        detail: "Our juicy fresh grilled Steak is served to satisfy your appetite",
        img: mainDishImg
    },
    {
        mealType: "Side Dish",
        detail: "Have a healthy salad mixed with light slice meat to complement your steak",
        img: sideDishImg
    },
    {
        mealType: "Dessert",
        detail: "Finish your Kitchen experience with a cake to cleanse your mouth",
        img: desertImg
    },
];

const Menu = () => {
    const menuBox = document.createElement("div");
    menuBox.classList.add("menu-box");


    foodItems.forEach(food => {
        const meal = document.createElement("div");
        meal.classList.add("meal");

        const mealImg = document.createElement("img");
        mealImg.classList.add("meal-img");
        mealImg.src = food.img

        const mealTitle = document.createElement("p");
        mealTitle.classList.add("meal-title");
        mealTitle.textContent= food.mealType;

        const mealDetail = document.createElement("p");
        mealDetail.classList.add("meal-detail");
        mealDetail.textContent= food.detail;

        meal.appendChild(mealImg);
        meal.appendChild(mealTitle);
        meal.appendChild(mealDetail);

       
        menuBox.appendChild(meal);
        
    })

    return menuBox;
}


export default Menu;
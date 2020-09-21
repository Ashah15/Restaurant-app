// import appetizerImg from './appetizer.png';
import mealImg from './meal.jpg';
import muffinImg from './muffin.jpg';
import coffeeImg from './coffee.jpg';
import breadImg from './bread.jpg';
import shrimpImg from './shrimp.jpg';
import meatImg from './duck.jpg';
import soupImg from './goulash.jpg';
// import sideDishImg from './sidedish.png';

const foodItems = [
    {
        mealType: "Breakfast",
        detail: "Start off your day with our great breakfast selection to keep you pumped up during the day",
        img: coffeeImg
    },
    {
        mealType: "Starters",
        detail: "Start with our fresh baked bread with an egg and basil on top",
        img: breadImg
    },
    {
        mealType: "Soup",
        detail: "You can enjoy your meat soup in our hotel",
        img: soupImg
    },
    {
        mealType: "Meat Dish",
        detail: "Satisfy your appetite with our meat dish",
        img: meatImg
    },
    {
        mealType: "Seafood Dish",
        detail: "Lets you enjoy a well and healthy meal for those who prefer seafood delicacy",
        img: shrimpImg
    },
    {
        mealType: "Desert",
        detail: "Round up your meal with our flavoured burst of tasteful sweettooth extravaganza",
        img: muffinImg
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
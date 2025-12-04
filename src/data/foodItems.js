import burger from "../assets/burger.svg";
import chickenNuggets from "../assets/chicken.svg";
import frenchfries from "../assets/french-fries.svg";
import pizza from "../assets/pizza.svg";
import chickenShawarma from "../assets/shawarma.svg";

const foodItems = [
  {
    id: 0,
    name: "French Fries",
    price: 300,
    icon: frenchfries,
  },
  {
    id: 1,
    name: "Beef Cheese Pizza",
    price: 900,
    icon: pizza,
  },
  {
    id: 2,
    name: "Crispy Chicken Nuggets",
    price: 250,
    icon: chickenNuggets,
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: 500,
    icon: burger,
  },
  {
    id: 4,
    name: "Chicken Shawarma",
    price: 350,
    icon: chickenShawarma,
  },
];

export default foodItems;

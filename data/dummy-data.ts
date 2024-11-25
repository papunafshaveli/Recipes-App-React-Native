import createMeal from "@/models/meal";
import { createCategory, Category } from "@/models/category";

export const CATEGORIES: Category[] = [
  createCategory("c1", "Italian", "#f5428d"),
  createCategory("c2", "Quick & Easy", "#f54242"),
  createCategory("c3", "Hamburgers", "#f5a442"),
  createCategory("c4", "German", "#f5d142"),
  createCategory("c5", "Light & Lovely", "#368dff"),
  createCategory("c6", "Exotic", "#41d95d"),
  createCategory("c7", "Breakfast", "#9eecff"),
  createCategory("c8", "Asian", "#b9ffb0"),
  createCategory("c9", "French", "#ffc7ff"),
  createCategory("c10", "Summer", "#47fced"),
];

export const MEALS = [
  createMeal({
    id: "m1",
    categoryIds: ["c1", "c2"],
    title: "Spaghetti with Tomato Sauce",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://upload.wikimedia.org/.../Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg",
    duration: 20,
    ingredients: [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    steps: [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    isGlutenFree: false,
    isVegan: true,
    isVegetarian: true,
    isLactoseFree: true,
  }),
  createMeal({
    id: "m2",
    categoryIds: ["c2"],
    title: "Toast Hawaii",
    affordability: "affordable",
    complexity: "simple",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg",
    duration: 10,
    ingredients: [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    steps: [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    isGlutenFree: false,
    isVegan: false,
    isVegetarian: false,
    isLactoseFree: false,
  }),
];

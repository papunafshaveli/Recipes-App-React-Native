## Recipes App

A React Native application that allows users to view a list of meal categories and the meals under each category. The app uses React Navigation to navigate between different screens, and it demonstrates how to pass parameters using the navigation stack.

## Features

Category Listing: Displays a grid of categories, and when a category is selected, it navigates to the meal listing screen for that category.
Meal Listing: Shows meals that belong to the selected category. Each meal item contains information like title, image, duration, complexity, and affordability.

## Technologies Used

React Native: For building the mobile app.
React Navigation: For handling navigation between different screens.
TypeScript: For type safety in the code.
FlatList: For rendering lists of categories and meals.
React Hooks: useNavigation, useRoute, useLayoutEffect for managing navigation and screen setup.

## Screens

CategoriesScreen: Displays a list of meal categories in a grid. When a category is clicked, it navigates to the MealsOverviewScreen.
MealsOverviewScreen: Displays a list of meals for the selected category. It uses parameters passed through the navigation stack to filter meals by category.

## Notes

This project is a small sample app built with React Native and React Navigation to demonstrate the use of navigation, useNavigation, useRoute, and TypeScript.
Navigation between screens is achieved using react-navigation library.
The app uses dummy data for categories and meals.

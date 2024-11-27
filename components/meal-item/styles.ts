import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,

    borderRadius: 8,

    overflow: "hidden",

    backgroundColor: "#D6DAC8",

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: "white",

    marginTop: 10,

    padding: 10,

    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  recipeDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 10,
  },
  detailsText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  pressedMeal: {
    opacity: 0.7,
  },
});

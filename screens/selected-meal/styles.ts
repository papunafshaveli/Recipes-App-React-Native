import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  selectedMealContainer: {
    flex: 1,

    backgroundColor: "#343131",
  },
  selectedMealImg: {
    width: "100%",
    height: 200,
  },

  selectedMealTitle: {
    color: "white",

    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",

    marginVertical: 10,
  },
  recipeDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 5,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,

    marginHorizontal: 10,
  },
  detailsText: {
    color: "#FAF6E3",
    fontSize: 14,
    fontWeight: "bold",
  },
  ingredientsList: {
    margin: 10,
    flex: 1,
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,

    padding: 10,
  },
  stepsList: {
    margin: 10,
    flex: 1,
    minHeight: 100,

    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,

    padding: 10,
  },
  stepsText: {
    color: "#FFE6A5",
    fontSize: 14,
    fontWeight: "bold",
  },
  ingredientText: {
    color: "#FFCF9D",
    fontSize: 14,
    fontWeight: "bold",
  },
  stepText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;

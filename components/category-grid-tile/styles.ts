import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,

    margin: 16,

    height: 150,

    borderRadius: 8,

    elevation: 4,

    backgroundColor: "white",
    shadowColor: "black",

    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  pressedBtn: {
    opacity: 0.7,
    backgroundColor: "#ccc",
  },
  innerContainer: {
    flex: 1,

    padding: 16,

    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",

    fontSize: 16,
  },
});

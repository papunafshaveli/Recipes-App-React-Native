import { Link } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";

import { View } from "react-native";

import indexStyles from "./indexStyles";

export default function Index() {
  return (
    <View style={indexStyles.indexContainer}>
      <StatusBar style="light" />
      <Link style={indexStyles.link} screen={"MealsCategories"}>
        Get Started!
      </Link>
    </View>
  );
}

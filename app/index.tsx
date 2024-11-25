import CategoriesScreen from "@/screens/CategoriesScreen";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import indexStyles from "./indexStyles";

export default function Index() {
  return (
    <View style={indexStyles.indexContainer}>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

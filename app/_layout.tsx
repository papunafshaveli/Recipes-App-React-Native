import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from "./index";

import CategoriesScreen from "@/screens/categories-screen/CategoriesScreen";
import MealsOverviewScreen from "@/screens/meals-overview-screen/MealsOverviewScreen";
import SelectedMeal from "@/screens/selected-meal/SelectedMeal";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="index">
          <Stack.Screen
            name="index"
            component={Index}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Categories",
              headerStyle: { backgroundColor: "#343131" },
              headerTintColor: "white",
              headerBackTitle: "Home",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="SelectedMeal" component={SelectedMeal} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}

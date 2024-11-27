import { View, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import MealItem from "@/components/meal-item/MealItem";

import { CATEGORIES, MEALS } from "@/data/dummy-data";

import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

type CurrentMealPropsType = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  id: string;
};

type MealsOverviewRouteParams = {
  categoryId: string;
};

const MealsOverviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { categoryId } = route.params as MealsOverviewRouteParams;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
      headerStyle: { backgroundColor: "#343131" },
      headerTintColor: "white",
    });
  }, [categoryId, navigation]);

  const RenderMealItem = (itemData: { item: CurrentMealPropsType }) => {
    const currMeal = itemData.item;
    const currentMealProps: CurrentMealPropsType = {
      title: currMeal.title,
      imageUrl: currMeal.imageUrl,
      duration: currMeal.duration,
      complexity: currMeal.complexity,
      affordability: currMeal.affordability,
      id: currMeal.id,
    };
    return <MealItem {...currentMealProps} />;
  };

  return (
    <View style={styles.mealsOverviewContainer}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={RenderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

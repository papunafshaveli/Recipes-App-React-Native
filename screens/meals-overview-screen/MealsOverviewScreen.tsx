import { View, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import MealItem from "@/components/meal-item/MealItem";

import { CATEGORIES, MEALS } from "@/data/dummy-data";

import styles from "./styles";

type CurrentMealPropsType = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealsOverviewScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
      headerStyle: { backgroundColor: "#343131" },
      headerTintColor: "white",
    });
  }, [catId, navigation]);

  const RenderMealItem = (itemData: { item: CurrentMealPropsType }) => {
    const currMeal = itemData.item;
    const currentMealProps: CurrentMealPropsType = {
      title: currMeal.title,
      imageUrl: currMeal.imageUrl,
      duration: currMeal.duration,
      complexity: currMeal.complexity,
      affordability: currMeal.affordability,
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

import { View, Text, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";

import { MEALS } from "@/data/dummy-data";

import styles from "./styles";
import IconButton from "@/components/icon-button/IconButton";

type SelectedMealRouteParams = {
  mealId: string;
};

const SelectedMeal = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { mealId } = route.params as SelectedMealRouteParams;

  const meal = MEALS.find((meal) => meal.id === mealId);

  const [isIconVisible, setIsIconVisible] = useState(false);

  useLayoutEffect(() => {
    const mealsTitle = meal?.title;

    const handleIconButtonPress = () => {
      setIsIconVisible((prevState) => !prevState);
    };

    const iconOpacity = isIconVisible ? 1 : 0.09;

    navigation.setOptions({
      title: mealsTitle,
      headerStyle: { backgroundColor: "#343131" },
      headerTintColor: "white",
      headerRight: () => (
        <IconButton
          onIconButtonPress={handleIconButtonPress}
          iconColor="white"
          iconName="star"
          iconOpacity={iconOpacity}
        />
      ),
    });
  }, [mealId, navigation, isIconVisible]);

  return (
    <View style={styles.selectedMealContainer}>
      <Image style={styles.selectedMealImg} source={{ uri: meal?.imageUrl }} />

      <Text style={styles.selectedMealTitle}>{meal?.title}</Text>

      <View style={styles.recipeDetails}>
        <Text style={styles.detailsText}>{meal?.duration} min</Text>
        <Text style={styles.detailsText}>{meal?.complexity}</Text>
        <Text style={styles.detailsText}>{meal?.affordability}</Text>
      </View>
      <FlatList
        style={styles.ingredientsList}
        data={meal?.ingredients}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.ingredientText}>{item}</Text>
        )}
      />

      <FlatList
        style={styles.stepsList}
        data={meal?.steps}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.stepsText}>{item}</Text>}
      />
    </View>
  );
};

export default SelectedMeal;

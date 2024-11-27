import { View, Text, Pressable, Image } from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type MealItemProps = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  id: string;
};

type RootStackParamList = {
  SelectedMeal: { mealId: string };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SelectedMeal"
>;

const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigateToSelectedMeal = () => {
    navigation.navigate("SelectedMeal", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressedMeal : null)}
        onPress={handleNavigateToSelectedMeal}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.recipeDetails}>
          <Text style={styles.detailsText}>{duration} min</Text>
          <Text style={styles.detailsText}>{complexity}</Text>
          <Text style={styles.detailsText}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

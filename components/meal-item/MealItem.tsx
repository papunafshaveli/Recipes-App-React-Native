import { View, Text, Pressable, Image } from "react-native";

import { styles } from "./styles";

type MealItemProps = {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

const MealItem: React.FC<MealItemProps> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressedMeal : null)}
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

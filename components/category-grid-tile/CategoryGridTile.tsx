import { Pressable, View, Text } from "react-native";
import { styles } from "./styles";

type renderCategoryItemProps = {
  title: string;
  color: string;
};

const CategoryGridTile: React.FC<renderCategoryItemProps> = ({
  title,
  color,
}) => {
  return (
    <View style={styles.gridItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedBtn : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

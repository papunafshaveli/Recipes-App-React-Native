import { Pressable, View, Text } from "react-native";

import { styles } from "./styles";

type renderCategoryItemProps = {
  title: string;
  color: string;
  onCategoryPress: () => void;
};

const CategoryGridTile: React.FC<renderCategoryItemProps> = ({
  title,
  color,
  onCategoryPress,
}) => {
  return (
    <View style={styles.gridItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedBtn : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onCategoryPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

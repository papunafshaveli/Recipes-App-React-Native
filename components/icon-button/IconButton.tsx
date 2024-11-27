import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type IconButtonProps = {
  onIconButtonPress: () => void;
  iconName: any;
  iconColor: string;
  iconOpacity?: number;
};

const IconButton: React.FC<IconButtonProps> = ({
  onIconButtonPress,
  iconName,
  iconColor,
  iconOpacity,
}) => {
  return (
    <Pressable
      onPress={onIconButtonPress}
      style={({ pressed }) => (pressed ? styles.pressedBtn : null)}
      android_ripple={{ color: "#ccc" }}
    >
      <Ionicons
        name={iconName}
        size={24}
        color={iconColor}
        style={{ opacity: iconOpacity }}
      />
    </Pressable>
  );
};

export default IconButton;

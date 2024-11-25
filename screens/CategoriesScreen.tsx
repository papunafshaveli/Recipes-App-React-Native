import { FlatList, View } from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import CategoryGridTile from "@/components/category-grid-tile/CategoryGridTile";

const renderCategoryItem = (itemData: {
  item: { title: string; color: string };
}) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};
const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

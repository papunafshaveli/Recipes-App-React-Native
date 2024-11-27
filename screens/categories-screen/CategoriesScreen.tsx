import { FlatList } from "react-native";

import { CATEGORIES } from "@/data/dummy-data";
import CategoryGridTile from "@/components/category-grid-tile/CategoryGridTile";

const CategoriesScreen = ({ navigation }: { navigation: any }) => {
  const renderCategoryItem = (itemData: {
    item: { title: string; color: string; id: string };
  }) => {
    const handleCategoryClick = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onCategoryPress={handleCategoryClick}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={{ flex: 1, backgroundColor: "#343131" }}
    />
  );
};

export default CategoriesScreen;

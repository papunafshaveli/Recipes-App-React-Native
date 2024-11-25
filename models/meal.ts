export const createMeal = ({
  id,
  categoryIds,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}: {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}) => ({
  id,
  categoryIds,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  ingredients,
  steps,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
});

export default createMeal;

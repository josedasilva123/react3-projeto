import { useCategories } from "../../../../hooks/useCategories";
import { Text } from "../../../shared/fragments/content/Text";

interface Props {
  categoryId?: number;
}

export function CategoryName({ categoryId }: Props) {
  const { categoryList } = useCategories();

  const currentCategory = categoryList?.find(
    (category) => category.id === categoryId
  );

  return currentCategory ? <Text tag="span" size="sm">{currentCategory.label}</Text> : null;
}

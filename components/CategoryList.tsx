import React, { useEffect, useState } from "react";
import { FlatList, Text, Pressable, ActivityIndicator } from "react-native";
import { getCategories, Category } from "@/api/service";

type CategoryListProps = {
  className?: string;
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const onPress = () => {
    console.log("Category pressed:", category);
  };

  return (
    <Pressable
      onPress={onPress}
      className="h-[164px] w-[240px] rounded-lg overflow-hidden mr-4"
    >
      <Text className="text-red font-bold">{category.name}</Text>
    </Pressable>
  );
};

const CategoryList: React.FC<CategoryListProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    categories: Category[];
    hasMore: boolean;
    page: number;
  }>({
    categories: [],
    hasMore: true,
    page: 0,
  });

  const fetchMore = async () => {
    if (isLoading || !results.hasMore) return;
    setIsLoading(true);
    try {
      const { data, meta } = await getCategories(results.page + 1);
      const newCategories = [...results.categories, ...data];
      const { page, pageCount } = meta.pagination;
      const hasMore = page < pageCount;
      console.log(newCategories.length, page, hasMore);
      setResults({
        categories: newCategories,
        hasMore,
        page,
      });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <FlatList
      className={className}
      data={results.categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CategoryCard category={item} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading && results.hasMore ? <ActivityIndicator size="large" /> : null
      }
      ListEmptyComponent={
        !isLoading && !results.hasMore ? <Text>No categories found</Text> : null
      }
    />
  );
};

export default CategoryList;

import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  Pressable,
  ActivityIndicator,
  ImageBackground,
  View,
  useWindowDimensions,
} from "react-native";
import { getCategories, Category } from "@/api/service";

type CategoryListProps = {
  listHeader?: React.ReactElement;
  className?: string;
  onScroll?: (event: any) => void;
  scrollEventThrottle?: number;
};

const CategoryCard: React.FC<{ category: Category; size: number }> = ({
  category,
  size,
}) => {
  const onPress = () => {
    console.log("Category pressed:", category);
  };

  return (
    <Pressable
      onPress={onPress}
      className="aspect-square rounded-lg border-[#29BB892E] border-[0.5px] overflow-hidden"
      style={{ width: size, height: size }}
    >
      <ImageBackground
        source={{ uri: category.image.url }}
        className="flex-1 justify-start"
        imageStyle={{ borderRadius: 12 }}
      >
        <View className="p-2">
          <Text className="text-[#13231B] font-bold">{category.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const CategoryList: React.FC<CategoryListProps> = ({
  listHeader,
  className,
  onScroll,
  scrollEventThrottle = 16,
}) => {
  const { width } = useWindowDimensions();
  const gap = 16;
  const numColumns = 2;
  const cardSize = (width - gap * (numColumns + 1)) / numColumns;

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
      contentContainerStyle={{ gap }}
      columnWrapperStyle={{ gap }}
      ListHeaderComponent={listHeader}
      data={results.categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CategoryCard category={item} size={cardSize} />
      )}
      numColumns={numColumns}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      onScroll={onScroll}
      scrollEventThrottle={scrollEventThrottle}
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

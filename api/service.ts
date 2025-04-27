const API_BASE_URL = "https://dummy-api-jtg6bessta-ey.a.run.app/";

export type Question = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: {
    id: number;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
};

export type QuestionsResponse = {
  data: Question[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Category = {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
};

export type CategoriesResponse = Category[];

export const getCategories = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}getCategories`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const getQuestions = async (): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}getQuestions`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

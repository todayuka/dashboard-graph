import { createContext, useContext, useState, ReactNode } from "react";

type Category = "A" | "B";

const CategoryContext = createContext<{
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
} | null>(null);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("A");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};

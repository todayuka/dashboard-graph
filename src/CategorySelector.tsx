import { useCategory } from "./CategoryContext";

const CategorySelector: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="pb-4">
      <label>
        カテゴリを選択:
        <select
          className="bg-white border"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as "A" | "B")}
        >
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
      </label>
    </div>
  );
};

export default CategorySelector;

import { CategoryProvider } from "./CategoryContext";
import CategorySelector from "./CategorySelector";
import Graph from "./Graph";

const DashBoard: React.FC = () => {
  return (
    <CategoryProvider>
      <div>
        <CategorySelector />
        <Graph />
      </div>
    </CategoryProvider>
  );
};

export default DashBoard;

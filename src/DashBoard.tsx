import { categoryAGraphData, categoryBGraphData } from "./GraphData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useState } from "react";

// 必要な要素を登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Title,
  Tooltip,
  Legend
);

const DashBoard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"A" | "B">("A");

  const data =
    selectedCategory === "A" ? categoryAGraphData : categoryBGraphData;

  const chartData = {
    labels: data.map((item) => item.Date.toString()),
    datasets: [
      {
        type: "bar" as const,
        label: "新規ユーザー数",
        data: data.map((item) => item.newMember),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        yAxisID: "y1",
      },
      {
        type: "line" as const,
        label: "アクティブユーザー数",
        data: data.map((item) => item.ActiveUser),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y1: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "新規ユーザー数",
          color: "rgba(75, 192, 192, 0.6)",
        },
        ticks: { color: "rgba(75, 192, 192, 0.6)" },
      },
      y2: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "アクティブユーザー数",
          color: "rgba(255, 99, 132, 1)",
        },
        ticks: { color: "rgba(255, 99, 132, 1)" },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <div>
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
      <Chart type="bar" data={chartData} options={options} />
    </div>
  );
};

export default DashBoard;

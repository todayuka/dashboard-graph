import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  BarController,
  LineController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { useCategory } from "./CategoryContext";
import { categoryAGraphData, categoryBGraphData } from "./GraphData";

// 必要なコンポーネントを登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Tooltip
);

const Graph: React.FC = () => {
  const { selectedCategory } = useCategory();

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

  return <Chart type="bar" data={chartData} options={options} />;
};

export default Graph;

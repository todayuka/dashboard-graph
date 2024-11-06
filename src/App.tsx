import "./App.css";
import DashBoard from "./DashBoard";

function App() {
  return (
    <>
      <div className="bg-white text-black p-5 w-[768px] aspect-video">
        <h1 className="text-2xl pb-4">Chart.jsを使ったグラフの描画</h1>
        <DashBoard />
      </div>
    </>
  );
}

export default App;

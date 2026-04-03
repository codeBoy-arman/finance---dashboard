import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const transactions = useSelector((state) => state.finance.transactions);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f172a] via-[#020617] to-black text-white font-sans">
      <Dashboard />
    </div>
  );
}

export default App;
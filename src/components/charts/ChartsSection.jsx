import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

export default function ChartsSection() {
  const transactions = useSelector((state) => state.finance.transactions);
  
  const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444", "#EC4899"];

  // Line chart data (date vs amount)
  const lineData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  // Pie chart data (category-wise expense)
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Line Chart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6 hover:scale-[1.03] transition duration-300 ease-in-out">
        <h2 className="mb-4 font-semibold">Spending Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg p-6 hover:scale-[1.03] transition duration-300 ease-in-out">
        <h2 className="mb-4 font-semibold">Expense Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
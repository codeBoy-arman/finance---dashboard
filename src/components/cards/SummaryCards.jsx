import { useSelector } from "react-redux";

export default function SummaryCards() {
  const transactions = useSelector((state) => state.finance.transactions);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Balance" value={balance} color="bg-gradient-to-r from-indigo-500 to-blue-600" />
      <Card title="Income" value={income} color="bg-gradient-to-r from-emerald-500 to-green-600" />
      <Card title="Expense" value={expense} color="bg-gradient-to-r from-rose-500 to-red-600" />
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className={`p-6 rounded-2xl ${color} shadow-lg hover:scale-[1.02] transition duration-300 ease-in-out`}>
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-3xl font-bold mt-2 tracking-tight">
        ₹{value}
      </p>
    </div>
  );
}
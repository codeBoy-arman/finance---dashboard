import { useSelector } from "react-redux";

export default function Insights() {
  const transactions = useSelector((state) => state.finance.transactions);

  // 🧠 Calculate insights

  let totalIncome = 0;
  let totalExpense = 0;
  let categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;

      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  // Highest spending category
  let topCategory = "N/A";
  let max = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-xl font-bold">Insights</h2>

      <div className="grid md:grid-cols-3 gap-4 text-sm">

        <InsightCard
          label="Top Spending Category"
          value={topCategory}
        />

        <InsightCard
          label="Total Transactions"
          value={transactions.length}
        />

        <InsightCard
          label="Income vs Expense"
          value={`₹${totalIncome} / ₹${totalExpense}`}
        />

      </div>
    </div>
  );
}

function InsightCard({ label, value }) {
  return (
    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl shadow-lg hover:scale-[1.03] transition duration-300 ease-in-out">
      <p className="text-gray-300">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
}
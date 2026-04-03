import RoleSwitcher from "../components/common/RoleSwitcher";
import SummaryCards from "../components/cards/SummaryCards";
import ChartsSection from "../components/charts/ChartsSection";
import TransactionsTable from "../components/transactions/TransactionsTable";
import Insights from "../components/insights/Insights";

export default function Dashboard() {
  return (
    <div className="px-6 py-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          💰 Finance Dashboard
        </h1>
        <p className="text-gray-400 text-sm">Track your finances smartly 💡</p>
        <RoleSwitcher />
      </div>

      <SummaryCards />
      <ChartsSection />
      <Insights />
      <TransactionsTable />
    </div>
  );
}

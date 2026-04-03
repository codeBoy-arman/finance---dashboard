import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";
import { deleteTransaction } from "../../store/financeSlice";

export default function TransactionsTable() {
  const dispatch = useDispatch();
  const { transactions, role } = useSelector((state) => state.finance);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  // 🔍 Filter logic
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.type.toLowerCase().includes(search.toLowerCase());
    t.amount.toString().includes(search);

    const matchesType = typeFilter === "all" ? true : t.type === typeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <h2 className="text-xl font-bold">Transactions</h2>

          {/* Controls */}
          <div className="flex gap-3 flex-wrap">
            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-white/10 border border-gray-600 px-3 py-2 rounded-lg text-white"
            >
              <option value="all" className="text-black">
                All
              </option>
              <option value="income" className="text-black">
                Income
              </option>
              <option value="expense" className="text-black">
                Expense
              </option>
            </select>

            {/* Admin Button */}
            {role === "admin" && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-linear-to-r from-indigo-500 to-blue-600 px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-xl transition"
              >
                + Add
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-gray-300">
          <thead className="text-xs uppercase bg-white/5 text-gray-400 text-start">
            <tr className="hover:bg-white/5 transition border-b border-white/10">
              <th className="py-2">Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    <p className="text-lg">📭 No transactions yet</p>
                    <p className="text-sm">
                      Start by adding your first transaction
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="border-b border-gray-700 hover:bg-white/10 transition text-center"
                >
                  <td className="py-2">{t.date}</td>
                  <td>₹{t.amount}</td>
                  <td>{t.category}</td>
                  <td
                    className={
                      t.type === "income" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {t.type}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (confirm("Delete this transaction?")) {
                          dispatch(deleteTransaction(t.id));
                        }
                      }}
                      className="text-red-400 hover:text-red-600 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trash2 w-4 h-4"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showModal && <AddTransactionModal onClose={() => setShowModal(false)} />}
    </>
  );
}

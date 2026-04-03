import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/financeSlice";

export default function AddTransactionModal({ onClose }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTransaction({
        ...form,
        amount: Number(form.amount),
      })
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
      
      <div className="bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-xl">
        
        <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="date"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <input
            type="number"
            placeholder="Amount"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            required
            className="w-full p-2 rounded bg-gray-800 text-white"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <select
            className="w-full p-2 rounded bg-gray-800 text-white"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!form.date || !form.amount || !form.category}
              className="px-4 py-2 bg-linear-to-r from-indigo-500 to-purple-600 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
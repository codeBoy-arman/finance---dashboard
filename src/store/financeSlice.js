import { createSlice } from "@reduxjs/toolkit";
import { initialTransactions } from "../data/transactions";

const savedData = localStorage.getItem("transactions");

const initialState = {
  role: "viewer",
  transactions: savedData ? JSON.parse(savedData) : initialTransactions,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push({
        ...action.payload,
        id: Date.now(),
      });
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload,
      );
    },
  },
});

export const { setRole, addTransaction, deleteTransaction } = financeSlice.actions;
export default financeSlice.reducer;

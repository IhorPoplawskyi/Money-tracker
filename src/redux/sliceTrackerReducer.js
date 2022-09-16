import { createSlice } from "@reduxjs/toolkit";

const sliceReducer = createSlice({
  name: "tracker",
  initialState: {
    expenses: [],
    expenseTypes: ["Food", "Health care", "Internet", "Transport", "Donation"],
    income: [],
  },
  reducers: {
    addExpenseAC(state, action) {
      state.expenses.push(action.payload);
    },
    deleteExpenseAC(state, action) {
      state.expenses = state.expenses.filter((el) => el.id !== action.payload);
    },
    addIncomeAC(state, action) {
      state.income.push(action.payload);
    },
    editIncomeAC(state, action) {
      state.income.map((el) => {
        if (el.id === action.payload) {
          el.isEditing = !el.isEditing;
        }
        return el;
      });
    },
    updateIncomeAC(state, action) {
      state.income.map((el) => {
        if (el.id === action.payload[0]) {
          el.income = Number(action.payload[1]);
        }
        return el;
      });
    },
    deleteIncomeAC(state, action) {
        state.income = state.income.filter(el => el.id !== action.payload);
    }
  },
});

export default sliceReducer.reducer;
export const { addExpenseAC, deleteExpenseAC, addIncomeAC, editIncomeAC, updateIncomeAC, deleteIncomeAC} = sliceReducer.actions;

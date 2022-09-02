const ADD_EXPENSE = 'ADD_EXPENSE';
const DELETE_EXPENSE = 'DELETE_EXPENSE';
const ADD_INCOME = 'ADD_INCOME';
const EDIT_INCOME = 'EDIT_INCOME';
const UPDATE_INCOME = 'UPDATE_INCOME';
const DELETE_INCOME = 'DELETE_INCOME';

let initState = {
    expenses: [],
    expenseTypes: ['Food', 'Health care', 'Internet', 'Transport', 'Donation'],
    income: [],
};

const trackerReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_EXPENSE: return {...state, expenses: [...state.expenses, action.payload]};
        case DELETE_EXPENSE: return {...state, expenses: [...state.expenses.filter(el => el.id !== action.payload)]};
        case ADD_INCOME: return {...state, income: [...state.income, action.payload]};
        case EDIT_INCOME: return {...state, income: [...state.income.map(el => {
            if (el.id === action.payload) {
                el.isEditing = !el.isEditing;
            }
            return el;
        })]};
        case UPDATE_INCOME: return {...state, income: [...state.income.map(el => {
            if (el.id === action.id) {
                el.income = Number(action.income);
            }
            return el;
        })]};
        case DELETE_INCOME: return {...state, income: [...state.income.filter(el => el.id !== action.payload)]};
        default: return state;
    }
}

export const addExpenseAC = payload => ({type: ADD_EXPENSE, payload});
export const deleteExpenseAC = payload => ({type: DELETE_EXPENSE, payload});
export const addIncomeAC = payload => ({type: ADD_INCOME, payload});
export const editIncomeAC = payload => ({type: EDIT_INCOME, payload});
export const updateIncomeAC = (id, income) => ({type: UPDATE_INCOME, id, income});
export const deleteIncomeAC = payload => ({type: DELETE_INCOME, payload});

export default trackerReducer;
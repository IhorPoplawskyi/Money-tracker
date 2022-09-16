import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseAC } from "../../../redux/sliceTrackerReducer";
import s from '../../../styles/MonthPageAddExpenseForm.module.css';

const MonthPageAddExpenseForm = () => {
    const expenseTypes = useSelector(state => state.cash.expenseTypes);
    const dispatch = useDispatch();
    const curDate = new Date().toLocaleDateString().replaceAll('.','-').split('-');
    [curDate[0], curDate[1], curDate[2]] = [curDate[2], curDate[1], curDate[0]];
    const [date, setDate] = useState(curDate.join('-'));
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('Food');

    const addExpense = (e) => {
        e.preventDefault();
        const newExpense = {
            id: Date.now(),
            date,
            amount: Number(amount),
            description,
            isEditing: false,
        }
        dispatch(addExpenseAC(newExpense));
        setAmount('');
    }

    return (
        <div className={s.wrapper}>
        <form className={s.form}>
            <input className={s.input} type='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
            <input className={s.input} type='number' placeholder="enter an amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <select className={s.selectInput} onChange={(e) => {setDescription(e.target.value)}}>
                {expenseTypes.map(el => <option value={el} key={el}>{el}</option>)}
            </select>
            <button className={s.button} onClick={addExpense}>ADD EXPENSE</button>
        </form>
        </div>
    )
}

export default MonthPageAddExpenseForm;
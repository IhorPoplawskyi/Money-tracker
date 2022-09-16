import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncomeAC } from "../../../redux/sliceTrackerReducer";
import s from '../../../styles/MonthPageIncomeForm.module.css';

const MonthPageIncomeForm = () => {
    let [income, setIncome] = useState('')
    const dispatch = useDispatch();
    const addIncome = (e) => {
        e.preventDefault();
        const monthDate = new Date().getMonth() + 1;
        const newIncome = {
            monthDate: monthDate < 10 ? '0' + monthDate : monthDate,
            income: Number(income),
            isEditing: false,
            id: Date.now(),
        }
        dispatch(addIncomeAC(newIncome));
        setIncome('');
    }

    return (
        <div className={s.wrapper}>
            <div className={s.line}></div>
        <form>
            <input className={s.input}
            placeholder="enter an income" 
            value={income} type='number' 
            onChange={(e) => setIncome(e.target.value)}>
            </input>
            <button className={s.button} onClick={addIncome}>add income</button>
        </form>
        </div>
    )
}

export default MonthPageIncomeForm;
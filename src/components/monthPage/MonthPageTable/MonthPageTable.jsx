import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from './../../../styles/MonthPageTable.module.css'
import EconomyBlock from "./economyBlock/EconomyBlock";
import MonthTableItems from "./MonthTableItems/MonthTableItems";
import SortBlock from "./SortBlock";

const MonthPageTable = () => {
    let expenses = useSelector(state => state.cash.expenses);
    let income = useSelector(state => state.cash.income);
    let defaultMonth = new Date().getMonth() + 1;
    defaultMonth = defaultMonth < 10 ? '0' + defaultMonth : defaultMonth + '';

    const [month, setMonth] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setMonth(defaultMonth)
    },[])

    if (month) {
      expenses = expenses.filter((el) => el.date.split("-")[1] === month);
      income = income.filter((el) => el.monthDate === month);
    }
    if (description === "no filter") {
    } else if (description) {
      expenses = expenses.filter((el) => el.description === description);
    }

    if (amount === "no filter") {
    } else if (amount === "from bigger to lower") {
      expenses.sort((a, b) => b.amount - a.amount);
    } else if (amount === "from lower to bigger") {
      expenses.sort((a, b) => a.amount - b.amount);
    }

    return (
        <div className={s.monthTable}>
            <SortBlock sortByMonth={setMonth} sortByAmount={setAmount} sortByDescription={setDescription}/>
            <MonthTableItems expenses={expenses} />
            <EconomyBlock expenses={expenses} income={income}/>
        </div>
    )
}

export default MonthPageTable;
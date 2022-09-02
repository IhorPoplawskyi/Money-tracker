import React from "react";
import s from '../../../../styles/EconomyBlock.module.css'
import EconomyBlockIncomes from "./EconomyBlockIncomes";
import { useState } from "react";

const EconomyBlock = ({expenses, income}) => {
    const totalAmount = expenses.reduce((acc,el) => {return acc += el.amount}, 0);
    const totalIncome = income.reduce((acc,el) => {return acc += el.income}, 0);
    const [toogleIncome, setToogleIncome] = useState(false);

    return (
        <>
            <div className={s.line}></div>
            <div className={s.totalAmount}>
                Total spent: {totalAmount}
             </div>
            <div onClick={() => setToogleIncome(!toogleIncome)} className={s.totalIncome}>
                Total income: {totalIncome}
            </div>
            {toogleIncome === false 
            ? <div></div> 
            : <EconomyBlockIncomes income={income}/>}
            {totalIncome - totalAmount < 0 
            ? <div className={s.negative}>Minus: {totalIncome - totalAmount}</div>
            : <div className={s.positive}>Plus: {totalIncome - totalAmount}</div>
            }
        </>
    )
}

export default EconomyBlock;
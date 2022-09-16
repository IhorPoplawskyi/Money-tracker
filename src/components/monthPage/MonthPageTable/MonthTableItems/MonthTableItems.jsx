import React from "react";
import { useDispatch } from "react-redux";
import s from '../../../../styles/MonthTableItems.module.css';
import trash from '../../../../../src/trash.svg';
import { deleteExpenseAC } from "../../../../redux/sliceTrackerReducer";

const MonthTableItems = ({expenses}) => {
    const dispatch = useDispatch();
    const dates = expenses.map(el => <div className={s.item} key={el.id}>{el.date}</div>)
    const amounts = expenses.map(el => <div className={s.item} key={el.id}>{el.amount}</div>)
    const descriptions = expenses.map(el => <div className={s.item} key={el.id}>{el.description}</div>)
    const btns = expenses.map(el => <div className={s.item} key={el.id}><img onClick={() => {dispatch(deleteExpenseAC(el.id))}} src={trash}/></div>)

    return (
        <div className={s.block}>
            <div className={s.dateItem}>{dates}</div>
            <div className={s.amountItem}>{amounts}</div>
            <div className={s.descriptionItem}>{descriptions}</div>
            <div className={s.buttonsItem}>{btns}</div>
        </div>
    )
}

export default MonthTableItems;
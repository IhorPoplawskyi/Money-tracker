import React from "react";
import { useSelector } from "react-redux";
import s from '../../../styles/SortBlock.module.css'

const SortBlock = ({sortByMonth, sortByAmount, sortByDescription}) => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const amountSortTypes = ['no filter', 'from bigger to lower', 'from lower to bigger'];
  const expenseTypes = useSelector(state => state.cash.expenseTypes);

  return (
    <div className={s.block}>
      <select className={s.input} onChange={(e) => {sortByMonth(e.target.value)}} defaultValue={'Sort by month'}>
        <option disabled value='Sort by month'>Sort by month</option>
        {months.map((el, index) => <option key={el} value={index < 10 ? '0' + (index +1) : index +''}>{el}</option>)}
      </select>

      <select className={s.input} onChange={(e) => {sortByAmount(e.target.value)}} defaultValue='Sort by amount'>
        <option disabled value='Sort by amount'>Sort by amount</option>
        {amountSortTypes.map(el => <option key={el} value={el}>{el}</option>)}
      </select>

      <select className={s.input} onChange={(e) => {sortByDescription(e.target.value)}} defaultValue='Sort by description'>
          <option disabled value='Sort by description'>Sort by description</option>
          <option value='no filter'>no filter</option>
          {expenseTypes.map(el => <option key={el} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

export default SortBlock;

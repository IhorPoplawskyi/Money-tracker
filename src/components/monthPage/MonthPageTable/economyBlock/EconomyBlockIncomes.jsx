import { useDispatch } from "react-redux";
import edit from "../../../../../src/edit.svg";
import trash from "../../../../../src/trash.svg";
import { editIncomeAC, deleteIncomeAC, updateIncomeAC } from "../../../../redux/sliceTrackerReducer";
import s from "../../../../styles/EconomyBlockIncome.module.css";

const EconomyBlockIncomes = ({ income }) => {
  const dispatch = useDispatch();
  const toogleEdit = (id) => dispatch(editIncomeAC(id));
  const incomes = income.map((el) => {
    return el.isEditing === true ? (
      <input
        key={el.id}
        className={s.input}
        type="text"
        autoFocus={true}
        onBlur={() => toogleEdit(el.id)}
        onChange={(e) => dispatch(updateIncomeAC([el.id, e.target.value]))}
        value={el.income}
      ></input>
    ) : (
      <div className={s.incomeItem} key={el.id}>
        {el.income}
      </div>
    );
  });
  const editBtns = income.map((el) => (
    <div className={s.editBtn} key={el.id}>
      <img onClick={() => toogleEdit(el.id)} alt="" src={edit} />
    </div>
  ));
  const delBtns = income.map((el) => (
    <div className={s.editBtn} key={el.id}>
      <img onClick={() => dispatch(deleteIncomeAC(el.id))} alt="" src={trash} />
    </div>
  ));

  return (
    <>
      <div className={s.title}>Incomes:</div>
      <div className={s.block}>
        <div className={s.incomes}>{incomes}</div>
        <div className={s.editBtns}>{editBtns}</div>
        <div className={s.editBtns}>{delBtns}</div>
      </div>
    </>
  );
};

export default EconomyBlockIncomes;

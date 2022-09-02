import React from "react";
import MonthPageAddExpenseForm from "./monthPageAddExpenseForm/MonthPageAddExpenseForm";
import MonthPageIncomeForm from "./monthPageAddIncomeForm/MonthPageIncomeForm";
import MonthPageDescription from "./MonthPageDescription/MonthPageDescription";
import MonthPageTable from "./MonthPageTable/MonthPageTable";

const MonthPage = () => {
  return (
    <>
      <MonthPageDescription />
      <MonthPageAddExpenseForm />
      <MonthPageIncomeForm />
      <MonthPageTable />
    </>
  );
};

export default MonthPage;

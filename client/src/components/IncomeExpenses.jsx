import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amount
      .filter((transaction) => transaction < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;
  console.log(income);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;

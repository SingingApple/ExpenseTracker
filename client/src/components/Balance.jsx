import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => {
    return (acc += item);
  }, 0);
  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </React.Fragment>
  );
}

export default Balance;

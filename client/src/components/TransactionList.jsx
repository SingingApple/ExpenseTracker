import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  console.log(transactions);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
            ></Transaction>
          );
        })}
        {/* <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">x</button>
        </li> */}
      </ul>
    </React.Fragment>
  );
}

export default TransactionList;

import { v4 as uuidv4 } from "uuid";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: uuidv4(),
      text,
      amount: parseInt(amount),
    };
    addTransaction(transaction);
    setText("");
    setAmount(0);
  };
  return (
    <React.Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </React.Fragment>
  );
}

export default AddTransaction;

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
//initial State

const initialState = {
  transactions: [],
  loading: true,
  error: null,
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = (props) => {
  //Actions

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getTransactions = async () => {
    try {
      const res = await axios.get("api/v1/transactions");
      const data = res.data.data;
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({ type: "DELETE_TRANSACTION", payload: id });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };
  const addTransaction = async (transaction) => {
    const config = {
      header: {
        "Context-type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;

const Transaction = require("../Model/Transaction");
// @desc Get all transactions
// @route GET /api/v1/transactions/
//@access PUBLIC
const getTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc POST transactions
// @route POST /api/v1/transactions/
//@access PUBLIC
const addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const newTransaction = {
      text,
      amount,
    };
    const transaction = await Transaction.create(newTransaction);
    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc DELETE transaction
// @route DELETE /api/v1/transactions/
//@access PUBLiC
const deleteTransactions = (req, res, next) => {
  res.send("ADD TRANSACTIONS");
};

module.exports = {
  getTransactions,
  addTransactions,
  deleteTransactions,
};

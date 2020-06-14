const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative value"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;

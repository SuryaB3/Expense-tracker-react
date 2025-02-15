import React, { useState } from "react";

const AddExpense = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      const newExpense = {
        name,
        amount: parseFloat(amount),
        timestamp: new Date().toLocaleString(), // Add timestamp here
      };
      onAddExpense(newExpense); // Pass the expense to the parent
      setName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;

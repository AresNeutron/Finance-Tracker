import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useFinancialContext } from "../../contexts/financial-record-context";

function FinancialRecordForm() {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [cat, setCat] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const {addRecord} = useFinancialContext()

  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: desc,
      amount: parseFloat(amount),
      category: cat,
      paymentMethod: method,
    };


    addRecord(newRecord)
    setDesc("");
    setCat("");
    setAmount("");
    setMethod("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            required
            className="input"
            value={desc}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAmount(e.target.value);
            }}
            required
            className="input"
          />
        </div>
        <div className="form-field">
          <label>Category:</label>
          <select
            value={cat}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setCat(e.target.value);
            }}
            required
            className="input"
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label>Payment Method:</label>
          <select
            value={method}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setMethod(e.target.value);
            }}
            required
            className="input"
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
}

export default FinancialRecordForm;

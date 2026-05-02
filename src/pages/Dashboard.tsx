import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";

export default function Dashboard() {
  const [expenses, setExpenses] = useState<any[]>([]);

  const addExpense = (expense: any) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        💰 Smart Spending Dashboard
      </h1>

      {/* Form Card */}
      <div className="max-w-md mx-auto bg-white p-5 rounded-xl shadow">
        <ExpenseForm onAdd={addExpense} />
      </div>

      {/* Expense List Card */}
      <div className="max-w-md mx-auto mt-6 bg-white p-5 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-3">Expenses</h3>

        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses added yet</p>
        ) : (
          <ul className="space-y-3">
            {expenses.map((e, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
              >
                <span>
                  <strong>{e.title}</strong> - ₹{e.amount} <br />
                  <span className="text-sm text-gray-500">
                    {e.category}
                  </span>
                </span>

                <button
                  onClick={() => deleteExpense(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
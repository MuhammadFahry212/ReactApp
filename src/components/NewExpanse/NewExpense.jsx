import React, { useState } from 'react'
import './NewExpense.css';
import { NewExpenseForm } from './NewExpenseForm';

export const NewExpense = (props) => {
  // Buat Form ADD Hidden
  const [isEditing, setIsEditing] = useState(false);

  // Save Data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  // FUngsi Hidden Form
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  // Fungsi Cancel
  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

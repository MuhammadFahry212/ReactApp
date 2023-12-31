import React, { useState } from 'react'
import './NewExpenseForm.css';
export const NewExpenseForm = (props) => {


    const [enteredTitle,setEnteredTitle]=useState("")
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // ambil nilai input
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
     // ambil nilai input
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
 // ambil nilai input
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    // Save
    const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
    
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
      };


  return (
    <div>
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type="text"  
                    value={enteredTitle} 
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type="text" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount} 
                    onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                     type="date" 
                     min="2019-01-01" 
                     max="2022-12-31" 
                     value={enteredDate} 
                     onChange={dateChangeHandler}
                     />
                </div>

                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cansel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    </div>
  )
}

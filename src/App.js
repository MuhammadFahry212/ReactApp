import { useState } from "react";
import expenses from "./data/ExpenseItemData";
import { Expanse } from "./components/Expenses/Expanse";
import { NewExpense } from "./components/NewExpanse/NewExpense";



export const App = () => {

  const [data,setdata]=useState(expenses);
  
  const addExpenseHandler = (expense) => {
    setdata((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (     
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />   
      <Expanse items={data} />
        
    </div>
    
  );
}

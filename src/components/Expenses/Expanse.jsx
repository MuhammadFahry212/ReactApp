import React from 'react'
import './Expanse.css';

import { Card } from '../UI/Card';
import { ExpenseFilter } from './ExpenseFilter';
import { useState } from 'react';

import { ExpensesList } from './ExpensesList';
import { ExpansesCard } from './ExpansesCard';

export const Expanse = (props) => {
  const [filteredYear,SetfilteredYear]=useState('2020');
  
  
  const filterChangeHandler = selectedYear => {
   SetfilteredYear(selectedYear);   
  
  };

  const filteredExpenses=props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;

  });

  


  return (   
    <Card className='expenses'>   
       <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>  
        <ExpansesCard  expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

           
    </Card>
  
  )
}

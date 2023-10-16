import React, {  } from 'react'
import './ExpanseItem.css';
import { ExpanseDate } from './ExpanseDate';
import { Card } from '../UI/Card';

export const ExpenseItem = (props) => {
  //  const [title,setTitle]=useState(props.title)

  //   const clickHendler =()=>{
  //       setTitle("Update")
  //   };onClick={clickHendler()}

  return (
    <Card className='expense-item'>
    <ExpanseDate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
     
    </Card>
  
  )
}

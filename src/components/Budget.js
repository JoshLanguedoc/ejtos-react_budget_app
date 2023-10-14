import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {expenses, budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total = total+item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("The budget cannot exceed "+currency+"20,000");
            return;
        }
        if(event.target.value < totalExpenses){
            alert("The budget cannot be lower than what has already been allocated ("+currency+totalExpenses+")");
            return;
        }
        setNewBudget(event.target.value);
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;

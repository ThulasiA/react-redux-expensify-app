import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
  <div>
    <h3>Add Expense</h3>
    <ExpenseForm 
       onSubmit = {(expense) => { 
         props.dispatch(addExpense(expense)); 
         props.history.push('/');
       }}
    />
  </div>
);

export default connect()(AddExpense);
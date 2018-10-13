import React from 'react';
import { connect } from 'react-redux';
import selectExpense from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expensesWord = expensesCount > 1 ? 'expenses' : 'expense';
  const finalExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (    
    <div>
      <p>Viewing {expensesCount} {expensesWord} totalling {finalExpensesTotal}</p>    
    </div>
  );
};

const mapStateToProps = (state) => { 
  const visibleExpenses = selectExpense(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
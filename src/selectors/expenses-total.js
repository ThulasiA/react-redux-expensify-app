// import selectExpense from '../selectors/expenses';

// const expenses = selectExpense(expenses, filters);
export default (expenses) => expenses
                            .map( expense => expense.amount )
                            .reduce((sum, currentValue) => sum + currentValue, 0);
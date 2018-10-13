import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const action = selectExpensesTotal([]);
  expect(action).toBe(0);
});

test('should add up a single expense', () => {
  const action = selectExpensesTotal([expenses[0]]);
  expect(action).toBe(150000);
});

test('should add up multiple expenses', () => {
  const action = selectExpensesTotal(expenses);
  expect(action).toBe(452000);
});
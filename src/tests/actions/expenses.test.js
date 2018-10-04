import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'trty'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'trty'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('trtyy', {amount: 2000});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id: 'trtyy',
    updates: {
      amount: 2000
    }    
  })
});

test('should setup add expense action object', () => {
  const action = addExpense({description: 'Rent', note: 'Oct Rent', amount: 3000, createdAt: 1000});
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      description: 'Rent',
      note: 'Oct Rent',
      amount: 3000,
      createdAt: 1000,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
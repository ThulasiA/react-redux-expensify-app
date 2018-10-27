import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  addExpense, 
  startAddExpense, 
  editExpense, 
  removeExpense, 
  startRemoveExpense, 
  setExpense, 
  startSetExpense, 
  startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = "123sr";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'trty'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'trty'
  })
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;

  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}expenses/${id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
  });    

})

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

test('should update expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { note: 'Added Rent' };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe(updates.note);
    done();
  })
})

test('should setup add expense action object', () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: expenses[0]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: 'iPhone',
    note: '',
    amount: 10000,
    createdAt: 1000,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });    
});

test('should add expense to database and store with default values', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });    
});

test('should setup set expense object', () => {
  const action = setExpense(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSE',
    expenses
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSE',
      expenses
    })
    done();
  });
});
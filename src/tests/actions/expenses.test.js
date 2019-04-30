import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockeStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
})

test('should setup edit espense action object', () => {
  const action = editExpense('123abc', { note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});


test('should setup add espense action object with provided values', () => {
  // const expenseData = { description: 'test', note: 'test note', amount: 1000, createdAt: 1000000}
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database & store', (done) => {
  const store = createMockeStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 10000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) =>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database & store', (done) => {
  const store = createMockeStore({});
  const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) =>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


// test('should setup add espense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: { description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String) }
//   });
// });


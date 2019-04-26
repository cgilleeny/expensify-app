import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
  const expenseData = { description: 'test', note: 'test note', amount: 1000, createdAt: 1000000}
  const action = addExpense(expenseData);
  // const newExpenseData = { ...expenseData, id: action.expense.id }
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { ...expenseData, id: expect.any(String) }
  });
});

test('should setup add espense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { description: '', note: '', amount: 0, createdAt: 0, id: expect.any(String) }
  });
});

import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should test default state', () => {
  const result = expensesReducer(undefined, { type: '@@INIT' })
  expect(result).toEqual([]);
})

test('should be add expense reducer output with empty array', () => {
  const expense = {
    description: 'test',
    note: 'test note',
    amount: 1000,
    createdAt: moment(0).valueOf
  }
  const result = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense: expense })
  expect(result).toEqual([expense]);
})


test('should be add expense reducer output with initialized array', () => {
  const expense = {
    description: 'test',
    note: 'test note',
    amount: 1000,
    createdAt: moment(0).valueOf
  }
  const result = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: expense })
  expect(result).toEqual([...expenses, expense]);
})

// 'REMOVE_EXPENSE'

test('should be remove expense reducer output', () => {
  const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id })
  expect(result).toEqual([expenses[0], expenses[2]]);
})

// 'EDIT_EXPENSE'


test('should be edit expense reducer output with initialized array', () => {
  const updates = {
    id: expenses[1].id,
    description: 'test',
    note: 'test note',
    amount: 1000,
    createdAt: moment(0).add(2, 'days').valueOf()
  }
  const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: updates })
  expect(result).toEqual([expenses[0], updates, expenses[2]]);
})


test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
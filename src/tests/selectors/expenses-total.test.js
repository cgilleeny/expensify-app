import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('should total 0 expenses', () => {
  const sum = getExpensesTotal([]);
  expect(sum).toBe(0);
})

test('should total 1 expense', () => {
  const sum = getExpensesTotal([expenses[2]]);
  expect(sum).toBe(4500);
})

test('should total expenses', () => {
  const sum = getExpensesTotal(expenses);
  expect(sum).toBe(114195);
})

import moment from 'moment';
import filterReducer  from '../../reducers/filters';
import { start } from 'repl';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('Should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual(filterReducerDefaultState);
})

test('setup set text filter action reducer with supplied values', () => {
  const text = 'test';
  const state = filterReducer(filterReducerDefaultState, { type: 'SET_TEXT_FILTER', text: text})
  expect(state).toEqual({
    ...filterReducerDefaultState,
    text: text
  });
});

test('setup set text filter action reducer with default values', () => {
  const text = 'test';
  const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: text})
  expect(state).toEqual({
    ...filterReducerDefaultState,
    text: text
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
  const state = filterReducer({ ...filterReducerDefaultState, sortBy: 'amount' }, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date');
})


test('setup set end date filter action reducer with default values', () => {
  const endDate = moment(0).endOf('month');
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: endDate})
  expect(state.endDate).toEqual(endDate);
});


test('setup set start date filter action reducer with default values', () => {
  const startDate = moment(0).startOf('month');
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: startDate})
  expect(state.startDate).toEqual(startDate);
});
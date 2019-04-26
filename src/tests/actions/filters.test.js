import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('should setup set text filter action object with provided values', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
});

test('should setup set text filter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should setup sortby date filter action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
});


test('should setup sortby amount filter action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('should setup set start date filter action object', () => {

  const action = setStartDate(moment(1000000));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(1000000)
  })
});

test('should setup set end date filter action object', () => {
  const action = setEndDate(moment(1000000));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000000)
  })
});

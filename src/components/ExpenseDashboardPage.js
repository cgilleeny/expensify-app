import React from 'react';
import Header from '../components/Header';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
  <Header />
  <ExpenseListFilters />
  <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
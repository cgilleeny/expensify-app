import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
    <div>
    <h2>Viewing {expenseCount} expense{expenseCount === 1 ? '' : 's'} totaling {numeral(expensesTotal/100).format('$0,0.00')}</h2>
    </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
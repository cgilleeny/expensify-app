import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  // onSubmit = (expense) => {

  // };

  render() {
    return (
      <div>
      <Header />
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={(expense) => {
            this.props.startAddExpense(expense);
            this.props.history.push('/dashboard');
          }}
        />
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
    <Header />
      <p>Editing expense with id of {props.match.params.id}.</p>
      <ExpenseForm 
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.match.params.id, expense));
        props.history.push('/');
      }}
      />
      <button onClick={() => {
        props.dispatch(startRemoveExpense({id: props.match.params.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

// const mapDispatchToProps = (state, props) => ({
//   editExpense: (id, expense) => dispatch(editExpense(id, expense)),
//   startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
// });

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
} 

// export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
export default connect(mapStateToProps)(EditExpensePage);
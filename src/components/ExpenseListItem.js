import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
  <p>${amount/100}</p>

  </div>
);

export default ExpenseListItem;
// export default connect()(ExpenseListItem);
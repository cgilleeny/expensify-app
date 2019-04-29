// Get expenses total

export default (expenses) => {
  const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0)
  return sum;
};
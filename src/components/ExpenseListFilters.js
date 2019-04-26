import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div>
      <input type="text" value={this.props.filters.text} onChange={(e) => {
        this.props.dispatch(setTextFilter(e.target.value));
      }}/>
      <select value={this.props.filters.sortBy} onChange={(e) => {
        console.log(e.target.value)
        this.props.dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
      startDate={this.props.filters.startDate}
      endDate={this.props.filters.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calendarFocused}
      onFocusChange={this.onFocusChange}
      numberOfMonths={1}
      isOutsideRange={() => false }
      showClearDates={true}
      />
    </div>
    );
  } 
};
// const ExpenseListFilters = (props) => (
//   <div>
//     <input type="text" value={props.filters.text} onChange={(e) => {
//       props.dispatch(setTextFilter(e.target.value));
//     }}/>
//     <select value={props.filters.sortBy} onChange={(e) => {
//       console.log(e.target.value)
//       props.dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())
//     }}>
//       <option value="date">Date</option>
//       <option value="amount">Amount</option>
//     </select>
//   </div>
// );

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
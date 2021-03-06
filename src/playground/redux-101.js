import { createStore } from 'redux';

// Action generators

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});

// Reducers
// 1. pure functions
// 2. Never change state or action
//    read off of state & action & return a new object


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
    
      return {
        count: state.count  - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
});
store.dispatch(setCount({ count: 200 }));
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(setCount());
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 7}));
store.dispatch(decrementCount());


store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});

unsubscribe();


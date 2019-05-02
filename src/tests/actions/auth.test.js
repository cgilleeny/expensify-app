import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

const createMockeStore = configureMockStore([thunk]);

test('should setup login action object', () => {
  const action = login('123abc');
  expect(action).toEqual({
    type: 'LOGIN',
    uid: '123abc'
  });
})

test('should login user to store', () => {
  const store = createMockeStore({});
  store.dispatch(startLogin()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'LOGIN',
      uid: expect.any(String)
    });
  })
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
})


test('should logout user to store', () => {
  const store = createMockeStore({});
  store.dispatch(startLogout()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'LOGOUT'
    });
  })
});

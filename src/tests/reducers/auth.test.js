import authReducer from '../../reducers/auth';

test('should be login reducer output', () => {
  const result = authReducer({}, { type: 'LOGIN', uid: 'abc123' })
  expect(result.uid).toEqual('abc123');
})


test('should be logout reducer output', () => {
  const result = authReducer({ uid: 'anything'}, { type: 'LOGOUT' })
  expect(result).toEqual({});
})
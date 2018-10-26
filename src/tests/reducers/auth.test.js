import authReducer from '../../reducers/auth';

test('should set uid on login', () => {
  const action = {
    type: 'LOGIN',
    uid: '123sr'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid on logout', () => {
  const state = authReducer({uid: '123sr'}, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER': return { ...state, ...action.payload };
    default: return state;
  }
};

// client/src/store/__tests__/userReducer.test.js
import { userReducer } from '../reducers/userReducer';

test('sets user data', () => {
  const action = { type: 'SET_USER', payload: { name: 'Hassan' } };
  expect(userReducer({}, action)).toEqual({ name: 'Hassan' });
});
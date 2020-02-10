// @flow

import { combineReducers } from 'redux';
import login from './login';
import signup from './signup';
import user from './user';
import loading from './loading';

export default combineReducers({
  login,
  signup,
  user,
  loading,
});

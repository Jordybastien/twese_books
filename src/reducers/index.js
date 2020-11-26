import { combineReducers } from 'redux';
import loading from './loading';
import error from './error';

export default combineReducers({
  loading,
  error,
});

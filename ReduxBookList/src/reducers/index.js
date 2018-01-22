/*
 * this is a function that returns a piece of the application state.
 * since we can have multiple application states we can have multiple reducers.
*/

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;

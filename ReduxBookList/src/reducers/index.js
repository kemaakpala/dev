/*
 * this is a function that returns a piece of the application state.
 * since we can have multiple application states we can have multiple reducers.
*/

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

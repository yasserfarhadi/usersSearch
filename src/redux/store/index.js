import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer } from '../reducers';

export const store = createStore(usersReducer, {}, applyMiddleware(thunk));

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { artseenReducer } from './reducers';

export default createStore(artseenReducer, applyMiddleware(thunk));
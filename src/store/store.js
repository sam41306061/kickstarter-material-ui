import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import reducers
import { provider}  from './reducers';

const reducers = combineReducers({
    provider
});

const initalState = {};

const middleware = [thunk];

const store = legacy_createStore(reducers, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // connect to the chrome exstension

// import reducers
import { provider, campaign }  from './reducers';

const reducers = combineReducers({
    provider,

});

const initalState = {};

const middleware = [thunk];

const store = legacy_createStore(reducers, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
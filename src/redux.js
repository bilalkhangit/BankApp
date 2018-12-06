import { createStore, combineReducers } from 'redux';

import dashboardReducer from './reducers/Dashboard'
import accountsReducer from './reducers/Accounts'

const allReducers = combineReducers({ dashboardReducer  , accountsReducer})

let store = createStore(allReducers);

export default store
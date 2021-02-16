import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import totalPriceReducer from './TotalPrice/reducers'

const rootReducer = combineReducers({
  totalPriceReducer,
})

const INITIAL_STATE = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import basketReducer from './Basket/reducers'
import productsReducer from './Products/reducers'

const rootReducer = combineReducers({
  basketReducer,
  productsReducer,
})

const INITIAL_STATE = {}
const middleware = [thunk]

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

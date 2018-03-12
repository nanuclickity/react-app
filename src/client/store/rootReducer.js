import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Facebook from './Facebook'

export default combineReducers({
  router: routerReducer,
  Facebook
})

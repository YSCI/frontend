import { combineReducers } from 'redux'


import { app } from './app'
import { auth } from './auth'

export const rootReducer = combineReducers({
  app,
  auth
})
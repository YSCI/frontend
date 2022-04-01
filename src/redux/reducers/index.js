import { combineReducers } from 'redux'


import { app } from './app'
import { auth } from './auth'
import { modal } from './modal'
import { regions } from './regions'
import { statuses } from './statuses'
import { privileges } from './privileges'
import { professions } from './professions'
import { communities } from './communities'
import { citizenships } from './citizenships'
import { commissariats } from './commissariats'
import { nationalities } from './nationalities'
import { healthStatuses } from './healthStatuses'

export const rootReducer = combineReducers({
  app,
  auth,
  modal,
  regions,
  statuses,
  privileges,
  professions,
  communities,
  citizenships,
  commissariats,
  nationalities,
  healthStatuses
})
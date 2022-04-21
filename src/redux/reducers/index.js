import { combineReducers } from 'redux'


import { app } from './app'
import { auth } from './auth'
import { users } from './users'
import { modal } from './modal'
import { groups } from './groups'
import { profile } from './profile'
import { regions } from './regions'
import { statuses } from './statuses'
import { students } from './students'
import { commands } from './commands'
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
  users,
  modal,
  groups,
  regions,
  profile,
  statuses,
  students,
  commands,
  privileges,
  professions,
  communities,
  citizenships,
  commissariats,
  nationalities,
  healthStatuses
})
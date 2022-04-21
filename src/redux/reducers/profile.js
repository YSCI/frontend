import { AUTH_TYPES } from 'redux/types/auth'
import { PROFILE_TYPES } from 'redux/types/profile'
import { STUDENTS_TYPES } from 'redux/types/students'

const initialState = {
  loaded: false,
  data: null
}

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOAD_PROFILE:
      return {
        ...state,
        data: action.data
      }
    case PROFILE_TYPES.LOAD_COMMANDS_HISTORY:
      return {
        ...state,
        data: {
          ...state.data,
          commandHistory: {
            list: action.data,
            total: action.total
          }
        }
      }
    case STUDENTS_TYPES.EDIT_STUDENT:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.data
        }
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
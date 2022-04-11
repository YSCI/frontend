import { AUTH_TYPES } from 'redux/types/auth'
import { PROFILE_TYPES } from 'redux/types/profile'

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
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
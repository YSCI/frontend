import { AUTH_TYPES } from "redux/types/auth"
import { STATUSES_TYPES } from "redux/types/statuses"

const initialState = {
  loaded: false,
  total: 0,
  list: []
}

export const statuses = (state = initialState, action) => {
  switch(action.type) {
    case STATUSES_TYPES.LOAD_STATUSES:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case STATUSES_TYPES.CREATE_STATUS:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case STATUSES_TYPES.EDIT_STATUS:
      const editedStatusIndex = state.list.findIndex(status => status.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStatusIndex),
          action.data,
          ...state.list.slice(editedStatusIndex + 1)
        ]
      }
    case STATUSES_TYPES.DELETE_STATUS:
      return {
        ...state,
        list: state.list.filter(status => !action.data.includes(status.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
import { AUTH_TYPES } from "redux/types/auth"
import { CITIZENSHIPS_TYPES } from "redux/types/citizenships"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const citizenships = (state = initialState, action) => {
  switch(action.type) {
    case CITIZENSHIPS_TYPES.LOAD_CITIZENSHIPS:
      return {
        ...state,
        loaded: true,
        list: action.list,
        total: action.total
      }
    case CITIZENSHIPS_TYPES.CREATE_CITIZENSHIP:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case CITIZENSHIPS_TYPES.EDIT_CITIZENSHIP:
      const editedCitizenshipIndex = state.list.findIndex(citizenship => citizenship.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedCitizenshipIndex),
          action.data,
          ...state.list.slice(editedCitizenshipIndex + 1)
        ]
      }
    case CITIZENSHIPS_TYPES.DELETE_CITIZENSHIP:
      return {
        ...state,
        list: state.list.filter(citizenship => !action.data.includes(citizenship.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
import { AUTH_TYPES } from "redux/types/auth"
import { PROFESSIONS_TYPES } from "redux/types/professions"

const initialState = {
  loaded: false,
  list: []
}

export const professions = (state = initialState, action) => {
  switch(action.type) {
    case PROFESSIONS_TYPES.LOAD_PROFESSIONS:
      return {
        ...state,
        loaded: true,
        list: action.list
      }
    case PROFESSIONS_TYPES.CREATE_PROFESSION:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case PROFESSIONS_TYPES.EDIT_PROFESSION:
      const editedProfessionIndex = state.list.findIndex(prof => prof.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedProfessionIndex),
          action.data,
          ...state.list.slice(editedProfessionIndex + 1)
        ]
      }
    case PROFESSIONS_TYPES.DELETE_PROFESSION:
      return {
        ...state,
        list: state.list.filter(prof => !action.data.includes(prof.id))
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
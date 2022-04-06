import { AUTH_TYPES } from "redux/types/auth"
import { STUDENTS_TYPES } from "redux/types/students"

const initialState = {
  loaded: false,
  list: []
}

export const students = (state = initialState, action) => {
  switch(action.type) {
    case STUDENTS_TYPES.LOAD_STUDENTS:
      return {
        ...state,
        loaded: true,
        list: action.list
      }
    case STUDENTS_TYPES.CREATE_STUDENT:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case STUDENTS_TYPES.EDIT_STUDENT:
      const editedCommunityIndex = state.list.findIndex(community => community.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedCommunityIndex),
          action.data,
          ...state.list.slice(editedCommunityIndex + 1)
        ]
      }
    case STUDENTS_TYPES.DELETE_STUDENTS:
      return {
        ...state,
        list: state.list.filter(community => community.id !== action.data)
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
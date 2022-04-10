import { AUTH_TYPES } from "redux/types/auth"
import { COMMANDS_TYPES } from "redux/types/commands"

const initialState = {
  loaded: false,
  list: []
}

export const commands = (state = initialState, action) => {
  switch(action.type) {
    case COMMANDS_TYPES.LOAD_COMMANDS:
      return {
        ...state,
        loaded: true,
        list: action.list
      }
    case COMMANDS_TYPES.CREATE_COMMAND:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case COMMANDS_TYPES.EDIT_COMMAND:
      const editedCommandIndex = state.list.findIndex(command => command.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedCommandIndex),
          action.data,
          ...state.list.slice(editedCommandIndex + 1)
        ]
      }
    case COMMANDS_TYPES.DELETE_COMMAND:
      return {
        ...state,
        list: state.list.filter(command => command.id !== action.data)
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
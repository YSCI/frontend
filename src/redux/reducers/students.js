import { AUTH_TYPES } from "redux/types/auth"
import { COMMANDS_TYPES } from "redux/types/commands"
import { STUDENTS_TYPES } from "redux/types/students"

const initialState = {
  loaded: false,
  list: []
}

export const students = (state = initialState, action) => {
  let editedStudentIndex

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
      editedStudentIndex = state.list.findIndex(student => student.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStudentIndex),
          action.data,
          ...state.list.slice(editedStudentIndex + 1)
        ]
      }
    case STUDENTS_TYPES.DELETE_STUDENTS:
      return {
        ...state,
        list: state.list.filter(student => student.id !== action.data)
      }
    case COMMANDS_TYPES.ASSIGN_COMMAND_TO_STUDENT:
      editedStudentIndex = state.list.findIndex(student => student.id === action.command.studentId)

      return {
        ...state,
        list: [
          ...state.list.slice(0, editedStudentIndex),
          {
            ...state.list[editedStudentIndex],
            status: action.command.selectedCommand.status,
            statusId: action.command.selectedCommand.status.id
          },
          ...state.list.slice(editedStudentIndex + 1)
        ]
      }
    case AUTH_TYPES.LOGOUT:
        return initialState
    default:
      return state
  }
}
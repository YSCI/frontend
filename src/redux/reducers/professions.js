import { AUTH_TYPES } from "redux/types/auth"
import { PROFESSIONS_TYPES } from "redux/types/professions"

const initialState = {
  loaded: false,
  list: [],
  total: 0
}

export const professions = (state = initialState, action) => {
  let professionIndex, subjectIndex

  switch(action.type) {
    case PROFESSIONS_TYPES.LOAD_PROFESSIONS:
      return {
        ...state,
        loaded: true,
        list: action.list.map(el => ({ ...el, subjects: [] })),
        total: action.total
      }
    case PROFESSIONS_TYPES.LOAD_PROFESSION_SUBJECTS:
      professionIndex = state.list.findIndex(prof => prof.id === action.professionId)

      return {
        ...state,
        list: [
          ...state.list.slice(0, professionIndex),
          {
            ...state.list[professionIndex],
            subjects: action.subjects
          },
          ...state.list.slice(professionIndex + 1)
        ]
      }
    case PROFESSIONS_TYPES.CREATE_SUBJECT:
      professionIndex = state.list.findIndex(prof => prof.id === action.data.professionId)
      return {
        ...state,
        list: [
          ...state.list.slice(0, professionIndex),
          {
            ...state.list[professionIndex],
            subjects: state.list[professionIndex].subjects.concat(action.data)
          },
          ...state.list.slice(professionIndex + 1)
        ]
      }
    case PROFESSIONS_TYPES.EDIT_SUBJECT:
      professionIndex = state.list.findIndex(prof => prof.id === action.data.professionId)
      subjectIndex = state.list[professionIndex].subjects.findIndex(subject => subject.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, professionIndex),
          {
            ...state.list[professionIndex],
            subjects: [
              ...state.list[professionIndex].subjects.slice(0, subjectIndex),
              {
                ...state.list[professionIndex].subjects[subjectIndex],
                ...action.data
              },
              ...state.list[professionIndex].subjects.slice(subjectIndex + 1),
            ]
          },
          ...state.list.slice(professionIndex + 1)
        ]
      }
      case PROFESSIONS_TYPES.DELETE_SUBJECT:
        professionIndex = state.list.findIndex(prof => prof.id === action.professionId)
  
        return {
          ...state,
          list: [
            ...state.list.slice(0, professionIndex),
            {
              ...state.list[professionIndex],
              subjects: state.list[professionIndex].subjects.filter(subject => !action.ids.includes(subject.id))
            },
            ...state.list.slice(professionIndex + 1)
          ]
        }
    case PROFESSIONS_TYPES.CREATE_PROFESSION:
      return {
        ...state,
        list: state.list.concat(action.data)
      }
    case PROFESSIONS_TYPES.EDIT_PROFESSION:
      professionIndex = state.list.findIndex(prof => prof.id === action.data.id)

      return {
        ...state,
        list: [
          ...state.list.slice(0, professionIndex),
          action.data,
          ...state.list.slice(professionIndex + 1)
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
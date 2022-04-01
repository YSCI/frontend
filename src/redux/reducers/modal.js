import { MODAL_TYPES } from 'redux/types/modal'

const initialState = {
  visible: false,
  componentInfo: {
    component: null,
    props: {}
  }
}

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TYPES.SHOW_MODAL:
      return {
        ...state,
        componentInfo: {
          props: action.props,
          component: action.component
        },
        visible: true
      }
    case MODAL_TYPES.HIDE_MODAL:
        return initialState
    default:
      return state
  }
}
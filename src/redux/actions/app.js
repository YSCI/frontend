import { toast } from 'react-toastify'


import { setAuthData } from './auth'
import { StorageService } from 'services'
import { APP_TYPES } from 'redux/types/app'

export const initApp = () => dispatch => {
  try {
    const authData = StorageService.get('authData')

    if (!!authData?.token)
      dispatch(setAuthData(authData))

    dispatch({
      type: APP_TYPES.INIT_APP
    })

  } catch (ex) {
    toast('Something went wrong while loading app')
  }
}
import { toast } from 'react-toastify'


import { setAuthData } from './auth'
import { StorageService } from 'services'

export const initApp = () => dispatch => {
  try {
    const authData = StorageService.get('authData')

    if (!!authData?.token)
      dispatch(setAuthData(authData))

  } catch (ex) {
    toast('Something went wrong while loading app')
  }
}
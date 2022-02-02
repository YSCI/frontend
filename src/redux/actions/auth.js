import { toast } from 'react-toastify'


import { history } from 'system/history'
import { StorageService } from 'services'
import { AUTH_TYPES } from "redux/types/auth"

export const setAuthData = (authData) => ({
  type: AUTH_TYPES.SET_AUTH_DATA,
  user: authData
})

export const login = ({ email, password }) => async dispatch => {
  try {
    // const user = fetchRequest()
    const user = {
      email,
      password,
      token: 'sfim49f93jf2fniu849feskfm'
    }

    history.push('/home')
    dispatch(setAuthData(user))
    StorageService.set('authData', user)

  } catch (ex) {
    toast('Գործողությունը խնդիր առաջացրեց!')   
  }
}
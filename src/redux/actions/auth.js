import { toast } from 'react-toastify'


import { history } from 'system/history'
import { HttpService, StorageService } from 'services'
import { AUTH_TYPES } from "redux/types/auth"

export const setAuthData = (authData) => ({
  type: AUTH_TYPES.SET_AUTH_DATA,
  user: authData
})

export const getMe = () => async dispatch => {
  try {
    const me = await HttpService.get('auth/whoami')

    dispatch(setAuthData(me))
    StorageService.set('authData', me)

  } catch {
    toast.error('Առաջացավ խնդիր')
  }
}

export const login = (values) => async dispatch => {
  try {
    const { access_token } = await HttpService.post('auth/login', values, { noToken: true })

    StorageService.set('token', access_token)
    dispatch(getMe())
    history.push('/home')

  } catch {
    toast.error('Սխալ մուտքանուն կամ գաղտնաբառ')    
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: AUTH_TYPES.LOGOUT
  })

  StorageService.remove('authData')
  StorageService.remove('token')

  history.push('/login')
}
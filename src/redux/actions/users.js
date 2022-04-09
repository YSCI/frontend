import { toast } from 'react-toastify'


import { HttpService } from 'services'
import { USERS_TYPES } from 'redux/types/users'

export const loadUsers = (search) => async dispatch => {
  try {
    const data = await HttpService.get('user', search)

    dispatch({
      type: USERS_TYPES.LOAD_USERS,
      list: data
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editUser = (values) => async dispatch => {
  try {
    await HttpService.put(`user/${values.id}`, values)
 
    dispatch({
      type: USERS_TYPES.EDIT_USER,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createUser = (values) => async dispatch => {
  try {
    const createdUSER = await HttpService.post('user', values)
    
    dispatch({
      type: USERS_TYPES.CREATE_USER,
      data: createdUSER
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteUser = (id) => async dispatch => {
  try {
    await HttpService.delete(`user/${id}`)
    
    dispatch({
      type: USERS_TYPES.DELETE_USER,
      data: id
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
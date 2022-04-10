import { toast } from 'react-toastify'


import { STATUSES_TYPES } from 'redux/types/statuses'
import { HttpService } from 'services'

export const loadStatuses = (search) => async dispatch => {
  try {
    const data = await HttpService.get('status', search)

    dispatch({
      type: STATUSES_TYPES.LOAD_STATUSES,
      list: data
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editStatus = (values) => async dispatch => {
  try {
    await HttpService.put(`status/${values.id}`, values)
 
    dispatch({
      type: STATUSES_TYPES.EDIT_STATUS,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createStatus = (values) => async dispatch => {
  try {
    const createdStatus = await HttpService.post('status', values)
    
    dispatch({
      type: STATUSES_TYPES.CREATE_STATUS,
      data: createdStatus
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteStatus = (id) => async dispatch => {
  try {
    await HttpService.delete(`status/${id}`)
    
    dispatch({
      type: STATUSES_TYPES.DELETE_STATUS,
      data: id
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
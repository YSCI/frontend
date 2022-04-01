import { toast } from 'react-toastify'


import { HEALTH_STATUSES_TYPES } from 'redux/types/healthStatuses'
import { HttpService } from 'services'

export const loadHealthStatuses = (search) => async dispatch => {
  try {
    const data = await HttpService.get('health-status')

    dispatch({
      type: HEALTH_STATUSES_TYPES.LOAD_HEALTH_STATUSES,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editHealthStatus = (values) => async dispatch => {
  try {
    await HttpService.put(`health-status/${values.id}`, values)
 
    dispatch({
      type: HEALTH_STATUSES_TYPES.EDIT_HEALTH_STATUS,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createHealthStatus = (values) => async dispatch => {
  try {
    const createdHealthStatus = await HttpService.post('health-status', values)
    
    dispatch({
      type: HEALTH_STATUSES_TYPES.CREATE_HEALTH_STATUS,
      data: createdHealthStatus
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteHealthStatus = (id) => async dispatch => {
  try {
    await HttpService.delete(`health-status/${id}`)
    
    dispatch({
      type: HEALTH_STATUSES_TYPES.DELETE_HEALTH_STATUS,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
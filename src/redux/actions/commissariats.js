import { toast } from 'react-toastify'


import { COMMISSARIATS_TYPES } from 'redux/types/commissariats'
import { HttpService } from 'services'

export const loadCommissariats = (search) => async dispatch => {
  try {
    const data = await HttpService.get('commissariat', search)

    dispatch({
      type: COMMISSARIATS_TYPES.LOAD_COMMISSARIAT,
      list: data
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editCommissariat = (values) => async dispatch => {
  try {
    await HttpService.put(`commissariat/${values.id}`, values)
 
    dispatch({
      type: COMMISSARIATS_TYPES.EDIT_COMMISSARIAT,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCommissariat = (values) => async dispatch => {
  try {
    const createdCommissariat = await HttpService.post('commissariat', values)
    
    dispatch({
      type: COMMISSARIATS_TYPES.CREATE_COMMISSARIAT,
      data: createdCommissariat
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCommissariat = (ids) => async dispatch => {
  try {
    await HttpService.delete('commissariat', ids)
    
    dispatch({
      type: COMMISSARIATS_TYPES.DELETE_COMMISSARIAT,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
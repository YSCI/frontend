import { toast } from 'react-toastify'


import { NATIONALITIES_TYPES } from 'redux/types/nationalities'
import { HttpService } from 'services'

export const loadNationalities = (search) => async dispatch => {
  try {
    const data = await HttpService.get('nationality', search)

    dispatch({
      type: NATIONALITIES_TYPES.LOAD_NATIONALITIES,
      list: data
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editNationality = (values) => async dispatch => {
  try {
    await HttpService.put(`nationality/${values.id}`, values)
 
    dispatch({
      type: NATIONALITIES_TYPES.EDIT_NATIONALITIES,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createNationality = (values) => async dispatch => {
  try {
    const createdNationality = await HttpService.post('nationality', values)
    
    dispatch({
      type: NATIONALITIES_TYPES.CREATE_NATIONALITIES,
      data: createdNationality
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteNationality = (id) => async dispatch => {
  try {
    await HttpService.delete(`nationality/${id}`)
    
    dispatch({
      type: NATIONALITIES_TYPES.DELETE_NATIONALITIES,
      data: id
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
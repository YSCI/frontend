import { toast } from 'react-toastify'


import { CITIZENSHIPS_TYPES } from 'redux/types/citizenships'
import { HttpService } from 'services'

export const loadCitizenships = (search) => async dispatch => {
  try {
    const { data, total } = await HttpService.get('citizenship', search)

    dispatch({
      type: CITIZENSHIPS_TYPES.LOAD_CITIZENSHIPS,
      list: data,
      total
    })
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const editCitizenship = (values) => async dispatch => {
  try {
    await HttpService.put(`citizenship/${values.id}`, values)
 
    dispatch({
      type: CITIZENSHIPS_TYPES.EDIT_CITIZENSHIP,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCitizenship = (values) => async dispatch => {
  try {
    const createdCitizenship = await HttpService.post('citizenship', values)
    
    dispatch({
      type: CITIZENSHIPS_TYPES.CREATE_CITIZENSHIP,
      data: createdCitizenship
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCitizenship = (ids) => async dispatch => {
  try {
    await HttpService.delete('citizenship', { ids })
    
    dispatch({
      type: CITIZENSHIPS_TYPES.DELETE_CITIZENSHIP,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
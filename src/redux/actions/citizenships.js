import { toast } from 'react-toastify'


import { CITIZENSHIPS_TYPES } from 'redux/types/citizenships'
import { HttpService } from 'services'

export const loadCitizenships = (search) => async dispatch => {
  try {
    const data = await HttpService.get('citizenship')

    dispatch({
      type: CITIZENSHIPS_TYPES.LOAD_CITIZENSHIPS,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editCitizenship = (values) => async dispatch => {
  try {
    await HttpService.put(`citizenship/${values.id}`, values)
 
    dispatch({
      type: CITIZENSHIPS_TYPES.EDIT_CITIZENSHIP,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCitizenship = (values) => async dispatch => {
  try {
    const createdCitizenship = await HttpService.post('citizenship', values)
    
    dispatch({
      type: CITIZENSHIPS_TYPES.CREATE_CITIZENSHIP,
      data: createdCitizenship
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCitizenship = (id) => async dispatch => {
  try {
    await HttpService.delete(`citizenship/${id}`)
    
    dispatch({
      type: CITIZENSHIPS_TYPES.DELETE_CITIZENSHIP,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
import { toast } from 'react-toastify'


import { PROFESSIONS_TYPES } from 'redux/types/professions'
import { HttpService } from 'services'
import { setLoading } from './app'

export const loadProfessions = (search) => async dispatch => {
  try {
    const data = await HttpService.get('profession', search)

    dispatch({
      type: PROFESSIONS_TYPES.LOAD_PROFESSIONS,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editProfession = (values) => async dispatch => {
  try {
    await HttpService.put(`profession/${values.id}`, values)
 
    dispatch({
      type: PROFESSIONS_TYPES.EDIT_PROFESSION,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createProfession = (values) => async dispatch => {
  try {
    const createdProfession = await HttpService.post('profession', values)
    
    dispatch({
      type: PROFESSIONS_TYPES.CREATE_PROFESSION,
      data: createdProfession
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteProfession = (id) => async dispatch => {
  try {
    await HttpService.delete(`profession/${id}`)
    
    dispatch({
      type: PROFESSIONS_TYPES.DELETE_PROFESSION,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
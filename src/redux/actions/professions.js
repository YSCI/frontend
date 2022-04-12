import { toast } from 'react-toastify'


import { HttpService } from 'services'
import { PROFESSIONS_TYPES } from 'redux/types/professions'

export const loadProfessions = (search) => async dispatch => {
  try {
    const data = await HttpService.get('profession', search)

    dispatch({
      type: PROFESSIONS_TYPES.LOAD_PROFESSIONS,
      list: data
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const editProfession = (values) => async dispatch => {
  try {
    await HttpService.put(`profession/${values.id}`, values)
 
    dispatch({
      type: PROFESSIONS_TYPES.EDIT_PROFESSION,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createProfession = (values) => async dispatch => {
  try {
    const createdProfession = await HttpService.post('profession', values)
    
    dispatch({
      type: PROFESSIONS_TYPES.CREATE_PROFESSION,
      data: createdProfession
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteProfession = (ids) => async dispatch => {
  try {
    await HttpService.delete('profession', { ids })
    
    dispatch({
      type: PROFESSIONS_TYPES.DELETE_PROFESSION,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
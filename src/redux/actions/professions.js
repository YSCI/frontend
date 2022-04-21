import { toast } from 'react-toastify'


import { HttpService } from 'services'
import { PROFESSIONS_TYPES } from 'redux/types/professions'

export const loadProfessionSubjects = (professionId) => async dispatch => {
  try {
    const data = await HttpService.get(`subject`, { professionId })

    dispatch ({
      type: PROFESSIONS_TYPES.LOAD_PROFESSION_SUBJECTS,
      professionId,
      subjects: data
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createSubject = (subject) => async dispatch => {
  try {
    const data = await HttpService.post(`subject`, subject)

    dispatch({
      type: PROFESSIONS_TYPES.CREATE_SUBJECT,
      data
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteSubject = (ids) => async dispatch => {
  try {
    await HttpService.delete(`subject`, { ids })
    
    dispatch({
      type: PROFESSIONS_TYPES.DELETE_SUBJECT,
      data: ids
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const editSubject = (subject) => async dispatch => {
  try {
    await HttpService.put(`subject/${subject.id}`, subject)
 
    dispatch({
      type: PROFESSIONS_TYPES.EDIT_SUBJECT,
      data: subject
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

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
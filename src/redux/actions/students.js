import { toast } from 'react-toastify'


import { STUDENTS_TYPES } from 'redux/types/students'
import { HttpService } from 'services'

export const loadStudents = (search) => async dispatch => {
  try {
    const data = await HttpService.get('student', search)

    dispatch({
      type: STUDENTS_TYPES.LOAD_STUDENTS,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editStudent = (values) => async dispatch => {
  const parsedValues = JSON.parse(JSON.stringify(values))

  delete parsedValues.citizenship
  delete parsedValues.commissariat
  delete parsedValues.healthStatus
  delete parsedValues.status
  delete parsedValues.nationality
  delete parsedValues.contactNumbers
  delete parsedValues.profession
  delete parsedValues.createdAt

  try {
    await HttpService.patch(`student/${values.id}`, {
      ...parsedValues,
      subprivileges: [4],
      acceptanceCommandNumber: +parsedValues.acceptanceCommandNumber,
      currentGroup: +parsedValues.currentGroup
    })
 
    dispatch({
      type: STUDENTS_TYPES.EDIT_STUDENT,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createStudent = (values) => async dispatch => {
  try {
    const createdStudent = await HttpService.post('student', {
      ...values,
      dateOfBirth: (new Date()).toISOString(),
      contactNumbers: ['093-81-32-96'],
      dateOfAcceptance: (new Date()).toISOString()
    })
    
    dispatch({
      type: STUDENTS_TYPES.CREATE_STUDENT,
      data: createdStudent
    })

    dispatch(loadStudents())

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteStudent = (id) => async dispatch => {
  try {
    await HttpService.delete(`student/${id}`)
    
    dispatch({
      type: STUDENTS_TYPES.DELETE_STUDENT,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
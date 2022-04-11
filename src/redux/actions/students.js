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
    toast.error('Առաջացավ խնդիր')
  }
}

export const editStudent = (values) => async dispatch => {
  const parsedValues = JSON.parse(JSON.stringify(values))

  delete parsedValues.citizenship
  delete parsedValues.commissariat
  delete parsedValues.healthStatus
  delete parsedValues.status
  delete parsedValues.nationality
  delete parsedValues.profession
  delete parsedValues.createdAt
  delete parsedValues.updatedAt
  delete parsedValues.residentRegion
  delete parsedValues.residentCommunity
  delete parsedValues.registrationRegion
  delete parsedValues.registrationCommunity

  try {
    await HttpService.put(`student/${parsedValues.id}`, {
      ...parsedValues,
      dateOfBirth: (new Date()).toISOString(),
      contactNumbers: Array.isArray(parsedValues.contactNumbers)
        ? parsedValues.contactNumbers
        : parsedValues.contactNumbers.split(',').map(el => el.trim()),
      dateOfAcceptance: (new Date()).toISOString(),
      currentGroup: +parsedValues.currentGroup,
      currentCourse: +parsedValues.currentCourse,
      socialCardNumber: +parsedValues.socialCardNumber,
      passportSeries: +parsedValues.passportSeries,
      acceptanceCommandNumber: +parsedValues.acceptanceCommandNumber,
      subprivileges: [1]
    })
 
    dispatch({
      type: STUDENTS_TYPES.EDIT_STUDENT,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createStudent = (values) => async dispatch => {
  try {
    const createdStudent = await HttpService.post('student', {
      ...values,
      dateOfBirth: (new Date()).toISOString(),
      contactNumbers: values.contactNumbers.split(',').map(el => el.trim()),
      dateOfAcceptance: (new Date()).toISOString(),
      currentGroup: +values.currentGroup,
      currentCourse: +values.currentCourse,
      socialCardNumber: +values.socialCardNumber,
      passportSeries: +values.passportSeries,
      acceptanceCommandNumber: +values.acceptanceCommandNumber,
      subprivileges: [2]
    })
    
    dispatch({
      type: STUDENTS_TYPES.CREATE_STUDENT,
      data: createdStudent
    })

    dispatch(loadStudents())

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteStudent = (id) => async dispatch => {
  try {
    await HttpService.delete(`student/${id}`)
    
    dispatch({
      type: STUDENTS_TYPES.DELETE_STUDENT,
      data: id
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
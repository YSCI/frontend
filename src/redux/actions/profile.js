import { toast } from 'react-toastify'
import { HttpService } from 'services'
import { PROFILE_TYPES } from 'redux/types/profile'

export const loadProfile = (studentId) => async dispatch => {
  try {
    const profileData = await HttpService.get(`student/${studentId}`)
    const commandHistory = await HttpService.get(`command-history`, {
      studentId
    })

    dispatch({
      type: PROFILE_TYPES.LOAD_PROFILE,
      data: {
        ...profileData,
        commandHistory
      }
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}


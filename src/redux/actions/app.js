import { toast } from 'react-toastify'


import { setAuthData } from './auth'
import { StorageService } from 'services'
import { APP_TYPES } from 'redux/types/app'
import { loadCommissariats } from './commissariats'
import { loadCitizenships } from './citizenships'
import { loadCommunities } from './communities'
import { loadHealthStatuses } from './healthStatuses'
import { loadNationalities } from './nationalities'
import { loadPrivileges } from './privileges'
import { loadProfessions } from './professions'
import { loadRegions } from './regions'
import { loadStatuses } from './statuses'

const loadAllData = () => dispatch => {
  dispatch(loadCommissariats())
  dispatch(loadCitizenships())
  dispatch(loadCommunities())
  dispatch(loadHealthStatuses())
  dispatch(loadNationalities())
  dispatch(loadPrivileges())
  dispatch(loadProfessions())
  dispatch(loadRegions())
  dispatch(loadStatuses())
}

export const initApp = () => dispatch => {
  try {
    const token = StorageService.get('token')

    if (token)
      dispatch(setAuthData(StorageService.get('authData')))

    dispatch({
      type: APP_TYPES.INIT_APP
    })

    dispatch(loadAllData())
  } catch (ex) {
    toast.error('Առաջացավ խնդիր')
  }
}

export const setLoading = (loading) => ({
  type: APP_TYPES.SET_LOADING,
  loading
})
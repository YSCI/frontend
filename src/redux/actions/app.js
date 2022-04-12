import { toast } from 'react-toastify'


import { logout, setAuthData } from './auth'
import { HttpService, StorageService } from 'services'
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
import { loadCommands } from './commands'

export const loadAllData = () => dispatch => {
  dispatch(loadCommissariats())
  dispatch(loadCitizenships())
  dispatch(loadCommunities())
  dispatch(loadHealthStatuses())
  dispatch(loadNationalities())
  dispatch(loadPrivileges())
  dispatch(loadProfessions())
  dispatch(loadRegions())
  dispatch(loadStatuses())
  dispatch(loadCommands())
}

export const initApp = () => async dispatch => {
  try {
    const token = StorageService.get('token')

    if (token) {
      await HttpService.get('auth/whoami')
      dispatch(loadAllData())
      dispatch(setAuthData(StorageService.get('authData')))
    }
  } catch (ex) {
    if (ex.status === 401) {
      toast.info('Ձեր սեսիան ավարտվել է, խնդրում ենք մուտք գործել կրկին')
      dispatch(logout())
    } else {
      toast.error('Առաջացավ խնդիր')
    }
  }

  dispatch({
    type: APP_TYPES.INIT_APP
  })
}

export const setLoading = (loading) => ({
  type: APP_TYPES.SET_LOADING,
  loading
})
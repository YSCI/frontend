import { toast } from 'react-toastify'


import { COMMUNITIES_TYPES } from 'redux/types/communities'
import { HttpService } from 'services'

export const loadCommunities = (search) => async dispatch => {
  try {
    const data = await HttpService.get('community', search)

    dispatch({
      type: COMMUNITIES_TYPES.LOAD_COMMUNITIES,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editCommunity = (values) => async dispatch => {
  try {
    await HttpService.put(`community/${values.id}`, values)
 
    dispatch({
      type: COMMUNITIES_TYPES.EDIT_COMMUNITY,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCommunity = (values) => async dispatch => {
  try {
    const createdCommunity = await HttpService.post('community', values)
    
    dispatch({
      type: COMMUNITIES_TYPES.CREATE_COMMUNITY,
      data: createdCommunity
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCommunity = (id) => async dispatch => {
  try {
    await HttpService.delete(`community/${id}`)
    
    dispatch({
      type: COMMUNITIES_TYPES.DELETE_COMMUNITY,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
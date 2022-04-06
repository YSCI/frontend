import { toast } from 'react-toastify'


import { REGIONS_TYPES } from 'redux/types/regions'
import { HttpService } from 'services'

export const loadRegions = (search) => async dispatch => {
  try {
    const data = await HttpService.get('region', search)

    dispatch({
      type: REGIONS_TYPES.LOAD_REGIONS,
      list: data
    })
  } catch (ex) {
    toast('Առաջացավ խնդիր')
  }
}

export const editRegion = (values) => async dispatch => {
  try {
    await HttpService.put(`region/${values.id}`, values)
 
    dispatch({
      type: REGIONS_TYPES.EDIT_REGION,
      data: values
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createRegion = (values) => async dispatch => {
  try {
    const createdRegion = await HttpService.post('region', values)
    
    dispatch({
      type: REGIONS_TYPES.CREATE_REGION,
      data: createdRegion
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteRegion = (id) => async dispatch => {
  try {
    await HttpService.delete(`region/${id}`)
    
    dispatch({
      type: REGIONS_TYPES.DELETE_REGION,
      data: id
    })

    toast('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
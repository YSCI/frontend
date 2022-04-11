import { toast } from 'react-toastify'


import { COMMANDS_TYPES } from 'redux/types/commands'
import { HttpService } from 'services'

export const assignCommand = (values) => async dispatch => {
  try {
    await HttpService.post('command/attach', values)

    toast.success('Հրամանը կցագրվեց ուսանողներին')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const loadCommands = (search) => async dispatch => {
  try {
    const data = await HttpService.get('command', search)

    dispatch({
      type: COMMANDS_TYPES.LOAD_COMMANDS,
      list: data
    })
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const editCommand = (values) => async dispatch => {
  try {
    await HttpService.put(`command/${values.id}`, values)
 
    dispatch({
      type: COMMANDS_TYPES.EDIT_COMMAND,
      data: values
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const createCommand = (values) => async dispatch => {
  try {
    const createdCommand = await HttpService.post('command', values)
    
    dispatch({
      type: COMMANDS_TYPES.CREATE_COMMAND,
      data: {
        ...createdCommand,
        status: values.status
      }
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}

export const deleteCommand = (id) => async dispatch => {
  try {
    await HttpService.delete(`command/${id}`)
    
    dispatch({
      type: COMMANDS_TYPES.DELETE_COMMAND,
      data: id
    })

    toast.success('Գործողությունը հաջողությամբ կատարվեց')
  } catch (ex) {
    toast.error(`Առաջացավ խնդիր: ${ex.message}`)
  }
}
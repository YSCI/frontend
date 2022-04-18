import { connect } from 'react-redux'

import { FieldsForm as Self } from './FieldsForm'
import { loadAllData } from 'redux/actions/app' 
import { showModal } from 'redux/actions/modal'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = { 
  showModal,
  loadAllData
}

export const FieldsForm = connect(mapStateToProps, mapDispatchToProps)(Self)
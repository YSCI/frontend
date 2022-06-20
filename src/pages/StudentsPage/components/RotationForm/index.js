import { connect } from 'react-redux'

import { showModal } from 'redux/actions/modal'
import { RotationForm as Self } from './RotationForm'
import { getRotationStudensList } from 'redux/actions/students'
import { loadProfessions } from 'redux/actions/professions'

const mapStateToProps = ({ professions }) => ({
  professionsList: professions.list
})

const mapDispatchToProps = {
  showModal,
  loadProfessions,
  getRotationStudensList
}

export const RotationForm = connect(mapStateToProps, mapDispatchToProps)(Self)
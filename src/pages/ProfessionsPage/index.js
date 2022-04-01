import { connect } from 'react-redux'

import { ProfessionsPage as Self } from './ProfessionsPage'
import { loadProfessions, deleteProfession } from 'redux/actions/professions'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ professions }) => ({
  professions
})

const mapDispatchToProps = {
  showModal,
  loadProfessions,
  deleteProfession
}

export const ProfessionsPage = connect(mapStateToProps, mapDispatchToProps)(Self)
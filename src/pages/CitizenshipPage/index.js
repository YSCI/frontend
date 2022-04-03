import { connect } from 'react-redux'

import { CitizenshipPage as Self } from './CitizenshipPage'
import { loadCitizenships, deleteCitizenship } from 'redux/actions/citizenships'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ citizenships }) => ({
  citizenships
})

const mapDispatchToProps = {
  showModal,
  loadCitizenships,
  deleteCitizenship
}

export const CitizenshipPage = connect(mapStateToProps, mapDispatchToProps)(Self)
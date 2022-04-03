import { connect } from 'react-redux'

import { StatusesPage as Self } from './StatusesPage'
import { loadStatuses, deleteStatus } from 'redux/actions/statuses'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ statuses }) => ({
  statuses
})

const mapDispatchToProps = {
  showModal,
  loadStatuses,
  deleteStatus
}

export const StatusesPage = connect(mapStateToProps, mapDispatchToProps)(Self)
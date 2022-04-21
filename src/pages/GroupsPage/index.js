import { connect } from 'react-redux'

import { GroupsPage as Self } from './GroupsPage'
import { loadGroups, deleteGroup } from 'redux/actions/groups'
import { showModal } from 'redux/actions/modal'

const mapStateToProps = ({ groups }) => ({
  groups
})

const mapDispatchToProps = {
  showModal,
  loadGroups,
  deleteGroup
}

export const GroupsPage = connect(mapStateToProps, mapDispatchToProps)(Self)
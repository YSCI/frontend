import { connect } from 'react-redux'

import { GroupForm as Self } from './GroupForm'

import { loadProfessions } from 'redux/actions/professions'
import {
  editGroup,
  createGroup
} from 'redux/actions/groups'

const mapStateToProps = ({ professions }) => ({
  professionsList: professions.list
})

const mapDispatchToProps = {
  editGroup,
  createGroup,
  loadProfessions
}

export const GroupForm = connect(mapStateToProps, mapDispatchToProps)(Self)
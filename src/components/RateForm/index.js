import { connect } from 'react-redux'

import { RateForm as Self } from './RateForm'

import { loadProfessionSubjects } from 'redux/actions/professions'
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
  loadProfessionSubjects
}

export const RateForm = connect(mapStateToProps, mapDispatchToProps)(Self)
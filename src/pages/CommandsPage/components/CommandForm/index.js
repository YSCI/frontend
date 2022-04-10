import { connect } from 'react-redux'

import { CommandForm as Self } from './CommandForm'

import {
  editCommand,
  createCommand
} from 'redux/actions/commands'
import { loadStatuses } from 'redux/actions/statuses'

const mapStateToProps = ({ statuses }) => ({
  statuses
})

const mapDispatchToProps = {
  loadStatuses,
  editCommand,
  createCommand
}

export const CommandForm = connect(mapStateToProps, mapDispatchToProps)(Self)
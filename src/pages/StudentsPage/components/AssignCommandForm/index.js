import { connect } from 'react-redux'

import { loadCommands } from 'redux/actions/commands'
import { AssignCommandForm as Self } from './AssignCommandForm'

import {
  assignCommand
} from 'redux/actions/commands'

const mapStateToProps = ({ commands }) => ({
  commandsList: commands.list
})

const mapDispatchToProps = {
  loadCommands,
  assignCommand
}

export const AssignCommandForm = connect(mapStateToProps, mapDispatchToProps)(Self)
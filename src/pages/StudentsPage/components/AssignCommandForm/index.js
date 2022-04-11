import { connect } from 'react-redux'

import { AssignCommandForm as Self } from './AssignCommandForm'

import {
  assignCommand
} from 'redux/actions/commands'

const mapStateToProps = ({ commands }) => ({
  commandsList: commands.list
})

const mapDispatchToProps = {
  assignCommand
}

export const AssignCommandForm = connect(mapStateToProps, mapDispatchToProps)(Self)
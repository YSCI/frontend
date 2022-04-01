import { connect } from 'react-redux'

import { StatusForm as Self } from './StatusForm'

import {
  editStatus,
  createStatus
} from 'redux/actions/statuses'

const mapDispatchToProps = {
  editStatus,
  createStatus
}

export const StatusForm = connect(null, mapDispatchToProps)(Self)
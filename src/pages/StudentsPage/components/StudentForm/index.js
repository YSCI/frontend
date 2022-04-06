import { connect } from 'react-redux'

import { StudentForm as Self } from './StudentForm'

import {
  editStudent,
  createStudent
} from 'redux/actions/students'

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  editStudent,
  createStudent
}

export const StudentForm = connect(mapStateToProps, mapDispatchToProps)(Self)
import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadStudents } from 'redux/actions/students'

const mapDispatchToProps = {
  loadStudents
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)
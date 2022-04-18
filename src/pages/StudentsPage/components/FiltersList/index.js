import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadStudents } from 'redux/actions/students'
import { loadAllData } from 'redux/actions/app' 

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = {
  loadStudents,
  loadAllData
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)
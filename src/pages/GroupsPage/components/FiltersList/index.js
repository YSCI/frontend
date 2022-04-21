import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCitizenships } from 'redux/actions/citizenships'

const mapDispatchToProps = {
  loadCitizenships
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)
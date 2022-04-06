import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadStatuses } from 'redux/actions/statuses'

const mapDispatchToProps = {
  loadStatuses
}

export const FiltersList = connect(null, mapDispatchToProps)(Self)
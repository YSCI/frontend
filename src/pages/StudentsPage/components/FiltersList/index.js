import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCommunities } from 'redux/actions/communities'

const mapStateToProps = ({ regions }) => ({
  regionsList: regions.list
})

const mapDispatchToProps = {
  loadCommunities
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)
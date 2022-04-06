import { connect } from 'react-redux'

import { FiltersList as Self } from './FiltersList'
import { loadCommissariats } from 'redux/actions/commissariats'

const mapStateToProps = ({ communities }) => ({
  communitiesList: communities.list
})

const mapDispatchToProps = {
  loadCommissariats
}

export const FiltersList = connect(mapStateToProps, mapDispatchToProps)(Self)
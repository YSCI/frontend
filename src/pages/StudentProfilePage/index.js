import { connect } from 'react-redux'

import { StudentProfilePage as Self } from './StudentProfilePage'
import { loadProfile } from 'redux/actions/profile'

const mapStateToProps = ({ profile }) => ({
  profile
})

const mapDispatchToProps = {
  loadProfile
}

export const StudentProfilePage = connect(mapStateToProps, mapDispatchToProps)(Self)
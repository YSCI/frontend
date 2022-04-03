import { connect } from 'react-redux'

import { Layout as Self } from './Layout'

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn
})

export const Layout = connect(mapStateToProps)(Self)
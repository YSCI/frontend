import { connect } from 'react-redux'


import { App as Self } from './App'
import { initApp } from 'redux/actions/app'

const mapStateToProps = ({ app }) => ({

})

const mapDispatchToProps = {
  initApp
}

export const App = connect(mapStateToProps, mapDispatchToProps)(Self)
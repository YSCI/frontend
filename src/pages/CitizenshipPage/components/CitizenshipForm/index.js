import { connect } from 'react-redux'

import { CitizenshipForm as Self } from './CitizenshipForm'

import {
  editCitizenship,
  createCitizenship
} from 'redux/actions/citizenships'

const mapDispatchToProps = {
  editCitizenship,
  createCitizenship
}

export const CitizenshipForm = connect(null, mapDispatchToProps)(Self)
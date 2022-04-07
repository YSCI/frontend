import { connect } from 'react-redux'

import { Table as Self } from './Table'
import { showModal } from 'redux/actions/modal'

const mapDispatchToProps = {
	showModal
}

export const Table = connect(null, mapDispatchToProps)(Self)
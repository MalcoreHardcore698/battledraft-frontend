import { connect } from 'react-redux'

import { Tournaments } from '../ui/Tournaments/Tournaments'

export const TournamentsContainer = connect(
    state => ({
        state
    }),
    null
)(Tournaments)
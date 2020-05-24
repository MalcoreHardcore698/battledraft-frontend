import { connect } from 'react-redux'

import { Headline } from './../ui/Headline'

export const HeadlineContainer = connect(
    state => ({
        state
    }),
    null
)(Headline)
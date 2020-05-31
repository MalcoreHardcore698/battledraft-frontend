import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

import { ChatOffers } from '../Chat/ChatOffers'

const GET_ALL_OFFERS = gql`
  {
    allOffers {
      title
      message
      user {
        name
        avatar
      }
      hub {
        title
      }
    }
  }
`

export const SectionOffers = () => {
    const { loading, error, data } = useQuery(GET_ALL_OFFERS)

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`

    return (
        <aside className="bd-sidefeed__groupchats">
            <h2>Последние заявки</h2>
            <ChatOffers offers={data.allOffers} />
        </aside>
    )
}
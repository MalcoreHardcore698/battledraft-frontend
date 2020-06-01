import gql from 'graphql-tag'

export const GET_ALL_OFFERS = gql`
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

export const GET_ALL_HUBS = gql`
    {
        allHubs {
            title
            description
            slogan
            icon
            poster
        }
    }
`

export const GET_ALL_NEWS = gql`
    {
        allNews {
            title
            body
        }
    }
`

export const GET_ALL_USER_TRANSACTIONS = gql`
    {
        allUserTransactions {
            title
            date
            sum
        }
    }
`

export const GET_ALL_USER_NOTIFICATIONS = gql`
    {
        allUserNotifications {
            title
            name
            message
            date
        }
    }
`

export const GET_POPULAR_HUB_CHAT = gql`
    {
        getPopularHubChat {
            title
            description
            slogan
            members
            offers
        }
    }
`

export const GET_ALL_TOURNAMENTS = gql`
    {
        allTournaments {
            title
            members
            prize
        }
    }
`

export const GET_ALL_USER_CHATS = gql`
    {
        allUserChats {
            id
            title
            icon
        }
    }
`
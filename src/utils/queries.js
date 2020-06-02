import gql from 'graphql-tag'

export const GET_ALL_OFFERS = gql`
    {
        allOffers {
            id
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
            id
            title
            description
            slogan
            icon
            poster
            color
        }
    }
`

export const GET_ALL_NEWS = gql`
    {
        allNews {
            id
            title
            body
            image
            hub {
                title
            }
            date
        }
    }
`

export const GET_ALL_USER_TRANSACTIONS = gql`
    {
        allUserTransactions {
            id
            title
            date
            sum
        }
    }
`

export const GET_ALL_USER_NOTIFICATIONS = gql`
    {
        allUserNotifications {
            id
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
            id
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
            id
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
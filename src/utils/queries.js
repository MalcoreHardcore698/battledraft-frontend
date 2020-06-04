import gql from 'graphql-tag'

export const GET_ALL_OFFERS = gql`
    query {
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
    query {
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
    query {
        allNews {
            id
            title
            body
            image
            hub {
                title
            }
            datePublished
        }
    }
`

export const GET_NEWS = gql`
    query {
        getNews {
            id
            title
            body
            image
            hub {
                id
                title
            }
            source
            url
            datePublished
        }
    }
`

export const GET_ALL_USER_TRANSACTIONS = gql`
    query {
        allUserTransactions {
            id
            title
            date
            sum
        }
    }
`

export const GET_ALL_USER_NOTIFICATIONS = gql`
    query {
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
    query {
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
    query {
        allTournaments {
            id
            title
            members
            prize
        }
    }
`

export const GET_ALL_USER_CHATS = gql`
    query {
        allUserRoles
    }
`
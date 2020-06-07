import gql from 'graphql-tag'

export const GET_ALL_OFFERS = gql`
    query allOffers($status: Status!) {
        allOffers(status: $status) {
            id
            title
            message
            user {
                name
                avatar
            }
            hub {
                id
                title
                color
            }
        }
    }
`

export const GET_ALL_HUBS = gql`
    query allHubs($status: Status!) {
        allHubs(status: $status) {
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
    query allNews($status: Status!) {
        allNews(status: $status) {
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
    query getNews($id: ID!) {
        getNews(id: $id) {
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

export const GET_USER = gql`
    query getUser($id: ID!) {
        getUser(id: $id) {
            id
            name
            password
            email
            phone
            role
            balance
            avatar
            preferences {
                id
                title
                color
                slogan
                icon
            }
            dateLastAuth
            dateRegistration
            isVerifiedEmail
            isVerifiedPhone
            isNotified
        }
    }
`

export const GET_HUB = gql`
    query getHub($id: ID!) {
        getHub(id: $id) {
            title
            description
            slogan
            icon
            poster
            color
            offers {
                title
                message
                user {
                    name
                    avatar
                }
                hub {
                    color
                }
            }
        }
    }
`

export const AUTH_USER = gql`
    query authUser(
        $name: String
        $email: String
        $password: String!
    ) {
        authUser(
            name: $name
            email: $email
            password: $password
        ) {
            id
            name
            password
            email
            phone
            role
            balance
            avatar
            preferences {
                id
                title
            }
            dateLastAuth
            dateRegistration
            isVerifiedEmail
            isVerifiedPhone
            isNotified
        }
    }
`
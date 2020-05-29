export default {
    user: {
        id: 1,
        activeChat: null,
        chats: []
    },
    games: [
        { 
            id: 0,
            name: 'League of Legend',
            img: 'https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x-1024x576.jpg',
            slogan: 'Find Your Role'
        },
        {
            id: 1,
            name: 'Fortnite',
            img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1',
            slogan: 'Find Your Role'
        },
        {
            id: 2,
            name: 'Overwatch',
            img: 'https://rozetked.me/images/uploads/FlHiuHDr8np5.jpg',
            slogan: 'Find Your Role'
        },
        {
            id: 3,
            name: 'Apex Legends',
            img: 'https://ixbt.online/idata/gtnews/2020/05/%5B5eae77ea0b1d3%5D/AxHyvqvssx4Mv7jkMmhtMqMghBoUDhJj2M0amuas.jpeg?fmt=jpg',
            slogan: 'Find Your Role'
        }
    ],
    chats: [
        {
            id: 0,
            type: 'group',
            title: 'League of Legend',
            color: 'blue',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_leagueoflegends.png',
            owner: 0,
            members: [],
            messages: []
        },
        {
            id: 1,
            type: 'group',
            title: 'Fortnite',
            color: 'orange',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_fortnite.png',
            owner: 1,
            members: [],
            messages: []
        },
        {
            id: 2,
            type: 'group',
            title: 'Overwatch',
            color: 'red',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_overwatch.png',
            owner: 2,
            members: [],
            messages: []
        },
        {
            id: 3,
            type: 'group',
            title: 'Apex Legends',
            color: 'purple',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_apexlegends.png',
            owner: 3,
            members: [],
            messages: []
        }
    ]
}
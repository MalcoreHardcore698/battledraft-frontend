export default {
    user: {
        id: 1,
        avatar: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015',
        name: 'Malcore',
        balance: 245,
        activeChat: null,
        notifications: [
            {
                id: 0,
                title: 'Qewub',
                description: 'Оставил вам сообщение',
                date: '14:12, 25 Мая',
                icon: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015'
            },
            {
                id: 1,
                title: 'Qewub',
                description: 'Оставил вам сообщение',
                date: '13:54, 14 Мая',
                icon: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015'
            },
            {
                id: 2,
                title: 'Qewub',
                description: 'Оставил вам сообщение',
                date: '9:11, 24 Апреля',
                icon: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015'
            }
        ],
        transactions: [
            {
                id: 0,
                title: 'Gwetn Open #1',
                date: '25 Мая',
                cash: 10000
            },
            {
                id: 1,
                title: 'Gwetn Open #1',
                date: '14 Мая',
                cash: 10000
            },
            {
                id: 2,
                title: 'Gwetn Open #1',
                date: '24 Апреля',
                cash: 10000
            }
        ],
        chats: []
    },
    games: [
        { 
            id: 0,
            title: 'League of Legend',
            color: 'blue',
            img: 'https://estnn.com/wp-content/uploads/2020/01/league-of-legends-header-x-1024x576.jpg',
            slogan: 'Find Your Role',
            offers: [
                {
                    id: 0,
                    avatar: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015',
                    name: 'Malcore',
                    message: 'I have passed the golden age of this game and it\'s only downhil'
                },
                {
                    id: 1,
                    avatar: 'https://vignette.wikia.nocookie.net/gwent/images/d/d4/Regis_Avatar.png/revision/latest?cb=20171104000015',
                    name: 'Qewub',
                    message: 'I have passed the golden age of this game and it\'s only downhil'
                }
            ]
        },
        {
            id: 1,
            title: 'Fortnite',
            color: 'orange',
            img: 'https://i0.wp.com/itc.ua/wp-content/uploads/2020/02/fortnite-top-secret.jpg?fit=2000%2C1114&amp;quality=100&amp;strip=all&amp;ssl=1',
            slogan: 'Find Your Role',
            offers: []
        },
        {
            id: 4,
            title: 'Dota 2',
            color: 'red',
            img: 'https://live24.ru/uploads/posts/2020-03/1583483440_screenshot_2020-03-06-dota-2.png',
            slogan: 'Find Your Role',
            offers: []
        },
        {
            id: 3,
            title: 'Apex Legends',
            color: 'purple',
            img: 'https://ixbt.online/idata/gtnews/2020/05/%5B5eae77ea0b1d3%5D/AxHyvqvssx4Mv7jkMmhtMqMghBoUDhJj2M0amuas.jpeg?fmt=jpg',
            slogan: 'Find Your Role',
            offers: []
        },
        {
            id: 2,
            title: 'Overwatch',
            color: 'blue',
            img: 'https://rozetked.me/images/uploads/FlHiuHDr8np5.jpg',
            slogan: 'Find Your Role',
            offers: []
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
            id: 4,
            type: 'group',
            title: 'Dota 2',
            color: 'red',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_apexlegends.png',
            owner: 4,
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
        },
        {
            id: 2,
            type: 'group',
            title: 'Overwatch',
            color: 'blue',
            icon: 'https://assets.gamerlinkapp.com/static-web/hub/hub_logo/hub_logo_overwatch.png',
            owner: 2,
            members: [],
            messages: []
        }
    ]
}
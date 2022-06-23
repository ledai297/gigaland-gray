export const FEATURES = {
    NEW: 'NEW',
    HOT: 'HOT',
    BEST_FAVORITE: 'BEST_FAVORITE',
    BEST_VIEW: 'BEST_VIEW'
}

export const Collections = [
    {
        src: "/audio/apeDropsEth/FoolinYaself.mp3",
        id: 1,
        name: "Foolin Yaself",
        price: '0.1',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/FoolinYaself.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.HOT, FEATURES.BEST_FAVORITE],
        likes: 110,
        createdAt: "2022-06-03 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/DontTextDontCall.mp3",
        id: 2,
        name: "Don't text don't call.",
        price: '0.06',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/DontTextDontCall.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.HOT, FEATURES.BEST_FAVORITE],
        likes: 24,
        createdAt: "2022-06-03 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/BeenSmokin.mp3",
        id: 3,
        name: "Been smookin",
        price: '0.05',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/BeenSmookin.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.HOT, FEATURES.BEST_FAVORITE],
        likes: 47,
        createdAt: "2022-06-05 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/Lit.mp3",
        id: 4,
        name: "Lit",
        price: '0.05',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/Lit.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.HOT],
        likes: 56,
        createdAt: "2022-06-06 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/Rollin.mp3",
        id: 5,
        name: "Rollin",
        price: '0.05',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/Rollin.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [],
        likes: 14,
        createdAt: "2022-06-06 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/TakeItFromAG.mp3",
        id: 6,
        name: "Take it from A G",
        price: '0.05',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/Rollin.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [],
        likes: 19,
        createdAt: "2022-06-07 17:00:00",
        videoSrc: null
    },
    {
        src: "/audio/apeDropsEth/Temperature.mp3",
        id: 7,
        name: "Temperature",
        price: '0.1',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/temperature.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [],
        likes: 16,
        createdAt: "2022-06-07 17:00:00",
        videoSrc: null
    },
    {
        id: 8,
        src: "/audio/apeDropsEth/WestCoastRider.mp3",
        name: "West coast rider",
        price: '0.1',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/WestCoastRider.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [],
        likes: 45,
        createdAt: "2022-06-07 17:00:00",
        videoSrc: null
    },
    {
        id: 9,
        src: "",
        name: "West coast rider",
        price: '0.1',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/TheGreat.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.NEW],
        likes: 45,
        createdAt: "2022-06-07 17:00:00",
        videoSrc: "/videos/apeDropsEth/TheGreat.mp4"
    },
    {
        id: 10,
        src: "",
        name: "My Ape",
        price: '1.19',
        unitPrice: "BNB",
        background: "/img/collections/apeDrops/MyApe.png",
        authorId: 1,
        authorName: "Ape drops",
        features: [FEATURES.NEW],
        likes: 45,
        createdAt: "2022-06-07 17:00:00",
        videoSrc: "/videos/apeDropsEth/MyApe.mp4"
    },
];

export const DummyAuthors = [
    {
        id: 1,
        name: "Ape drops",
        twitter: "",
        avatar: "/img/author/apeDrops.png",
        followers: 101
    }
]

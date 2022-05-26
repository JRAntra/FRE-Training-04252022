export interface Content {
    image: string | undefined;
    video: string | undefined;
    text: string | undefined;
};

export interface Story {
    id: number;
    avatar: string;
    publisherName: string;
    publishedTime: any;
    content: Content;
    comments: any[];
    likedIdList: any[];
};

// likedIdList: string[];
// const comment: Story[] = [];

export const stories = [
    {
        id: 1,
        avatar: 'lbrown.jpg',
        publisherName: 'lBrown',
        publishedTime: "whatever",
        content: {
            text: 'Good morning April! How are you doing!'
        },
        comments: [
            {
                id: 2,
                avatar: 'jchang.png',
                publisherName: 'jchang',
                publishedTime: "whatever",
                content: {
                    text: 'Yo, this is dope!'
                }
            },
            {
                id: 3,
                avatar: 'rwhite.heic',
                publisherName: 'rwhite',
                publishedTime: "whatever",
                content: {
                text: 'True! this is cool!'
                }
            }
        ],
    },
    {
        id: 2,
        avatar: 'jchang.png',
        publisherName: 'jchang',
        publishedTime: "whatever",
        content: {
            text: 'Hola chiquita bonita!'
        },
        comments: [
            {
                id: 2,
                avatar: 'jchang.png',
                publisherName: 'jchang',
                publishedTime: "whatever",
                content: {
                    text: 'Hola! Hola! Que tal?'
                }
            },
            {
                id: 3,
                avatar: 'rwhite.heic',
                publisherName: 'rwhite',
                publishedTime: "whatever",
                content: {
                text: 'Yo quiero comprar une sombrero muy elegante!'
                }
            }
        ],
        likedIdList: []
    },
    {
        id: 3,
        avatar: 'rwhite.heic',
        publisherName: 'rwhite',
        publishedTime: "whatever",
        content: {
            image: 'can_i_go_home_now.mp4'
        },
        comments: [
            {
                id: 2,
                avatar: 'jchang.png',
                publisherName: 'jchang',
                publishedTime: "whatever",
                content: {
                    text: 'I love this video clips! What a memory lane'
                }
            },
            {
                id: 1,
                avatar: 'lbrown.jpg',
                publisherName: 'lBrown',
                publishedTime: "whatever",
                content: {
                    text: 'I am having a crush on the singer!'
                }
            }
        ],
        likedIdList: []
    }
]

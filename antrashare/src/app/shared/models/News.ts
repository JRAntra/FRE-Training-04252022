// src/app/shared/models/News.ts

export interface Content {
    // _id: any;
    image: string;
    video: string;
    text: string;
};

export interface Comment {
    // _id: any;
    publisherName: string,
    publishedTime: Date,
    content: Content
}

export interface LikedId {
    // _id: any;
    userId: string
}

export interface News {
    // _id: any;
    publisherName: string;
    publishedTime: Date;
    content: Content;
    comment: Comment[];
    likedIdList: LikedId[];
};

export interface Content_ {
    _id: any;
    image: string;
    video: string;
    text: string;
};

export interface Comment_ {
    _id: any;
    publisherName: string,
    publishedTime: Date,
    content: Content
}

export interface LikedId_ {
    _id: any;
    userId: string
}

export interface News_ {
    _id: any;
    publisherName: string;
    publishedTime: Date;
    content: Content;
    comment: Comment[];
    likedIdList: LikedId[];
};




export const dummyComment = {
    // _id: 1,
    publisherName: 'publisherName',
    publishedTime: new Date(),
    content: {
        _id: 1,
        video: 'video.mp4',
        text: 'blah blah',
        image: 'image.png'
    }
}

export const dummyNews = {
    // _id: 1,
    publisherName: 'publisherName',
    publishedTime: new Date(),
    content: {
        // _id: 1,
        video: 'video.mp4',
        text: 'blah blah',
        image: 'image.png'
    },
    comment: [],
    likedIdList: []
}

export const dummyPostNews = {
    // _id: 1,
    publisherName: 'publisherName',
    publishedTime: new Date(),
    content: {
        // _id: 1,
        video: 'video.mp4',
        text: 'blah blah',
        image: 'image.png'
    },
    comment: [],
    likedIdList: []
}

// mock data
export const newsList = [
    {
        // _id: 1,
        publisherName: 'lBrown',
        publishedTime: new Date(),
        content: {
            text: 'blah blah'
        }
    },
    {
        // _id: 2,
        publisherName: 'jchang',
        publishedTime: new Date(),
        content: {
            text: 'Hola chiquita bonita!'
        },
        comment: [],
        likedIdList: []
    },
    {
        // _id: 3,
        publisherName: 'rwhite',
        publishedTime: new Date(),
        content: {
            image: 'can_i_go_home_now.mp4'
        },
        comment: [],
        likedIdList: []
    }
]

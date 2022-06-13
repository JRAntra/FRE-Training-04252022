// src/app/shared/models/User.ts

export interface User {
    _id: any;
    name: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
    age: number;
    phone: number;
    gender: string;
}

export interface LikedNews {
    newsId: any
}

export const dummyUser = {
    _id: 0,
    name: 'Name Placeholder',
    userName: 'userName',
    userEmail: 'userEmail@email.com',
    password: 'password',
    userRole: 'userRole',
    age: 0,
    phone: 1111111111,
    gender: 'gender',
}

export const mockUsers = [
    {
        _id: 1,
        name: 'Linda Brown',
        userName: 'lbrown',
        userEmail: 'lindabrown@email.com',
        password: '123456',
        userRole: 'user',
        age: 27,
        phone: 888999000,
        gender: 'female',
    },
    {
        _id: 2,
        name: 'Joseph Chang',
        userName: 'jchang',
        userEmail: 'jchang@email.com',
        password: '123456',
        userRole: 'admin',
        age: 23,
        phone: 1112223333,
        gender: 'male',
    },
    {
        _id: 3,
        name: 'Rhonda White',
        userName: 'rwhite',
        userEmail: 'r.white@email.com',
        password: '123456',
        userRole: 'user',
        age: 25,
        phone: 5354442355,
        gender: 'female',
    }
]

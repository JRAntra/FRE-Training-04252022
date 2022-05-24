export interface User {
    id: number;
    name: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
    age: number;
    phone: number;
    gender: string;
    avatar: string;
}

export const users = [
    {
        id: 1,
        name: 'Linda Brown',
        userName: 'lbrown',
        userEmail: 'lindabrown@email.com',
        password: '123456',
        userRole: 'user',
        age: 27,
        phone: 888999000,
        gender: 'female',
        avatar: 'lbrown.jpg'
    },
    {
        id: 2,
        name: 'Joseph Chang',
        userName: 'jchang',
        userEmail: 'jchang@email.com',
        password: '123456',
        userRole: 'admin',
        age: 23,
        phone: 1112223333,
        gender: 'male',
        avatar: 'jchang.png'
    },
    {
        id: 3,
        name: 'Rhonda White',
        userName: 'rwhite',
        userEmail: 'r.white@email.com',
        password: '123456',
        userRole: 'user',
        age: 25,
        phone: 5354442355,
        gender: 'female',
        avatar: 'rwhite.heic'
    }
]

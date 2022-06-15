export interface News {
  _id?: string;
  publisherName: string;
  publishedTime?: Date;
  content: {
    image?: string;
    video?: string;
    text?: string;
  };
  comment?: [
    {
      publisherName: string;
      publishedTime: Date;
      content: {
        image?: string;
        video?: string;
        text?: string;
      };
    }
  ];
  likedIdList?: [{ userId: string }];
}

export interface User {
  name?: string;
  userName: string;
  userEmail: string;
  password: string;
  userRole?: string;
  age?: number;
  gender?: string;
  phone?: string;
}

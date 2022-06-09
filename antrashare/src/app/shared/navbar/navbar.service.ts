import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LikeListService {
  likeList$ = new Subject<any>();
  deleteLike$ = new Subject<any>();
  constructor() {}

  addLikeList(story: News) {
    this.likeList$.next(story);
  }

  deleteLikeList(story: News) {
    this.deleteLike$.next(story);
  }
}

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

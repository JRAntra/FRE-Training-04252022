import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from '../../newsfeed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  newsList?: News[];
  userInfo_userName = localStorage.getItem('userInfo_userName') || '';

  constructor(private newsfeedService: NewsfeedService) {}

  ngOnInit(): void {
    this.newsfeedService.getNews().subscribe((res) => {
      this.newsList = res;
    });
    console.log(this.userInfo_userName);
  }

  onPost(event: string) {
    const news: News = {
      publisherName: this.userInfo_userName,
      publishedTime: new Date(),
      content: { text: event },
    };
    console.log(news);
    // this.newsList?.push(news);
    this.newsfeedService.postNews(news).subscribe((res) => {
      console.log(res);
      this.newsList?.push(res);
    });
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

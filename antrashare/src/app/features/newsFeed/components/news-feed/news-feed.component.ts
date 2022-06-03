import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewsfeedService } from '../../newsfeed.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass'],
})
export class NewsFeedComponent implements OnInit {
  newsList?: News[];
  allList?: News[];
  userInfo_userName = localStorage.getItem('userInfo_userName') || '';
  newsList$!: Observable<News[]>;
  private searchText$ = new Subject<string>();

  constructor(private newsfeedService: NewsfeedService) {}

  ngOnInit(): void {
    this.newsfeedService.getNews().subscribe((res) => {
      this.newsList = res;
      this.allList = res;
    });

    this.searchText$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) => {
        if (val === '') {
          this.newsList = this.allList;
        } else {
          this.newsList = this.allList?.filter((news) => {
            if (
              news.content?.['text']?.length &&
              news.content?.['text'].length > 0
            ) {
              return news.content?.['text'].includes(val);
            } else {
              return;
            }
          });
        }
      });
  }

  onPost(event: string) {
    const news: News = {
      publisherName: this.userInfo_userName,
      publishedTime: new Date(),
      content: { text: event },
    };

    this.newsList?.push(news);
    this.newsfeedService.postNews(news).subscribe((res) => {
      this.newsList?.push(res);
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  search(inputName: string) {
    this.searchText$.next(inputName);
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

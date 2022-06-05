import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/features/newsFeed/components/news-feed/news-feed.component';
import { NewsfeedService } from 'src/app/features/newsFeed/newsfeed.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass'],
})
export class LikeListComponent implements OnInit {
  likelist: News[] = [];
  constructor(private newsService: NewsfeedService) {}

  ngOnInit(): void {
    this.newsService.likeList$.subscribe((val) => {
      console.log(val);
      this.likelist.push(val);
    });
    this.newsService.deleteLike$.subscribe((val) => {
      console.log(val);
      this.likelist = this.likelist.filter((item) => item._id !== val._id);
    });
  }

  deleteStory(story: News) {
    this.newsService.deleteLikeList(story);
  }
}

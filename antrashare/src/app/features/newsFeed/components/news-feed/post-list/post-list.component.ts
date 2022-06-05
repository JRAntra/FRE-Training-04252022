import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsfeedService } from '../../../newsfeed.service';
import { News } from '../news-feed.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  @Input() storyList?: News[];

  likeBtn: string = 'LIKE';
  avatarUrl = '../assets/bro-logo.png';

  constructor(private newsfeedService: NewsfeedService) {}

  ngOnInit(): void {}
  addLikeList(story: News, likes: any) {
    if (likes.textContent === 'LIKE') {
      this.newsfeedService.addLikeList(story);
      likes.textContent = 'UNLIKE';
    } else {
      this.newsfeedService.deleteLikeList(story);
      likes.textContent = 'LIKE';
    }
  }
}

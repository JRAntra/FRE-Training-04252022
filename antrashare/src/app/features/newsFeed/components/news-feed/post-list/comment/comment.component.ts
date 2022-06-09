import { Component, Input, OnInit, Output } from '@angular/core';
import { News } from '../../news-feed.component';
import { NewsfeedService } from 'src/app/features/newsFeed/newsfeed.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent implements OnInit {
  // @Input() story?: News;
  story?: News;
  storyId?: string | null;
  avatarUrl = '../assets/antrashare.png';
  userInfo_userName = localStorage.getItem('userInfo_userName') || '';

  constructor(
    private newsfeedService: NewsfeedService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.story = this.newsfeedService.getStoryData();
    console.log(this.ar);
    this.ar.paramMap.subscribe((params) => {
      this.storyId = params.get('id');
    });
  }

  postComment(event: string) {
    const newComment = {
      publisherName: this.userInfo_userName,
      publishedTime: new Date(),
      content: { text: event },
    };
    this.story?.comment?.push(newComment);
    this.newsfeedService
      .addComment(newComment, this.story?._id)
      .subscribe((res) => {
        console.log(res);
      });
  }
}

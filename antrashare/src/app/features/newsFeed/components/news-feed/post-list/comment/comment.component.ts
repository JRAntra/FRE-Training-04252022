import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { News } from '../../news-feed.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent implements OnInit {
  @Input() story?: News;

  avatarUrl = '../assets/antrashare.png';
  userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  postComment(event: string) {
    const newComment = {
      publisherName: this.userInfo.userName,
      publishedTime: new Date(),
      content: { text: event },
    };
    this.story?.comment?.push(newComment);
    this.apiService.addComment(newComment, this.story?._id).subscribe((res) => {
      console.log(res);
    });
  }
}

import { Component, Input, OnInit, Inject, Optional } from '@angular/core';
import { News } from '../../news-feed.component';
import { NewsfeedService } from 'src/app/features/newsFeed/newsfeed.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent implements OnInit {
  @Input() story?: News;

  avatarUrl = '../assets/antrashare.png';
  userInfo_userName = localStorage.getItem('userInfo_userName') || '';
  // fromPage!: string;
  fromDialog!: string;

  public dialogData: any;

  constructor(
    private newsfeedService: NewsfeedService,
    private dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.dialogData = data;
  }

  ngOnInit(): void {
    // this.fromDialog = 'I am from dialog land...';
    console.log('STORY List: ', this.story);
    console.log('DIALOG Data: ', this.dialogData);
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

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}

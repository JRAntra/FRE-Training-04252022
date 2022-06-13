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

  fromDialog!: string;

  public fullData?: any;
  public pageData: any;
  public page: number;
  public pageSize: number;

  constructor(
    private newsfeedService: NewsfeedService,
    private dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.fullData = data;
    this.page = 1;
    this.pageSize = 5;
    this.pageData = this.fullData?.comment?.slice(0, 5);
  }

  ngOnInit(): void {}

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

  paginate(arr: [], pageNum: number, pageSize: number) {
    this.pageData = arr.slice((pageNum - 1) * pageSize, pageNum * pageSize);
    console.log(this.pageData);
  }

  paginatePrevious() {
    if (this.page !== 1) {
      this.page--;
    }

    this.paginate(this.fullData.comment, this.page, this.pageSize);
  }

  paginateNext() {
    if (this.page < this.fullData.comment.length / 5) {
      this.page++;
    }

    this.paginate(this.fullData.comment, this.page, this.pageSize);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}

import {
  Component,
  Input,
  OnInit,
  Inject,
  Optional,
  ChangeDetectionStrategy,
} from '@angular/core';
import { News } from '../../news-feed.component';
import { NewsfeedService } from 'src/app/features/newsFeed/newsfeed.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent implements OnInit {
  // @Input() story?: News;

  avatarUrl = '../assets/antrashare.png';
  userInfo_userName?: string;

  fromDialog!: string;

  public fullData?: any;
  public pageData: any;
  public page?: number;
  public pageSize?: number;

  constructor(
    private newsfeedService: NewsfeedService,
    private dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.userInfo_userName = this.authService.getUserInfo().userName;
    this.fullData = this.data;
    this.page! = 1;
    this.pageSize! = 5;
    this.pageData! = this.fullData?.comment?.slice(0, 5);
  }

  postComment(event: string) {
    const newComment = {
      publisherName: this.userInfo_userName!,
      publishedTime: new Date(),
      content: { text: event },
    };
    this.fullData.comment.unshift(newComment);
    this.paginate(this.fullData.comment, this.page!, this.pageSize!);

    this.newsfeedService
      .addComment(newComment, this.fullData._id)

      .subscribe((res) => {});
  }

  paginate(arr: [], pageNum: number, pageSize: number) {
    this.pageData = arr.slice((pageNum - 1) * pageSize, pageNum * pageSize);
    console.log(this.pageData);
  }

  paginatePrevious() {
    if (this.page !== 1) {
      this.page!--;
    }

    this.paginate(this.fullData.comment, this.page!, this.pageSize!);
  }

  paginateNext() {
    if (this.page! < this.fullData.comment.length / 5) {
      this.page!++;
    }

    this.paginate(this.fullData.comment, this.page!, this.pageSize!);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }
}

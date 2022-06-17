import { Component, Input, OnInit } from '@angular/core';
import { NewsfeedService } from '../../../newsfeed.service';
import { News } from '../news-feed.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent implements OnInit {
  @Input() storyList?: News[];

  likeBtn: string = 'LIKE';
  avatarUrl = '../assets/bro-logo.png';

  constructor(
    private newsfeedService: NewsfeedService,
    private dialog: MatDialog
  ) {}

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

  openDialog(story: News) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(CommentComponent, {
      data: story,
      width: '80%',
      height: '90vh',
    });

    // this.dialog.afterClosed().subscribe((res) => {
    //   // Data back from dialog
    //   console.log({ res });
    // });
  }
}

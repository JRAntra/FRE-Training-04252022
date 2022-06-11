import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LikeListService } from 'src/app/shared/navbar/navbar.service';

import { NewsfeedService } from '../../../newsfeed.service';
import { News } from '../news-feed.component';
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
    private likeListService: LikeListService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  addLikeList(story: News, likes: any) {
    if (likes.textContent === 'LIKE') {
      this.likeListService.addLikeList(story);
      likes.textContent = 'UNLIKE';
    } else {
      this.likeListService.deleteLikeList(story);
      likes.textContent = 'LIKE';
    }
  }

  gotoStoryComment(story: News) {
    // this.newsfeedService.passStoryToComment(story);
    // this.router.navigate(['newsfeed/', story._id], {
    //   queryParams: { data: 'newparams' },
    // });
  }

  openDialog(story: News) {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '450px',
      height: '450px',
      data: { story: story },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LikeListService, News } from '../../../navbar.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass'],
})
export class LikeListComponent implements OnInit {
  @Input() likelist?: News[];

  constructor(private likeListSevice: LikeListService) {}

  ngOnInit(): void {}

  deleteStory(story: News) {
    this.likeListSevice.deleteLikeList(story);
  }
}

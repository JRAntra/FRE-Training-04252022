import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { LikeListService, News } from '../../../navbar.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.sass'],
})
export class LikeListComponent implements OnInit {
  @Input() likelist?: News[];
  @Output() onClose = new EventEmitter();

  constructor(private likeListSevice: LikeListService) {}

  ngOnInit(): void {}

  deleteStory(story: News) {
    this.likeListSevice.deleteLikeList(story);
  }
  clickClose() {
    this.onClose.emit();
  }
}

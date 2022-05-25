import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../../../../stories';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  constructor() { }

  // Input decorator, taking in story from parent: story-list.component
  @Input() comment? : Story;
  // avatarPath = `../../../../../assets/${this.comment.avatar}` | undefined;

  ngOnInit(): void {
  }

}

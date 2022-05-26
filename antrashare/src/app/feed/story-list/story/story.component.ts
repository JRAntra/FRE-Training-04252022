import { Component, OnInit, Input, Output } from '@angular/core';

import { Story } from '../../../stories';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  constructor() { }

  // Input decorator, taking in story from parent: story-list.component
  @Input() story? : Story;

  postNewComment(content: string) {
    const newComment = {
      id: 2,
      avatar: 'jchang.png',
      publisherName: 'jchang',
      publishedTime: "whatever",
      content: {
          text: content
      }
    };
    this.story?.comments.push(newComment);
  }

  ngOnInit(): void { }

}

import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit(): void {
      // console.log(16, this.story)
  }

}

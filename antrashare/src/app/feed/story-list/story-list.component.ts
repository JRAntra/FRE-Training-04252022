import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../../stories';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  constructor() { }

  // @Input() story: Story | undefined;

  // decorator, taking data array from parent: feed.component
  @Input() stories? : any[];

  ngOnInit(): void {
    // console.log(this.stories)
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass'],
})
export class StoryListComponent implements OnInit {
  constructor() {}

  @Input() storyList?: any[];

  ngOnInit(): void {
    console.log(this.storyList);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
})
export class StoryComponent implements OnInit {
  constructor() {}

  @Input() storyList?: any[];

  ngOnInit(): void {
    console.log(this.storyList);
  }
}

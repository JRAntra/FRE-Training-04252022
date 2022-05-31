import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/models/News';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})
export class StoryListComponent implements OnInit {

  @Input() stories: News[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

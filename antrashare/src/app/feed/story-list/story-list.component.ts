import { Component, OnInit, OnDestroy } from '@angular/core';
import { News } from '../../shared/models/News';
import { StoriesService } from './stories-service/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})

export class StoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

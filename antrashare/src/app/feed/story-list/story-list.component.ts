import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { News, News_ } from '../../shared/models/News';
import { StoriesService } from '../stories-service/stories.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.sass']
})

export class StoryListComponent implements OnInit, OnDestroy {

  @Input() newsList: News_[] = [];
  @Input() news!: News_;

  constructor(  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}

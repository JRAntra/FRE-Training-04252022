import { Component, OnInit, Input } from '@angular/core';
import { News, dummyNews } from 'src/app/shared/models/News';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() story: News = dummyNews;

  constructor() { }

  ngOnInit(): void {
  }

}

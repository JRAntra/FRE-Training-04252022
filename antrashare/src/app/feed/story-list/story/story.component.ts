import { Component, OnInit, Input, Output } from '@angular/core';
import { News, dummyNews } from 'src/app/shared/models/News';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() news: News | undefined;

  constructor() { }

  ngOnInit(): void { }

}

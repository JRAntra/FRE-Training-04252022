import { Component, OnInit, Input } from '@angular/core';
import { News, News_, dummyNews } from 'src/app/shared/models/News';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {

  @Input() news!: News_;
  @Input() newsList: News_[] = [];
  showComment: boolean = false;

  constructor() { }

  showHideComments() {
    this.showComment = !this.showComment;
  }

  ngOnInit(): void { }

}

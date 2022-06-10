import { Component, OnInit, Input } from '@angular/core';
import { News, News_, dummyNews } from 'src/app/shared/models/News';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass']
})
export class StoryComponent implements OnInit {
  avatar: string = "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=800&height=800&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_DogUIUeT1Ke3UvxGQbPGA%2Fnormalized.jpg";
  @Input() news!: News_;
  @Input() newsList: News_[] = [];
  showComment: boolean = false;

  constructor() { }

  showHideComments() {
    this.showComment = !this.showComment;
  }

  ngOnInit(): void { }

}

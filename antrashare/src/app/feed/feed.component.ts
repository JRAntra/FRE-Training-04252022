import { Component, OnInit} from '@angular/core';

export interface storyModel {
  name: string,
  id: number,
  avatar: string,
  content: string
} 

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit{

  constructor() {}
  storyListFromParent : storyModel[] = [
    {
      name: 'Yichao', id: 813, avatar: 'YS',
      content: 'Hi, I am Yichao',
     /* comments: [
        { person: 'Nancy', id: 1016, avatar: 'TL', content: 'Hi, I am Nancy'}
      ] */
    },
    {
      name: 'Yichao', id: 813, avatar: 'YS',
      content: 'Hi, I am Yichao',
     /* comments: [
        { person: 'Nancy', id: 1016, avatar: 'TL', content: 'Hi, I am Nancy' }
      ] */
    }
  ]
  ngOnInit(): void{

  }

  onPost(event: string) {
    let newStory: storyModel = {
      name: 'Yichao',
      id: 813,
      avatar: 'YS',
      content: event
    };
    this.storyListFromParent.push(newStory)
  }
}



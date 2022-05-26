import { Component} from '@angular/core';
import { Story, stories } from '../stories';
import { StoryComponent } from './story-list/story/story.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent {

  public stories = stories;

  onPostStory(content: any) {
    if (content.length) {
      stories.push({
          id: stories.length,
          avatar: "string",
          publisherName: "string",
          publishedTime: "whatever",
          content: {
            text: content
          },
          comments: [],
          likedIdList: []
      });
    }
  }

}

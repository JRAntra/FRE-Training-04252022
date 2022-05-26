import { Component } from '@angular/core';
import { Story, stories } from '../stories';

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
      window.alert(`New story -should- have been posted and pushed to backend, with content: ${content}`);
    }
  }

  onPostComment(content: any) {
    console.log(32, content)
    if (content.length) {
      // todo, push into comments array in the corresponding story doc.
      window.alert(`New comment -should- have been posted and pushed to backend, with content: ${content}`);
    }
  }
}

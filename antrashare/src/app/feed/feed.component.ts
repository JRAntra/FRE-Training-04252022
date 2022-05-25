import { Component} from '@angular/core';
import { stories } from '../stories';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent {

  public stories = stories;

  // onPost() {
  //   window.alert('You have posted something')
  // }

}

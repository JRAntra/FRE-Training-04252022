import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

@NgModule({
  declarations: [
    NewsFeedComponent
  ],
  imports: [CommonModule],
  exports: [],
})
export class NewsFeedModule {}

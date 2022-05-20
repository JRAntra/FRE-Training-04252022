import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed.component';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [CommonModule],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule {}

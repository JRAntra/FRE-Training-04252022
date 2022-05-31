import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedRoutingModule } from './feed-routing.module';
import { StoryComponent } from './story-list/story/story.component' //'./feed/story-list/story/story.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './story-list/story/comment/comment.component';
import { StoryListComponent } from './story-list/story-list.component';


import { FeedComponent } from './feed.component';

@NgModule({
    declarations: [
        FeedComponent,
        StoryComponent,
        PostComponent,
        CommentComponent,
        StoryListComponent
    
    ],
    imports: [
        CommonModule,
        FeedRoutingModule,
        ReactiveFormsModule
    ]
})

export class FeedModule { }

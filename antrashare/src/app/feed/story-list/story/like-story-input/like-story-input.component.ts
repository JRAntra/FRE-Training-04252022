import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LikedId, News_ } from 'src/app/shared/models/News';
import { User, LikedNews } from 'src/app/shared/models/User';
import { LoginService } from 'src/app/login/service/login.service';
import { StoriesService } from 'src/app/feed/stories-service/stories.service';

@Component({
    selector: 'app-like-story-input',
    templateUrl: './like-story-input.component.html',
    styleUrls: ['./like-story-input.component.sass']
})

export class LikeStoryInputComponent implements OnInit {
    user!: User;
    @Input() newsList: News_[] = [];
    @Input() news!: News_;
    @Input() likes: LikedId[] = [];
    likedNewsList: LikedNews[] = [];

    subscriptions$: any = [];

    inputForm = new FormGroup({
        like: new FormControl(false)
    });

    constructor(
        private loginService: LoginService
    ,   private storiesService: StoriesService ) {};


    ngOnInit(): void {
        // todo: create method that will define whether the checkbox value
        // // is true or false, depends on the list from the user's likedStories
    }

    onLike() {
        // grab the user (with ._id) from subject
        const userObserver = {
            next: (response: User) => this.user = response,
            error: (err: Error) => console.error(err),
            complete: () => console.log('onLike() subscribed to user.')
        };
        this.subscriptions$.push(this.loginService.user$.subscribe(userObserver));


        // push the user's ._id into the news.likedIdList (create new copy`)
        this.news.likedIdList = [...this.news.likedIdList, {userId: this.user._id}]
        console.log('user._id added to news"s likedId list: ', [...this.news.likedIdList, {userId: this.user._id}]);

        // grab the likedNews array from Subject
        const likedNewsObserver = {
            next: (response: LikedNews[]) => this.likedNewsList = response,
            error: (err: Error) => console.error(err),
            complete: () => console.log('LikeStoryInput subscribed to likedNews.')
        };
        this.subscriptions$.push(this.loginService.likedNewsList$.subscribe(likedNewsObserver));

        // push the news._id into the user's likedList (currently stored in this.likedNew)
        this.likedNewsList = [...this.likedNewsList, { newsId: this.news._id}];
        console.log('news._id added to user"s likedNews list: ', this.likedNewsList);

        // update the newsList with the updated news
        for (let i = 0; i < this.newsList.length; i++) {
            if (this.newsList[i]._id === this.news._id) {
                this.newsList[i] = this.news;
            }
        }

        // emit the newly updated news
        this.storiesService.newsList$.next(this.newsList);
        console.log('updated newsList emitted with .next: ', this.newsList);

        // emit the updated likedNews list
        this.loginService.likedNewsList$.next(this.likedNewsList)
        console.log('updated liked newsList emitted with .next: ', this.likedNewsList);

    }
}

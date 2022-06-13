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

    // method to run when user click on like checkbox
    onClick() {
        const checkboxValue = this.inputForm.value.like;

        // grab the user (with ._id) from subject
        const userObserver = {
            next: (response: User) => this.user = response,
            error: (err: Error) => console.error(err),
            complete: () => console.log('onLike() subscribed to user.')
        };
        this.subscriptions$.push(this.loginService.user$.subscribe(userObserver));

        // grab the likedNews array from Subject
        const likedNewsObserver = {
            next: (response: LikedNews[]) => this.likedNewsList = response,
            error: (err: Error) => console.error(err),
            complete: () => console.log('LikeStoryInput subscribed to likedNews.')
        };
        this.subscriptions$.push(this.loginService.likedNewsList$.subscribe(likedNewsObserver));

        // control flow: if checkbox is false (not liked), push the _id from both list
        // // if checkbox value is true (liked) delete the _id from both list
        if (checkboxValue === false) {
            // push the user's ._id into the news.likedIdList (create new copy`)
            this.news.likedIdList = [...this.news.likedIdList, {userId: this.user._id}]
            console.log('user._id added to news"s likedId list: ', [...this.news.likedIdList, {userId: this.user._id}]);

            // push the news._id into the user's likedList (currently stored in this.likedNew)
            this.likedNewsList = [...this.likedNewsList, { newsId: this.news._id}];
            console.log('news._id added to user"s likedNews list: ', this.likedNewsList);
        }
        else {
            // remove user's _id from news.likedIdList (create new copy)
            this.news.likedIdList = this.news.likedIdList.filter((doc) => doc.userId !== this.user._id);
            console.log('user._id', this.user._id, 'removed from news"s likedId list: ', this.news.likedIdList);

            // remove news._id from user's liked list (create new copy)
            this.likedNewsList = this.likedNewsList.filter((doc) => doc.newsId !== this.news._id);
            console.log('news._id', this.news._id, 'removed from user"s liked list: ', this.likedNewsList);
        }

        // update the newsList of all news with the updated news
        for (let i = 0; i < this.newsList.length; i++) {
            if (this.newsList[i]._id === this.news._id) {
                this.newsList[i] = this.news;
            }
        }

        // emit the newly updated news item
        this.storiesService.newsList$.next(this.newsList);
        console.log('updated newsList emitted with .next: ', this.newsList);

        // emit the updated user's likedNews list
        this.loginService.likedNewsList$.next(this.likedNewsList)
        console.log('updated liked newsList emitted with .next: ', this.likedNewsList);

        // since the input is a checkbox, we don't need to set the value after this, but if we have to:
        // this.inputForm.setValue({like: !checkboxValue})
    }

    onLike() {
        console.log(typeof this.inputForm.value.like)
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

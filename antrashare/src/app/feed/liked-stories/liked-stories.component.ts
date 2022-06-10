import { Component
    , Input
    , OnInit
    , OnDestroy } from '@angular/core';

import { LoginService } from 'src/app/login/service/login.service';
import { StoriesService } from '../stories-service/stories.service';
import { User, LikedNews } from 'src/app/shared/models/User';
import { News } from 'src/app/shared/models/News';

@Component({
    selector: 'app-liked-stories',
    templateUrl: './liked-stories.component.html',
    styleUrls: [ './liked-stories.component.sass' ]
})

export class LikedStoriesComponent implements OnInit, OnDestroy {
    likedNewsList: LikedNews[] = [];
    @Input() newsList: News[] = [];
    user!: User;
    subscriptions$: any = [];

    constructor(
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.getLikedStories();
    }

    ngOnDestroy() { }

    // method to grab liked newslist from Subject
    getLikedStories() {
        const observer = {
            next: (newsList: any) => this.likedNewsList = newsList,
            error: (err: Error) => console.log('getLikedStories fails with: ', err),
            complete: () => console.log('getLikedStories() grabbed likedNewsList.')
        }
        this.subscriptions$.push(this.loginService.likedNewsList$.subscribe(observer));
    }

}

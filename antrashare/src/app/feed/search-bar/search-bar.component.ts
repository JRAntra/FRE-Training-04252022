import { Component, Input, OnInit, DoCheck, OnChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { News, News_, Content, dummyNews, newsList } from '../../shared/models/News';
import { User, dummyUser } from '../../shared/models/User';
import { StoriesService } from '../stories-service/stories.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() newsList: News_[] = [];
  // delay for debounce process, in millisecond.
  delayTime: number = 1000;

  news!: News;
  subscriptions$: Subscription[] = [];

  hide: boolean = true;

  inputForm = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

  constructor(private storiesService: StoriesService) { }

  // method to hit api only on delayed time after user stopped typing
  // // Ref.: https://www.tektutorialshub.com/angular/debouncetime-debounce-in-angular/
  debounceSearch(time: number): void {
    console.log('debounceSearch()');
    const subscription$ = this.inputForm.valueChanges
      .pipe(debounceTime(time))
      .subscribe(
        (input: any) => {
          console.log('debounceSearch() receives input: ', input, 'and will pass input.search: ', input.search);
          this.storiesService.fetchNewsList(input.search);
        },
        (error: any) => console.log('debounceSearch request fails, with: ', error),
        () => console.log('debounceT() completed')
      );
    this.subscriptions$.push(subscription$);
  }

  onSubmit(){}


  ngOnInit(): void {
    this.debounceSearch(this.delayTime);
  }

  ngOnChanges(): void { }

  ngDoCheck(): void { }

  ngOnDestroy(): void {
    // when the component get's destroyed, unsubscribe all the subscriptions
    this.subscriptions$.forEach((subscription$) => subscription$.unsubscribe())
  }
}

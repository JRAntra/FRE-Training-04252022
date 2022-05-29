import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.sass'],
})
export class NewsFeedFormComponent
  implements OnInit, OnChanges, AfterContentInit, AfterContentChecked
{
  @Output() postNewStory = new EventEmitter();
  textareaValue: string = '';
  form = this.fb.group({
    news: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('form onchanges');
  }
  ngOnInit(): void {
    console.log('form on init');
  }

  ngAfterContentInit(): void {
    console.log('form aftercontent init');
  }
  ngAfterContentChecked(): void {
    console.log('form aftercontent checked');
  }

  onSubmit() {
    this.postNewStory.emit(this.form.value.news);
    console.log(this.form.value.news);
    this.textareaValue = '';
  }
}

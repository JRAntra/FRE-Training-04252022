import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.sass'],
})
export class NewsFeedFormComponent implements OnInit {
  @Output() postNewStory = new EventEmitter();
  textareaValue: string = '';
  form = this.fb.group({
    news: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.postNewStory.emit(this.form.value.news);
    console.log(this.form.value.news);
    this.textareaValue = '';
  }
}

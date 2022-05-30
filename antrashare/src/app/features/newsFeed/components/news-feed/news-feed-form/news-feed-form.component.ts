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
export class NewsFeedFormComponent implements OnInit {
  @Output() postNewStory = new EventEmitter();

  form = this.fb.group({
    news: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.postNewStory.emit(this.form.value.news);

    this.form.setValue({ news: null });
  }
}

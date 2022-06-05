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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.sass'],
})
export class NewsFeedFormComponent implements OnInit {
  @Output() postNewStory = new EventEmitter();

  form!: FormGroup;

  elements = {
    news: [null, Validators.required],
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.elements);
  }

  onSubmit() {
    if (this.form.valid) {
      this.postNewStory.emit(this.form.value.news);

      this.form.setValue({ news: null });
    }
  }
}

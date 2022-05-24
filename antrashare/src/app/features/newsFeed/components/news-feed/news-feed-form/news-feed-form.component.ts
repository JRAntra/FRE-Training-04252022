import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-feed-form',
  templateUrl: './news-feed-form.component.html',
  styleUrls: ['./news-feed-form.component.sass'],
})
export class NewsFeedFormComponent implements OnInit {
  form = this.fb.group({
    news: [null, Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form.value);
  }
}

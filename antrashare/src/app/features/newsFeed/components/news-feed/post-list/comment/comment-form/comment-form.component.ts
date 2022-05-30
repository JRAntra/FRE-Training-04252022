import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass'],
})
export class CommentFormComponent implements OnInit {
  @Output() postComment = new EventEmitter();
  form = this.fb.group({
    comment: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.postComment.emit(this.form.value.comment);

    this.form.setValue({ comment: null });
  }
}

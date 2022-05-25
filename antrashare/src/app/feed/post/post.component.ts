import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  constructor() {}
  @Output() postNewStory = new EventEmitter();
  ngOnInit(): void {}
  onPost(content: string) {
    this.postNewStory.emit(content);
  }
}

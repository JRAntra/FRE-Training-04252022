import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
})
export class CommentComponent implements OnInit {
  avatarUrl = '../assets/antrashare.png';
  constructor() {}

  ngOnInit(): void {}
}

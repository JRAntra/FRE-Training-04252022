import { Component, OnInit, Input } from '@angular/core';
import { Comment, Content } from 'src/app/shared/models/News';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input() comments: Comment[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

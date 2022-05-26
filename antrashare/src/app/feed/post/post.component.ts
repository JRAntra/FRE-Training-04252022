import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Story } from '../../stories';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Output() eventEmitter = new EventEmitter();

  handleClick(content: string) {
    this.eventEmitter.emit(content);
  }

  handleReset() {
    // todo: using ViewChild to reassign the inputValue = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}

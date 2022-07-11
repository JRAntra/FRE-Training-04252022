import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  @Input('item') todo!: Todo;
  @Output() triggerDelete = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDelete() {
    this.triggerDelete.emit(this.todo?.id);
  }
}

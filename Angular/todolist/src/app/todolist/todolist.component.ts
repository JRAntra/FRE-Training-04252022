import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

import * as TodoSelectors from '../ngrx/todo.selector';
import * as TodoActions from '../ngrx/todo.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  todolist$!: Observable<Todo[]>;

  todo: Todo = {
    title: '',
    completed: false,
    userId: 2,
  };

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.todolist$ = this.store.select(TodoSelectors.getTodoList);
  }

  onChange() {}

  deleteTodo(id: string) {}
}

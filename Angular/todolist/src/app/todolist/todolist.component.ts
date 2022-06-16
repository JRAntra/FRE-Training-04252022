import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

import * as TodoSelectors from '../ngrx/todo.selector';
import * as TodoActions from '../ngrx/todo.action';
import { TodoService } from '../services/todo.service';

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

  constructor(
    // private readonly store: Store,
    private readonly todoService: TodoService
  ) {}

  ngOnInit(): void {
    // this.todolist$ = this.store.select(TodoSelectors.getTodoList);
    // this.store.dispatch(TodoActions.loadTodolist());
    this.todolist$ = this.todoService.todolist$;
    this.todoService.getTodos().subscribe();
  }

  onChange() {
    // console.log(this.todo.title);
    // this.store.dispatch(TodoActions.addTodo({ todo: this.todo }));
    this.todoService.addTodo(this.todo).subscribe();
  }

  deleteTodo(id: string) {}
}

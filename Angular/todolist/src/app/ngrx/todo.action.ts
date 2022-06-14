import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const initTodolist = createAction('[TodoList] Initialize TodoList');

/* load todolist */
export const loadTodolist = createAction('[TodoList] Load TodoList'); // -----> effect

export const loadTodolistSuccess = createAction(
  '[TodoList] Load TodoList Success',
  props<{ todolist: Todo[] }>()
); // -----> reducer

export const loadTodolistFailure = createAction(
  '[TodoList] Load TodoList Failed',
  props<{ err: string }>()
); // -----> reducer

/* add todo */
export const addTodo = createAction(
  '[TodoList] Add Todo',
  props<{ todo: Todo }>()
); // -----> effect

export const addTodoSuccess = createAction(
  '[TodoList] Add Todo Success',
  props<{ todo: Todo }>()
); // -----> reducer

export const addTodoFailure = createAction(
  '[TodoList] Add Todo Failed',
  props<{ err: string }>()
); // -----> reducer

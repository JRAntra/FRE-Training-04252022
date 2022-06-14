import { createReducer, on } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.action';

const todoState: TodoState = {
  todolist: [],
};

export const todoReducer = createReducer(
  todoState,
  on(TodoActions.initTodolist, (state: TodoState) => {
    return { ...state };
  }),
  /* load todolist */
  on(TodoActions.loadTodolistSuccess, (state, { todolist }) => {
    return {
      ...state,
      todolist: [...todolist].reverse(),
    };
  }),
  on(TodoActions.loadTodolistFailure, (state, { err }) => {
    return {
      ...state,
      err,
    };
  }),
  /* add todo */
  on(TodoActions.addTodoSuccess, (state, { todo }) => {
    return {
      ...state,
      todolist: [todo, ...state.todolist],
    };
  }),
  on(TodoActions.addTodoFailure, (state, { err }) => {
    return {
      ...state,
      err,
    };
  })
);

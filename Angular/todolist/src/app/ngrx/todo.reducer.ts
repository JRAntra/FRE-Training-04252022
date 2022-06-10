import { createReducer, on } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/todo.interface';
import * as TodoActions from './todo.action';

const todolist: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];
const todoState: TodoState = {
  todolist: [...todolist],
};

export const todoReducer = createReducer(
  todoState,
  on(TodoActions.initTodolist, (state: TodoState) => {
    return { ...state };
  })
);

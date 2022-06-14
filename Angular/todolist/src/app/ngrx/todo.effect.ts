import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import { catchError, map, switchMap } from 'rxjs/operators';
import * as TodoActions from './todo.action';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly path = 'todos';

  loadTodolist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      switchMap((_) => {
        return this.http.get([this.baseUrl, this.path].join('/')).pipe(
          map((todolist: any) => {
            return TodoActions.loadTodolistSuccess({ todolist });
          }),
          catchError((err) => {
            return of(TodoActions.loadTodolistFailure(err));
          })
        );
      })
    );
  });
  addTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      switchMap(({ todo }) => {
        return this.http.post([this.baseUrl, this.path].join('/'), todo).pipe(
          map((todoFromDB: any) => {
            return TodoActions.addTodoSuccess({ todo: todoFromDB });
          }),
          catchError((err) => {
            return of(TodoActions.addTodoFailure(err));
          })
        );
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {}
}

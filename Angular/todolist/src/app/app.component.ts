import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './interfaces/todo.interface';
import { GetTodosGQL } from './services/todosGraphql.service';

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      todos {
        id
        completed
        userId
        title
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private querySubscription!: Subscription;

  constructor(
    private readonly apollo: Apollo,
    private readonly getTodoGql: GetTodosGQL
  ) {}

  ngOnInit(): void {
    this.querySubscription = this.getTodoGql
      .fetch()
      .pipe(map((gqldata) => gqldata.data.getTodos.todos))
      .subscribe(console.log);

    // this.querySubscription = this.apollo
    //   .watchQuery<any>({
    //     query: GET_TODOS,
    //   })
    //   .valueChanges.subscribe((data) => {
    //     console.log(data.data.getTodos.todos);
    //   });
  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}

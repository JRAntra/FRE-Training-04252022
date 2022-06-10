import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './ngrx/todo.reducer';

@NgModule({
  declarations: [AppComponent, TodolistComponent, TodoItemComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todos: todoReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Api } from "./api.js";
import { View } from "./view.js";

export const Model = ((api, view) => {
  const { getTodos, deleteTodo, addTodo, updateTodo } = api;
  class Todo {
    constructor(content) {
      this.content = content;
      this.isCompleted = false;
    }
  }
  class State {
    #todolist = [];
    get todolist() {
      return this.#todolist;
    }
    set todolist(newtodolist) {
      this.#todolist = newtodolist;
      const pendingTmp = view.createPendingTmp(
        this.todolist.filter((todo) => todo.isCompleted === false)
      );
      view.render(view.elements.pendingTask, pendingTmp);
      const completedTmp = view.createCompletedTmp(
        this.todolist.filter((todo) => todo.isCompleted === true)
      );
      view.render(view.elements.completedTask, completedTmp);
    }
  }
  //   const removeEle = (el) => {
  //     if (el.classList.contains("fa-trash")) {
  //       console.log(el.parentElement.id);
  //       api.deleteTodo(el.parentElement.id);
  //       el.parentElement.parentElement.parentElement.remove();
  //     }
  //   };

  return {
    getTodos,
    deleteTodo,
    addTodo,
    updateTodo,
    State,
    Todo,
  };
})(Api, View);

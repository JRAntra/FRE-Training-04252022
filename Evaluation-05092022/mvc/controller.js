import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
  const state = new model.State();
  const init = () => {
    model.getTodos().then((todoList) => {
      state.todolist = todoList;
    });
  };
  const deleteTodo = () => {
    view.elements.pendingTask.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-trash")) {
        console.log(e.target.parentElement.id);
        const newtodolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.parentElement.id
        );
        //update todolist and rerender temp
        state.todolist = newtodolist;
        //delete todo from the backend
        model.deleteTodo(e.target.parentElement.id);
      }
    });
    view.elements.completedTask.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-trash")) {
        const newtodolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.parentElement.id
        );
        state.todolist = newtodolist;

        model.deleteTodo(e.target.parentElement.id);
      }
    });
  };

  const addTodo = () => {
    document.querySelector("#myForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const content = document.querySelector("#content").value;
      if (content === "") {
        alert("Please fill in the field");
      } else {
        const newTodo = new model.Todo(content);
        //post newtodo to server then fetch the new todolist from backend
        model.addTodo(newTodo).then((data) => {
          state.todolist = [...state.todolist, data];
        });
        //empty the input field
        document.querySelector("#content").value = "";
      }
    });
  };

  const changeToCompleted = () => {
    view.elements.pendingTask.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-arrow-right")) {
        // console.log(e.target.parentElement.id);
        const newtodo = state.todolist.find(
          (todo) => +todo.id === +e.target.parentElement.id
        );
        newtodo.isCompleted = true;
        const resttodolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.parentElement.id
        );
        model.updateTodo(newtodo).then((data) => {
          state.todolist = [...resttodolist, data];
        });
      }
    });
  };

  const changeToPending = () => {
    view.elements.completedTask.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-arrow-left")) {
        const newtodo = state.todolist.find(
          (todo) => +todo.id === +e.target.parentElement.id
        );
        newtodo.isCompleted = false;
        const resttodolist = state.todolist.filter(
          (todo) => +todo.id !== +e.target.parentElement.id
        );
        model.updateTodo(newtodo).then((data) => {
          state.todolist = [...resttodolist, data];
        });
      }
    });
  };

  const bootStrap = () => {
    init();
    deleteTodo();
    addTodo();
    changeToCompleted();
    changeToPending();
  };

  return { bootStrap };
})(Model, View);

//  APIs
const Api = (() => {
  const baseUrl = 'http://localhost:3000/todos';

  const getTodo = () => fetch(baseUrl).then((response) => response.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, id].join('/'), { method: 'DELETE' }).then((response) =>
      response.json()
    );

  const addTodo = (elem) =>
    fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(elem),
    }).then((response) => response.json());

  const updateTodo = (elem) =>
    fetch([baseUrl, elem.id].join('/'), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(elem),
    }).then((response) => response.json());

  return {
    getTodo,
    deleteTodo,
    addTodo,
    updateTodo,
  };
})();

//  Views
const View = (() => {
  const domVar = {
    addinput: document.querySelector('.add__input'),
    addevent: document.querySelector('.add__icon'),
    pending: document.querySelector('.pending'),
    compeleted: document.querySelector('.compeleted'),
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const createPendingTmp = (arr) => {
    let tmp = '';
    arr.forEach((todo) => {
      tmp += `
            <div class="pending__item" id=${todo.id}>
                <div class="pending__item__text">${todo.content}</div>
                <div class="pending__item__icons">
                    <div class="pending__item__icons__trash"><i class="fas fa-trash-alt"></i></div>
                    <div class="pending__item__icons__compeleted"><i class="far fa-check-circle"></i></div>
                </div>
            </div>
            `;
    });
    return tmp;
  };

  const createCompeletedTmp = (arr) => {
    let tmp = '';
    arr.forEach((compeletedtodo) => {
      tmp += `
              <div class="compeleted__item" id=${compeletedtodo.id}>
                <div class="compeleted__item__icons">
                    <div class="compeleted__item__icons__compeleted"><i class="fas fa-check-circle"></i></div>
                </div>
                <div class="compeleted__item__text">${compeletedtodo.content}</div>
                <div class="compeleted__item__icons">
                    <div class="compeleted__item__icons__trash"><i class="fas fa-trash-alt"></i></div>
                </div>
              </div>
              `;
    });
    return tmp;
  };

  return {
    domVar,
    createPendingTmp,
    createCompeletedTmp,
    render,
  };
})();

//  Models

const Model = ((api, view) => {
  const { getTodo, deleteTodo, addTodo, updateTodo } = api;
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
      // attach innerHTML for pending tasks
      view.render(
        view.domVar.pending,
        view.createPendingTmp(
          this.todolist.filter((todo) => todo.isCompleted === false)
        )
      );
      // attach innerHTML for compeleted tasks
      view.render(
        view.domVar.compeleted,
        view.createCompeletedTmp(
          this.todolist.filter((todo) => todo.isCompleted === true)
        )
      );
    }
  }

  return {
    getTodo,
    deleteTodo,
    addTodo,
    updateTodo,
    State,
    Todo,
  };
})(Api, View);

// Controllers
const Controller = ((model, view) => {
  const state = new model.State();

  const addTodo = () => {
    view.domVar.addevent.addEventListener('click', () => {
      var addcontent = view.domVar.addinput.value;
      const newTodo = new model.Todo(addcontent);
      //   Add to the http://localhost:3000/
      model
        .addTodo(newTodo)
        //   Shows in the UI
        .then((data) => {
          state.todolist = [...state.todolist, data];
        });
      view.domVar.addinput.value = '';
    });
  };

  const delete_and_move = (event) => {
    // Delete ToDos
    if (event.target.classList.contains('fa-trash-alt')) {
      event.target.parentNode.parentNode.parentNode.remove();
      model.deleteTodo(event.target.parentNode.parentNode.parentNode.id);
    }
    // Check ToDos
    if (event.target.classList.contains('fa-check-circle')) {
      const updateItem = state.todolist.find(
        (todo) => +todo.id === +event.target.parentNode.parentNode.parentNode.id
      );
      updateItem.isCompleted = !updateItem.isCompleted;
      const restItem = state.todolist.filter(
        (todo) => +todo.id !== +event.target.parentNode.parentNode.parentNode.id
      );
      model.updateTodo(updateItem).then((updateItem) => {
        state.todolist = [...restItem, updateItem];
      });
    }
  };

  //   Pending ToDo Lists
  const addPendingItem = () => {
    var toDoList = view.domVar.pending;
    toDoList.addEventListener('click', delete_and_move);
  };

  //   For Compeleted Tasks Div
  const addCompeletedItem = () => {
    var toDoList = view.domVar.compeleted;
    toDoList.addEventListener('click', delete_and_move);
  };

  const init = () => {
    model.getTodo().then((todoList) => {
      state.todolist = todoList;
    });
  };

  const bootstrap = () => {
    init();
    addTodo();
    addPendingItem();
    addCompeletedItem();
  };

  return { bootstrap };
})(Model, View);

Controller.bootstrap();

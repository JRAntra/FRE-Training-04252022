// import {Api} from './mvc/api.js';

// // ~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~
// const View = (() => {
// 	const domstr = {
// 		todolist: "#todolist__container",
// 		deletebtn: ".deletebtn",
// 		inputbox: ".todolist__input",
// 	};

// 	const render = (ele, tmp) => {
// 		ele.innerHTML = tmp;
// 	};
// 	const createTmp = (arr) => {
// 		let tmp = "";
// 		arr.forEach((todo) => {
// 			tmp += `
//                 <li>
//                     <span>${todo.id}-${todo.title}</span>
//                     <button class="dlt ${todo.id} deletebtn">X</button>
//                 </li>
//             `;
// 		});
// 		return tmp;
// 	};

// 	return {
// 		render,
// 		createTmp,
// 		domstr,
// 	};
// })();
// // ~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~
// const Model = ((api, view) => {
// 	const { getTodos, deleteTodo, addTodo } = api;

// 	class Todo {
// 		constructor(title) {
// 			this.title = title;
// 			this.userId = 3;
// 			this.completed = false;
// 		}
// 	}

// 	class State {
// 		#todolist = [];

// 		get todolist() {
// 			return this.#todolist;
// 		}
// 		set todolist(newtodolist) {
// 			this.#todolist = [...newtodolist];

// 			const todolistEle = document.querySelector(view.domstr.todolist);
// 			const tmp = view.createTmp(this.todolist);

// 			view.render(todolistEle, tmp);
// 		}
// 	}

// 	return {
// 		getTodos,
// 		deleteTodo,
//         addTodo,
// 		State,
// 		Todo,
// 	};
// })(Api, View);
// // ~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~
// const Controller = ((model, view) => {
// 	const state = new model.State();

// 	const addTodo = () => {
// 		const inputbox = document.querySelector(view.domstr.inputbox);
// 		inputbox.addEventListener("keyup", (event) => {
// 			if (event.key === "Enter" && event.target.value.trim() !== '') {
// 				const newtodo = new model.Todo(event.target.value);

//                 model.addTodo(newtodo).then(todo => {
//                     state.todolist = [todo, ...state.todolist];
//                 });

//                 event.target.value = '';
// 			}
// 		});
// 	};

// 	const deleteTodo = () => {
// 		const todolistEle = document.querySelector(view.domstr.todolist);
// 		todolistEle.addEventListener("click", (event) => {
// 			const [type, id] = event.target.className.split(" ");
// 			console.log(type, id);

// 			if (type === "dlt") {
// 				state.todolist = state.todolist.filter(
// 					(todo) => +todo.id !== +id
// 				);
// 			}
// 			model.deleteTodo(id);
// 		});
// 	};

// 	const init = () => {
// 		model.getTodos().then((todolist) => {
// 			state.todolist = [...todolist.reverse()];
// 		});
// 	};

// 	const bootstrap = () => {
// 		init();
// 		deleteTodo();
// 		addTodo();
// 	};

// 	return { bootstrap };
// })(Model, View);

// Controller.bootstrap();


console.log(document.getElementsByTagName('h1')[0]);
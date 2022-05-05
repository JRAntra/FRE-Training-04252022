// ~~~~~~~~~~~~~~~~~~ Api ~~~~~~~~~~~~~~~~~~
const Api = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const path = "todos";

	const getTodos = () =>
		fetch([baseUrl, path].join("/")).then((response) => response.json());

	const deleteTodo = (id) =>
		fetch([baseUrl, path, id].join("/"), {
			method: "DELETE",
		});

	return {
		getTodos,
		deleteTodo,
	};
})();

// ~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~
const View = (() => {
	const domstr = {
		todolist: "#todolist__container",
		deletebtn: ".deletebtn",
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};
	const createTmp = (arr) => {
		let tmp = "";
		arr.forEach((todo) => {
			tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button class="deletebtn" id="${todo.id}">X</button>
                </li>
            `;
		});
		return tmp;
	};

	return {
		render,
		createTmp,
		domstr,
	};
})();
// ~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~
const Model = ((api, view) => {
	const { getTodos, deleteTodo } = api;

	class State {
		#todolist = [];

		get todolist() {
			return this.#todolist;
		}
		set todolist(newtodolist) {
			this.#todolist = [...newtodolist];

			const todolistEle = document.querySelector(view.domstr.todolist);
			const tmp = view.createTmp(this.todolist);

			view.render(todolistEle, tmp);

			const deletebtns = document.querySelectorAll(view.domstr.deletebtn);

			deletebtns.forEach((btn) => {
				btn.addEventListener("click", (event) => {
					this.todolist = this.todolist.filter(
						(todo) => +todo.id !== +event.target.id
					);
				});
			});
		}
	}

	return {
		getTodos,
		deleteTodo,
		State,
	};
})(Api, View);
// ~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~
const Controller = ((model, view) => {
	const state = new model.State();

	const init = () => {
		model.getTodos().then((todolist) => {
			state.todolist = todolist;
		});
	};

	return { init };
})(Model, View);

Controller.init();

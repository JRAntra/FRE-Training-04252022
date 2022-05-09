export const Api = (() => {
  const baseUrl = "http://localhost:3000";
  const path = "todos";

  const getTodos = () =>
    fetch([baseUrl, path].join("/")).then((response) => response.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, path, id].join("/"), { method: "DELETE" }).then(
      (response) => response.json()
    );

  const addTodo = (todo) =>
    fetch([baseUrl, path].join("/"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => response.json());

  const updateTodo = (todo) =>
    fetch([baseUrl, path, todo.id].join("/"), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => response.json());

  return {
    getTodos,
    deleteTodo,
    addTodo,
    updateTodo,
  };
})();

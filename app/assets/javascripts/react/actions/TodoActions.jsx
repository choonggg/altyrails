class TodoActions {
  getInitialTodos(todos) {
    return todos;
  }

  addTodo(name) {
    return name


  } // end add todo
}

window.TodoActions = alt.createActions(TodoActions);

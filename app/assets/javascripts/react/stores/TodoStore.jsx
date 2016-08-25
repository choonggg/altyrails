class TodoStore {

  constructor() {

    this.todos = [];

    this.bindListeners({
      getInitialTodos: TodoActions.GET_INITIAL_TODOS,
      handleAddTodo: TodoActions.ADD_TODO
    })
  }

  getInitialTodos(todos) {
    this.setState({todos})
  }

  handleAddTodo(name) {
    let that = this;

    $.ajax({
      type: 'POST',
      url: '/todos',
      data: {
        todo: { name: name }
      },
      success: function(data) {
        that.todos.push(data)
        that.emitChange()
      },
      error: function(response) {
        console.log('ERROR')
        console.log(response)
      }
    })

  } // Handle add todo
}

window.TodoStore = alt.createStore(TodoStore, 'TodoStore');

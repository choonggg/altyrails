class TodoIndex extends React.Component {

  constructor(props) {
    super(props)
    todos: []

    TodoStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    TodoStore.listen(this.onChange)
    TodoActions.getInitialTodos(this.props.todos)
  }

  cimponentWillUnmount() {
    TodoStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  render() {

    return(
      <div>
        <h2>Todo List</h2>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

}


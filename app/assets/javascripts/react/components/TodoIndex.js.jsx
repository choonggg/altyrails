class TodoIndex extends React.Component {

  constructor(props) {
    super(props)
    todos: []

    this.submitTodo = this.submitTodo.bind(this);
  }

  componentWillMount() {
    this.setState({todos: this.props.todos})
  }

  submitTodo(name) {
    $.ajax({
      type: 'POST',
      url: '/todos',
      data: {
        todo: { name: name }
      },
      success: function(response) {
        this.state.todos.push(response)
        this.setState({todos: this.state.todos})
      }.bind(this),
      error: function(response) {
        console.log('ERROR')
        console.log(response)
      }
    })
  }

  render() {

    return(
      <div>
        <h2>Todo List</h2>
        <TodoForm submitTodo={this.submitTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }

}

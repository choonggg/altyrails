class TodoIndex extends React.Component {

  constructor(props) {
    super(props)
    todos: []
  }

  componentWillMount() {
    this.setState({todos: this.props.todos})
  }

  render() {
    let todos = _.map(this.state.todos, function(todo){
      return <li>{todo.name}</li> 
    });

    return(
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }

}

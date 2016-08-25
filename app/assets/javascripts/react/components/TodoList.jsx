class TodoList extends React.Component {
  
  render() {
    let todos = _.map(this.props.todos, (todo) => {
      return <TodoItem key={todo.id} todo={todo} />;
    });

    return(
      <ul>
        {todos}
      </ul>
    )
  }
}

class TodoItem extends React.Component {

  render() {
    return(
      <li>
        <a href="">Check</a>
        <span> {this.props.todo.name} </span>
      </li>
    )
  }

}

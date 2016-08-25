class TodoForm extends React.Component {

  constructor(props) {
    super()
    this.state = {
      todoName: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onInputKeyDown = this.onInputKeyDown.bind(this)
  }

  onInputChange(e) {
    this.setState({todoName: e.target.value})
  }

  onInputKeyDown(e) {
    if (e.keyCode == 13 && this.refs.todo.value.length) {
      this.props.submitTodo(e.target.value)
    }
  }

  render() {
    return(
      <div>
        <input type="text" 
          placeholder="Enter new Todo" 
          ref='todo'
          value={this.state.todoName}
          onChange={this.onInputChange}
          onKeyDown={this.onInputKeyDown} />
      </div>
    )
  }

}

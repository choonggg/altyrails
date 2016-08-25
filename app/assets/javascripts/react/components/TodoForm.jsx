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
      TodoActions.addTodo(e.target.value)
      this.setState({todoName: ''})
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

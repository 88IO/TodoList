import React, { Component } from 'react';
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      uniqueId: 0
    };
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });

    console.log(this.state);
  }

  delTodo(e) {
    console.log(e.target.id);
    this.setState({
      tasks: this.state.tasks.filter((v) => v.id != e.target.id)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;

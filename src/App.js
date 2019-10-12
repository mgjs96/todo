import React, { Component } from 'react'
import Todos from './Todos'
import AddForm from './AddForm'
export class App extends Component {
state={
  todos:[
    {id:1, content:"Play 8 ball Pool"},
    {id:2, content:"Let's Play Songs"},
  ]
}
deleteTodo= (id) =>{
  const todos= this.state.todos.filter(todo=>{
    return todo.id !== id
  } );
  this.setState(
    {
      todos
    }
  )
}
addTodo= (todo) =>{
  todo.id= Math.random();
  let todos= [...this.state.todos, todo]
  this.setState({
    todos
  })
}


  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <br/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App

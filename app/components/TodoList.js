import React, { Component } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import Todo from './Todo';
import AddTodo from './AddTodo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  listTodos() {
    return this.state.todos.map( (todo, index) => (
      <Todo key={index} text={ todo.text }/>
    ))
  }

  addTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([{ text: todo }]),
    })
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <AddTodo addTodo={this.addTodo.bind(this)}/>
        <ScrollView style={{
        }}>
          { this.listTodos() }
        </ScrollView>
      </View>
    )
  }
}

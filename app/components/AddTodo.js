import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addTodo() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={{
        flex: 0,
        flexDirection: 'row',
        // paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TextInput
          placeholder="I have to ..."
          style={{
            width: 300,
            height: 40
          }}
          onSubmitEditing={ () => this.addTodo() }
          value={this.state.text}
          onChangeText={ text => this.setState({ text }) }
        />
        <Button title="Add" onPress={ () => this.addTodo() }/>
      </View>
    )
  }
}

import React, { Component } from 'react';
import { Text } from 'react-native';
// Text
// Toggle
// Delete

export default class Todo extends Component {
  render() {
    return (
      <Text style={{
        fontSize: 20,
        lineHeight: 50
      }}>{ this.props.text }</Text>
    )
  }
}

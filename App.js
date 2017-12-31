import React from 'react';
import { Platform, StatusBar, StyleSheet, SafeAreaView, Text, View } from 'react-native';
// import Box from './Box';

import TodoList from './app/components/TodoList';

const StupidNav = ({ title = "test" }) => {
  const Xomponent = () => (
    <View style={{
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#f00',
    }}>

      <Text style={{
        fontSize: 25,
      }}>{title}</Text>
    </View>
  );

  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView style={{
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#f00',
      }}>
        <Xomponent/>
      </SafeAreaView>
    )
  } else {
    return <Xomponent/>
  }
}

const Wrapper = ({ children }) => (
  <View style={{
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }}>
    { children }
  </View>
)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StupidNav title="My Lovely Stupid Todo App"/>

        <StatusBar
          hidden={false}
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
        />
        <Wrapper>
          <TodoList />
        </Wrapper>
      </View>
    );
  }
}

const paddingTop = Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});

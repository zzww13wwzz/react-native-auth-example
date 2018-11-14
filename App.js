import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {Header, Spinner } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'


export default class App extends React.Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAjieBxjuvcULrgBOe0kh5-z2tdh5nmGwM',
      authDomain: 'auth-d59e6.firebaseapp.com',
      databaseURL: 'https://auth-d59e6.firebaseio.com',
      projectId: 'auth-d59e6',
      storageBucket: 'auth-d59e6.appspot.com',
      messagingSenderId: '235718199713'
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({loggedIn: (user ? true : false) })
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button title={'Log Out'} onPress={() => firebase.auth().signOut()}/>
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large'/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='auth'/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

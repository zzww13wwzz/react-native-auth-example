import React, {Component} from 'react';
import firebase from 'firebase';
import {Button, TextInput, Text} from 'react-native';
import {Box, Header, Input, Spinner} from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const {email, password} = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed.'
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small'/>
    };
    return <Button title='Log in' onPress={this.onButtonPress.bind(this)}/>
  }

  render() {
    return (
      <Box>
        <Box>
          <Input
            placeholder='user@example.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </Box>
        <Box>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </Box>
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <Box>
          {this.renderButton()}

        </Box>
      </Box>
    );
  };
}

const  styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, createUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onSignupPress() {
    const { email, password, loading } = this.props;
    this.props.createUser({ email, password });
  }
  onLoginPress() {
    const { email, password, loading } = this.props;
    this.props.loginUser({ email, password });
  }
  renderLogin() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onLoginPress.bind(this)} >
        Login
      </Button>
    );
  }

  renderSignup() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onSignupPress.bind(this)} >
        Signup
      </Button>
    );
  }

  render() {
    return(
      <View>
        <Card style={{ alignSelf: 'center' }}>
          <CardSection>
            <Input label="Email" placeholder="tee@mak.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input label="Password" placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              secureTextEntry
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          <CardSection>
            {this.renderSignup()}
          </CardSection>

          <CardSection>
            {this.renderLogin()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, createUser })(LoginForm);
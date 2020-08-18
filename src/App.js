import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screen/Home';
import CourseDetail from './Screen/Detail';
import SignupScreen from './Screen/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Layouts/Header';
import SigninScreen from './Screen/Signin';
import { connect } from 'react-redux';
import { createAction } from './Redux/Actions';
import { FETCH_CREDENTIALS } from './Redux/Actions/type';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/detail/:courseId" exact component={CourseDetail} />
          <Route path="/signup" exact component={SignupScreen} />
          <Route path="/signin" exact component={SigninScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialsFromLocal = () => {
    const credentialsStr = localStorage.getItem('credentials');
    if (credentialsStr) {
      this.props.dispatch(createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr)))
    }
  }
  componentDidMount() {
    this._getCredentialsFromLocal()
  }
}

export default connect()(App);

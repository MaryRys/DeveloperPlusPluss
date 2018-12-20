import React, { Component } from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Tutorials from '../components/Tutorials/Tutorials';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authed: false,
    github_username: '',
  }


  componentDidMount() {
    connection();

  //   this.removeListener = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //       });
  //     } else {
  //       this.setState({
  //         authed: false,
  //       });
  //     }
  //   });
  }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  isAuthenticated = (username) => {
    this.setState({ authed: true, github_username: username });
  };

  // const logoutClickEvent = () {
  //   this.setState({ authed: true, github_username: '' });
  // };

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
          <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated}/>
          </div>
      );
    }

    return (
      <div className="App">
      <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
      <Tutorials />
      </div>
    );
  }
}

export default App;

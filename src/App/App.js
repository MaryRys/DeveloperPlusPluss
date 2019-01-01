import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Tutorials from '../components/Tutorials/Tutorials';
import TutorialsForm from '../components/TutorialsForm/TutorialsForm';
import MyNavbar from '../components/MyNavbar/MyNavbar';

import tutorialsRequests from '../helpers/data/tutorialsRequests';

import './App.scss';
import authRequests from '../helpers/data/authRequests';

class App extends Component {
  state = {
    authed: false,
    github_username: '',
    tutorials: [],
  }


  componentDidMount() {
    connection();
    tutorialsRequests.getRequest()
      .then((tutorials) => {
        this.setState({ tutorials });
      })
      .catch(err => console.error('error with tutorials GET', err));

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = (username) => {
    this.setState({ authed: true, github_username: username });
  };

  deleteOne = (tutorialId) => {
    tutorialsRequests.deleteTutorial(tutorialId)
      .then(() => {
        tutorialsRequests.getRequest()
          .then((tutorials) => {
            this.setState({ tutorials });
          });
      })
      .catch(err => console.error('error with deleting single tutorials', err));
  };

  formSubmitEvent = (newTutorial) => {
    tutorialsRequests.postRequest(newTutorial)
      .then(() => {
        tutorialsRequests.getRequest()
          .then((tutorials) => {
            this.setState({ tutorials });
          });
      })
      .catch(err => console.error('error with tutorials POST', err));
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false, github_username: '' });
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
        <Tutorials tutorials={this.state.tutorials}
        deleteSingleTutorial={this.deleteOne}
        />
        <TutorialsForm onSubmit={this.formSubmitEvent} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';

// import Auth from '../components/Auth/Auth';
// import authRequests from '../helpers/data/authRequests';

class App extends Component {
  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
      <Auth />
      </div>
    );
  }
}

export default App;

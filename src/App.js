import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import UserPage from './component/UserPage';
import { ToastContainer } from 'react-toastify';
class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user-page" component={UserPage} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;

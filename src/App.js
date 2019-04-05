import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import House from './components/House/House'
import Wizard from './components/Wizard/Wizard'
import Header from './components/Header/Header'
import { HashRouter, Switch, Link, Route } from 'react-router-dom';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header />
              {routes}
          </header>
        </div>
      </HashRouter>
    );
  }
}

export default App;

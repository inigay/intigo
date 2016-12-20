import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Navigation from './shared/Navigation';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navigation />
      </MuiThemeProvider>
    );
  }
}

export default App;

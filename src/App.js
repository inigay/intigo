import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Navigation from './shared/Navigation';
import intigoTheme from './shared/Theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={intigoTheme}>
        <Navigation />
      </MuiThemeProvider>
    );
  }
}

export default App;

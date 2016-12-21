import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import intigoTheme from './shared/Theme';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={intigoTheme}>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;

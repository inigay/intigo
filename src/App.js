import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Main from './Main';
import intigoTheme from './shared/Theme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Home from './pages/home/Home';
import About from './pages/about/About';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={intigoTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
              <IndexRoute component={Home} />
              <Route path="/about" component={About} />
            </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

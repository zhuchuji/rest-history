import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import routeConfig from './route-conf';
import history from './rest-history';
import Home from './Home';
import Page from './Page';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.pushHistory = this.pushHistory.bind(this);
  }

  pushHistory() {
    const pageId = Math.floor(Math.random() * 1000);
    history.pushWithParams(routeConfig.page, { pageId: pageId });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.pushHistory}>Click</button>
        </p>
        <Router history={history}>
          <Switch>
            <Route path={routeConfig.home} component={Home} />
            <Route path={routeConfig.page} component={Page} />
            <Redirect to={routeConfig.home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

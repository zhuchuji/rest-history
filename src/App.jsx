import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import routeConfig from './route-conf';
import history from './rest-history';
import Home from './Home';
import Page from './Page';
import RestLink from './RestLink';
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
        <Router history={history}>
          <div>
            <div>
              <button onClick={this.pushHistory}>Go</button>
            </div>
            <div>
              <RestLink path={routeConfig.home}>Home</RestLink>
              <RestLink path={routeConfig.page} params={{ pageId: 1 }}>Page 1</RestLink>
            </div>
            <Route path={routeConfig.home} component={Home} />
            <Route path={routeConfig.page} component={Page} />
            <Redirect to={routeConfig.home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp-es6';

class RestLink extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    state: PropTypes.object,
    params: PropTypes.object
  }

  render() {
    const toPath = pathToRegexp.compile(this.props.path);
    let children = this.props.children;
    return <Link to={toPath(this.props.params)} state={this.props.state}>{children}</Link>;
  }
}

export default RestLink;

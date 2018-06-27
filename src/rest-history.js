import createBrowserHistory from 'history/createBrowserHistory';
import pathToRegexp from 'path-to-regexp-es6';

const history = createBrowserHistory()

history.pushWithParams = function(path, params, state) {
  const toPath = pathToRegexp.compile(path);
  history.push(toPath(params), state);
}

export default history;

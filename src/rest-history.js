import createBrowserHistory from 'history/createBrowserHistory';
import pathToRegExp from 'path-to-regexp-es6';

const history = createBrowserHistory()

history.pushWithParams = function(path, params, state) {
  const toPath = pathToRegExp.compile(path);
  history.push(toPath(params), state);
}

export default history;

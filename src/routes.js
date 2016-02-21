import React from 'react';
import { IndexRoute, Route, hashHistory } from 'react-router';
import { App, Home, About } from 'containers';

/*
 * 1. missing a header
 * 2. missing a footer
 */
export default () => {
  return (
    <Route path="/" history={ hashHistory } component={App}>
      <IndexRoute component={Home} />

      { /* Routes */ }
      <Route path="home" component={Home} />
      <Route path="about" component={About} />

    </Route>
  );
};

import React from 'react';
import { IndexRoute, Route, hashHistory } from 'react-router';
// import App from './containers/App/App';
// import Home from './containers/Home/Home';
import { App, Home, Sample } from 'containers';



// console.log(Home);
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
      <Route path="sample" component={Sample} />
    </Route>
  );
};

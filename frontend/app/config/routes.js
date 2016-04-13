import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import AddContainer from '../containers/AddContainer';

const routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='add' component={AddContainer} />
    </Route>
  </Router>
);


export default routes;

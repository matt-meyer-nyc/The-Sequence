import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import AddContainer from '../containers/AddContainer';
import ListContainer from '../containers/ListContainer';
import SearchContainer from '../containers/SearchContainer';

const routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='add' component={AddContainer} />
      <Route path='list' component={ListContainer} />
      <Route path='search' component={SearchContainer} />
    </Route>
  </Router>
);


export default routes;

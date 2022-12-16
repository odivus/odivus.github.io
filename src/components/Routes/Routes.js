import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';

function Routes() {
  return (
    <Switch>
      <Route exact strict path='/'>
        <Main />
      </Route>
      <Route exact strict path='/portfolio'>
        <Portfolio />
      </Route>
      <Route exact strict path='/resume'>
        <Resume />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
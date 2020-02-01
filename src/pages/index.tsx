import * as React from 'react';
import { Redirect, Route as LibRoute, Switch } from 'react-router-dom';
import Boards from './dashboard';

const Route = () => {
  return (
    <Switch>
      <LibRoute path='/home' component={Boards} />
      <Redirect exact={true} from='/' to='/home' />
    </Switch>
  );
};

export default Route;

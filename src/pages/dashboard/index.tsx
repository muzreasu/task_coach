import * as React from 'react';
import { match, Redirect, Route as LibRoute, Switch, useRouteMatch } from 'react-router-dom';
import Create from './create';

const Boards: React.FC = () => {
  const { path } = useRouteMatch() as match;
  return (
    <Switch>
      <LibRoute path={`${path}/create`} component={Create} />
      <Redirect from={path} to={`${path}/create`} />
    </Switch>
  );
};

export default Boards;

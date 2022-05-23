import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, RouteProps } from 'react-router';

const PrivateRoute: React.FC<
  {
    isAuth: boolean;
  } & RouteProps
> = ({ ...rest }) => <Route {...rest} />;

export default PrivateRoute;

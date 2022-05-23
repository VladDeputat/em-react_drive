import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, RouteProps } from 'react-router';

const PublicRoute: React.FC<RouteProps> = ({ ...rest }) => <Route {...rest} />;

export default PublicRoute;

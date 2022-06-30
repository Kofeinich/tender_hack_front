import { Redirect, Route, Switch } from 'react-router-dom';
import { Path } from './paths';
import { LoginPage } from '../../views/auth/login/LoginPage';
import { RegistrationPage } from '../../views/auth/registration/RegistrationPage';
import { RedirectWithQuery } from './redirectWithQuery';
import { NotFoundPage } from '../../views/notFoundPage/NotFoundPage';
import React from 'react';

export const unauthorizedRoutes: React.ReactNode = (
  <Switch>
    <Route path={Path.LOGIN} exact component={LoginPage} />
    <Route path={Path.REGISTER} exact component={RegistrationPage} />
    <Route path="/" exact>
      <RedirectWithQuery to={Path.LOGIN} />
    </Route>
    <Route path={Path.NOTFOUND} component={NotFoundPage} />
    <Route path="*">
      <Redirect to={Path.NOTFOUND} />
    </Route>
  </Switch>
)
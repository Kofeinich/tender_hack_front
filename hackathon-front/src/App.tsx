import React, { useEffect, useState } from 'react';
import { routes } from './core/router/routes';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import { PageHeader } from './components/header/PageHeader';
import { unauthorizedRoutes } from './core/router/unauthorizedRoutes';
import { RedirectWithQuery } from './core/router/redirectWithQuery';
import { Path } from './core/router/paths';
import authStore from './store/auth'
import { MainPage } from "./views/main/MainPage";
import { LoginPage } from './views/auth/login/LoginPage';
import { RegistrationPage } from './views/auth/registration/RegistrationPage';
import { NotFoundPage } from './views/notFoundPage/NotFoundPage';
import { JwtType } from './views/auth/types';
import { observer } from 'mobx-react-lite';
import { isBoolean } from 'util';
import {successToast} from "./components/alerts/success";
import {errorToast} from "./components/alerts/fail";
import {SessionsPage} from "./views/sessions/SessionsPage";
import {Profile} from "./views/profile/Profile";
import {SessionInfoPage} from "./views/session-info/SessionInfoPage";

// TODO: make authentication for user

export const App = observer(() => {
    const responseStatus = authStore.responseStatus
    const access = localStorage.getItem('accessToken');
    const authToken = localStorage.getItem('authToken');
    const { isAuthorized } = authStore;
    const history = useHistory();
    // const [userData, setUserData] = useState<UserType>({ id: 0, name: '', surname: '', role: '' });

    useEffect(() => {
        if(access || authToken) {
            authStore.setIsAuthorized(true);
        } else {
            authStore.setIsAuthorized(false);
        }
    }, [access, authToken])

    console.log(access, authToken, isAuthorized);

    useEffect(() => {
        if (responseStatus.message) {
            if (responseStatus.code === 200) {
                successToast(responseStatus.message);
            } else {
                errorToast(responseStatus.message);
            }
        }
    }, [responseStatus]);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <RedirectWithQuery to={Path.MAIN} />
                </Route>
                <Route path={Path.SESSIONS} exact>
                    <SessionInfoPage/>
                </Route>
                <Route path={Path.SESSIONS + '/:id'} exact>
                    <SessionsPage/>
                </Route>
                <Route path={Path.MAIN} exact>
                    <MainPage />
                </Route>
                <Route path={Path.NOTFOUND} component={NotFoundPage} />

                <Route path={Path.LOGIN} exact>
                    <LoginPage />
                </Route>
                {/*{isAuthorized &&*/}
                <Route path={Path.PROFILE} exact>
                    <Profile />
                </Route>
                {/*}*/}
                <Route path={Path.REGISTER} exact component={RegistrationPage} />
                <Route path="*">
                    <Redirect to={Path.NOTFOUND} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
});
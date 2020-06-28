import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "../../../../features/auth/login/ui/Login";
import Register from "../../../../features/auth/register/ui/Register";
import NewPassword from "../../../../features/auth/newPassword/ui/NewPassword";
import ResetPassword from "../../../../features/auth/resetPassword/ui/ResetPassword";
import Profile from "../../../../features/auth/profile/ui/Profile";


type PageType = {
    id: number;
    title: string;
    path?: string;
    exact?: boolean;
    component: any;
};

const pages: Array<PageType> = [
    {id: 0, title: 'login', path: '/login', exact: true, component: () => <Login/>},
    {id: 1, title: 'register', path: '/register',  exact: true, component: () => <Register/>},
    {id: 2, title: 'newPassword', path: '/newPassword',  exact: true, component: () => <NewPassword/>},
    {id: 3, title: 'resetPassword', path: '/resetPassword',  exact: true, component: () => <ResetPassword/>},
    {id: 4, title: 'profile', path: '/profile',  exact: true, component: () => <Profile/>},
];


const Routes = () => {
    debugger
    return (
        <Switch>
            {pages.map(p => (
                <Route
                    key={p.id}
                    path={p.path}
                    exact={p.exact}
                    render={p.component}
                />
            ))}
        </Switch>
    )
};

export default Routes;
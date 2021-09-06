import React from 'react';
import { matchPath, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import _ from 'lodash';
import NotFoundPage from '../pages/Notfound'
const Notfound = {
    path: '/notfound',
    key: 'ROOT',
    layout: 'Layout2', // The topped Layout Name
    exact: true,
    component: loadable(() => import('../pages/Notfound'), {
        fallback: 'loading notfound page.'
    })
}

const matched = (path, routes) => {
    let result = Notfound;
    _.forEach(routes, route => {
        if (route.routes) {
            matched(path, route.routes);
        } else {
            const matchedRoute = matchPath(path, route);
            if (matchedRoute && matchedRoute.isExact) {
                result = route;
            }
        }
    });

    return result;
}
export {
    matched
}

const RouteWithSubRoutes = (route) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />} />
);


const RenderRoutes = ({ routes }) => (
    <Switch>
        {routes.map(route => <RouteWithSubRoutes key={route.key} {...route} />)}
        <Route component={NotFoundPage} />
    </Switch>
);
export default RenderRoutes;
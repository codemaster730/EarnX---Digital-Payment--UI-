import React from 'react';
import { useLocation } from 'react-router-dom';
import routes from './config/routes.config';
import * as Layouts from './layouts';
import RenderRoutes, { matched } from "./utils/RouteUtils";

const AppLayout = () => {
    const location = useLocation();
    const matchedRoute = matched(location.pathname, routes);
    const Layout = Layouts[matchedRoute['layout']];

    return (
        <Layout>
            <RenderRoutes routes={routes} />
        </Layout>
    )
};

export default AppLayout;

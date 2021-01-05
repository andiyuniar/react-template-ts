import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';

interface IAppRoute {
    component?: any;
    layout: any;
    [x:string]: any
}

const AppRoute: React.FC<IAppRoute> = ({component:Component, layout: Layout, ...rest }) => {
    return(
        <Route {...rest} render={props => (
            <Layout>
                <ErrorBoundary>
                    <Component {...props} />
                </ErrorBoundary>
            </Layout>
        )} />
    )
};

export default AppRoute;
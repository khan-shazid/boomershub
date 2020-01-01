import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

// import  {isTokenExpired} from "./services/Util";

import AddResource from './pages/resources/AddResource';
import ResourceList from './pages/resources/ResourceList';
import EditResource from './pages/resources/EditResource';

// import Login from './components/Login';
// import Logout from './components/Logout';
// import RedirectTo from './components/RedirectTo';
// import NotFound from './components/NotFound';

// const PrivateRoute = ({component: Component, ...rest}) => {
//     const token = JSON.parse(localStorage.getItem('token'));
//     return token ? (
//         <Route { ...rest } render={ matchProps => (
//             <PrivateLayout>
//                 <RedirectTo/>
//                 <Component { ...matchProps } />
//             </PrivateLayout>
//         ) }/>
//     ) : <Redirect to="/login"/>;
// };
//

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route { ...rest } render={ matchProps => (
            <DefaultLayout>
                <Component { ...matchProps } />
            </DefaultLayout>
        ) }/>
    );
};

class Root extends Component {
    render() {
        // const token = JSON.parse(localStorage.getItem('token'));
        return (
            <Router>
                <Switch>
                  <PublicRoute exact path="/upload-resource" component={ AddResource }/>
                    <PublicRoute exact path="/resource-list" component={ ResourceList }/>
                  <PublicRoute path="/resource-list/:resourceId" component={ EditResource }/>
                  <PublicRoute exact path="/" component={ AddResource }/>
                </Switch>
            </Router>
        );
    }
}

export default Root;

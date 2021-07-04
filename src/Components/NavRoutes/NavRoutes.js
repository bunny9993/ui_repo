import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../Containers/PrivateRoute/PrivateRoute';
import NoMatch from '../../Containers/NoMatch/NoMatch';
import Login from './../../Containers/Login/Login';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Home from '../../Containers/Home/Home';
import UserForm from '../../Containers/UserForm/UserForm'
import AddSurvey from '../../Containers/AddSurvey/AddSurvey';

const NavRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/home'} component={Home}/>
        <Route exact path={'/createuser'} component={UserForm}/>
        <Route exact path={'/createsurvey'} component={AddSurvey}/>   
        <PrivateRoute exact component={NoMatch} />
      </Switch>
    </>
  );
};

export default NavRoutes;

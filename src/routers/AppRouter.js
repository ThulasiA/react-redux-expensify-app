import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'; 
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpExpense from '../components/HelpExpense';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
  
const AppRouter = () => (
  <Router history={history}>
    <div>
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact />
      <PrivateRoute path="/create" component={AddExpense} />
      <PrivateRoute path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={HelpExpense} />
      <Route component={PageNotFound} />
    </Switch>   
    </div>   
  </Router>
);

export default AppRouter;
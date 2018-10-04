import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'; 
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpExpense from '../components/HelpExpense';
import PageNotFound from '../components/PageNotFound';
import Header from '../components/Header';
  
const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit/:id" component={EditExpense} />
      <Route path="/help" component={HelpExpense} />
      <Route component={PageNotFound} />
    </Switch>   
    </div>   
  </BrowserRouter>
);

export default AppRouter;
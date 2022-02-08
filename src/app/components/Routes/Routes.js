import React from "react"
import {
  Route,
  Switch,
  Redirect,
  Router as BrowserRouter
} from 'react-router-dom'


import { HomePage, LoginPage, } from "pages"
import { history } from "system/history"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { TestPage } from "pages/TestPage"
import { UsersPage } from "pages/UsersPage"

export const Routes = ({
  loggedIn
}) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <ProtectedRoute path='/home' component={HomePage}/>
        <ProtectedRoute path='/students' component={TestPage} />
        <ProtectedRoute path='/subjects' component={TestPage} />
        <ProtectedRoute path='/professions' component={TestPage} />
        <ProtectedRoute path='/users' component={UsersPage} />
        <ProtectedRoute path='/commands' component={TestPage} />
        {
          loggedIn &&
            <Redirect from='/login' to='/home' />
        }
        {
          !loggedIn &&
            <Route path='/login' component={LoginPage} />
        }
        {
          loggedIn &&
            <Redirect from='*' to='/home' />
        }
        {
          !loggedIn &&
            <Redirect from='*' to='/login' />
        }
      </Switch>
    </BrowserRouter>
  )
}
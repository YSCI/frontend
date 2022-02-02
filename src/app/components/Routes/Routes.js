import React from "react"
import {
  Route,
  Switch,
  Redirect,
  Router as BrowserRouter
} from 'react-router-dom'


import { LoginPage } from "pages"
import { history } from "system/history"

export const Routes = ({
  loggedIn
}) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
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
import React from "react"
import {
  Route,
  Switch,
  Redirect,
  Router as BrowserRouter
} from 'react-router-dom'


import {
  HomePage,
  LoginPage,
  UsersPage,
  RegionsPage,
  StudentsPage,
  StatusesPage,
  PrivilegesPage,
  CommunitiesPage,
  CitizenshipPage,
  ProfessionsPage,
  CommissariatsPage,
  NationalitiesPage,
  HealthStatusesPage
} from "pages"
import { history } from "system/history"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { TestPage } from "pages/TestPage"

export const Routes = ({
  loggedIn
}) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <ProtectedRoute path='/home' component={HomePage}/>
        <ProtectedRoute path='/students' component={StudentsPage} />
        <ProtectedRoute path='/subjects' component={TestPage} />
        <ProtectedRoute path='/professions' component={ProfessionsPage} />
        <ProtectedRoute path='/users' component={UsersPage} />
        <ProtectedRoute path='/commands' component={TestPage} />
        <ProtectedRoute path='/citizenships' component={CitizenshipPage} />
        <ProtectedRoute path='/health-statuses' component={HealthStatusesPage} />
        <ProtectedRoute path='/statuses' component={StatusesPage} />
        <ProtectedRoute path='/regions' component={RegionsPage} />
        <ProtectedRoute path='/nationalities' component={NationalitiesPage} />
        <ProtectedRoute path='/privileges' component={PrivilegesPage} />
        <ProtectedRoute path='/commissariats' component={CommissariatsPage} />
        <ProtectedRoute path='/communities' component={CommunitiesPage} />
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
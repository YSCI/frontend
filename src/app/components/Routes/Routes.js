import React, { lazy, Suspense } from "react"
import {
  Route,
  Switch,
  Redirect,
  Router as BrowserRouter
} from 'react-router-dom'

import { history } from "system/history"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { AppLoader } from "ui/AppLoader"
import { HomePage } from "pages/HomePage"

const ProfessionsPage = lazy(() => import('pages/ProfessionsPage')
  .then(module => ({ default: module.ProfessionsPage })))
const LoginPage = lazy(() => import('pages/LoginPage')
  .then(module => ({ default: module.LoginPage })))
const UsersPage = lazy(() => import('pages/UsersPage')
  .then(module => ({ default: module.UsersPage })))
const RegionsPage = lazy(() => import('pages/RegionsPage')
  .then(module => ({ default: module.RegionsPage })))
const StudentsPage = lazy(() => import('pages/StudentsPage')
  .then(module => ({ default: module.StudentsPage })))
const StatusesPage = lazy(() => import('pages/StatusesPage')
  .then(module => ({ default: module.StatusesPage })))
const PrivilegesPage = lazy(() => import('pages/PrivilegesPage')
  .then(module => ({ default: module.PrivilegesPage })))
const CommunitiesPage = lazy(() => import('pages/CommunitiesPage')
  .then(module => ({ default: module.CommunitiesPage })))
const CitizenshipPage = lazy(() => import('pages/CitizenshipPage')
  .then(module => ({ default: module.CitizenshipPage })))
const CommissariatsPage = lazy(() => import('pages/CommissariatsPage')
  .then(module => ({ default: module.CommissariatsPage })))
const NationalitiesPage = lazy(() => import('pages/NationalitiesPage')
  .then(module => ({ default: module.NationalitiesPage })))
const HealthStatusesPage = lazy(() => import('pages/HealthStatusesPage')
  .then(module => ({ default: module.HealthStatusesPage })))
const CommandsPage = lazy(() => import('pages/CommandsPage')
  .then(module => ({ default: module.CommandsPage })))
const StudentProfilePage = lazy(() => import('pages/StudentProfilePage')
.then(module => ({ default: module.StudentProfilePage })))

export const Routes = ({
  loggedIn
}) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Suspense fallback={<AppLoader />}>
          <ProtectedRoute path='/home' component={HomePage}/>
          <Route path='/login' component={LoginPage} />
          <ProtectedRoute path='/commands' component={CommandsPage}/>
          <ProtectedRoute path='/students' component={StudentsPage} />
          <ProtectedRoute path='/student/:studentId' component={StudentProfilePage} />
          <ProtectedRoute path='/professions' component={ProfessionsPage}/>
          <ProtectedRoute path='/users' component={UsersPage} />
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
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}
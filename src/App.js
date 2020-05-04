import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Header from './Header/Header'
import Home from './Home/Home'
import MovieDetails from './Movie/MovieDetails/MovieDetails'
import ErrorBoundary from './Error/ErrorBoundry'
import MovieHome from './Movie/MovieHome/MovieHome'
import Auth from './Auth/Auth'
import Login from './Auth/Login'
import Profile from './Profile/Profile'
import CovidHome from './CoVid/CovidHome'
import CovidCountry from './CoVid/ByCountry/CovidCountry'
import './App.css';

import { AuthProvider } from './Contexts/Auth-Context'
import ProtectedRoute from './Auth/ProtectedRoute'


require('dotenv').config()

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AuthProvider>
          <Header />
          <Switch>
            <ProtectedRoute path='/movies/:id' component={MovieDetails} />} />
            {/* <ProtectedRoute path='/movies/:id' render={(props) => <MovieDetails id={props.match.params.id} />} /> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/covid' component={CovidHome} />
            <Route exact path='/covid/:country' component={CovidCountry} />
            <ProtectedRoute exact path='/movies' component={MovieHome} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <Route path="/auth0Callback" render={({ history }) => < Auth {...history} />} />
            <Route path="*" component={Login} status={401} />
          </Switch>
        </AuthProvider>

      </ErrorBoundary>


    </Router>
  );
}

export default App;

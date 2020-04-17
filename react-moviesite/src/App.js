import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home'
import MovieDetails from './Movie/MovieDetails/MovieDetails'
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/movies/:id' render= {(props) => <MovieDetails id={props.match.params.id}/> } />
        <Route exact path='/' component={Home} />
      </Switch>
      
    </Router>
  );
}

export default App;

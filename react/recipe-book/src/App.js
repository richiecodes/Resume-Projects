import React from 'react';
import RecipeSearch from './pages/RecipeSearch';
import Home from './pages/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  return(
  <div className="App">
    <h1 className="app-title">Yumbo Gumbo</h1>
    <Router>
        <Nav />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/recipe-search" component={RecipeSearch} />
        </Switch>
      </Router>
      </div>
  )
}

export default App;
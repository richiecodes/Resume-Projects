import React from 'react';
import RecipeSearch from './pages/RecipeSearch';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return(
  <div className="App">
    <Router>
      
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe-search" component={RecipeSearch} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      </div>
    
  )
}

export default App;
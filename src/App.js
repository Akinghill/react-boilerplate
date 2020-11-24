import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Pokedex from './pages/pokedex.page';
import Pokemon from './pages/pokemon.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Pokedex}></Route>
        <Route path="/:pokemonId" component={Pokemon}></Route>
      </Switch>
    </div>
  );
}

export default App;

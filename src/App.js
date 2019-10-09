import React from 'react';
import DogsPage from './DogsPage';
import CatsPage from './CatsPage';
import PigsPage from './PigsPage';
import ChickensPage from './ChickensPage';
import CowsPage from './CowsPage';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Let's find some animals</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/animals/cats">
                Cats
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/chickens">
                Chickens
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/cows">
                Cows
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/dogs">
                Dogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/animals/pigs">
                Pigs
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/animals/cats">
            <CatsPage />
          </Route>
          <Route path="/animals/dogs">
            <DogsPage />
          </Route>
          <Route path="/animals/chickens">
            <ChickensPage />
          </Route>
          <Route path="/animals/cows">
            <CowsPage />
          </Route>
          <Route path="/animals/pigs">
            <PigsPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

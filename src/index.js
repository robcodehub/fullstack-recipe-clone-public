import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

import { Provider, connect } from 'react-redux';
import { HashRouter, Link, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Home from './Home';
import Recipes from './Recipes';
import Users from './Users';

import OneRecipe from './OneRecipe';
import OneUser from './OneUser';



import Chefs from './Chefs';
import AddNewRecipeForm from './AddNewRecipeForm';
import AddNewUserForm from './AddNewUserForm';
import HealthyRecipes from './HealthyRecipes';
import TopChefs from './TopChefs';

import store, {setRecipesThunk, setUsersThunk} from './store';


const root = document.querySelector('#root')

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  async componentDidMount() {
    store.dispatch(setRecipesThunk());
    store.dispatch(setUsersThunk());
    //fetchRecipes();
    //fetchUsers();
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Route component = {Nav} />
          <Switch>
            <Route path = '/' component = { Home } exact />
            <Route path = '/users' component = { Users } exact />
            <Route path = '/recipes' component = { Recipes } exact />
            <Route path = '/chefs' component = { Chefs } exact />
            <Route path = '/recipes/:id' component = { OneRecipe } />
            <Route path = '/users/:id' component = { OneUser } />
            <Route path = '/addrecipe' component = { AddNewRecipeForm } />
            <Route path = '/adduser' component = { AddNewUserForm } />
            <Route component = { Home } />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

render(<Provider store={store}><App /></Provider>, root)


//render(<hr />, document.querySelector('#root'));
